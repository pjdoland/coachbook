import fs from 'node:fs';
import path from 'node:path';
import { visit, SKIP } from 'unist-util-visit';

// Read every model frontmatter at build start to construct a name →
// slug map. We extract the canonical name plus also_known_as aliases
// from each file's YAML frontmatter without invoking a real parser:
// model frontmatters are uniform enough that a few regex grabs cover
// every entry currently in-tree.
function loadModels() {
  const dir = path.resolve('models');
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith('.md')) continue;
    const slug = file.replace(/\.md$/, '');
    const text = fs.readFileSync(path.join(dir, file), 'utf8');
    const fm = text.match(/^---\s*\n([\s\S]*?)\n---/);
    if (!fm) continue;
    const yaml = fm[1];
    const nameMatch = yaml.match(/^name:\s*(.+)$/m);
    const akaMatch = yaml.match(/^also_known_as:\s*\[(.*?)\]/m);
    const name = nameMatch ? nameMatch[1].replace(/^["']|["']$/g, '').trim() : null;
    const aliases = akaMatch
      ? akaMatch[1]
          .split(',')
          .map((s) => s.replace(/^["\s]+|["\s]+$/g, '').trim())
          .filter(Boolean)
      : [];
    if (name) out.push({ slug, name, aliases });
  }
  return out;
}

// Build a regex catalog. Sort by name length descending so a longer
// name like "Court Bag Large" is tried before "Court Bag". Each
// entry: { regex, slug }.
function buildCatalog(models) {
  const items = [];
  for (const m of models) {
    const labels = [m.name, ...m.aliases].filter(Boolean);
    for (const label of labels) {
      // Skip very short or generic names that would over-link.
      if (label.length < 5) continue;
      // Word boundaries: \b on either side. Allow trailing 's' for plurals.
      const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      items.push({
        label,
        slug: m.slug,
        regex: new RegExp(`\\b${escaped}s?\\b`),
      });
    }
  }
  items.sort((a, b) => b.label.length - a.label.length);
  return items;
}

const SKIP_TAGS = new Set([
  'a',
  'code',
  'pre',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'em',
  'strong', // skip inside emphasis to avoid awkward nested links
]);

export default function rehypeModelLinks(opts = {}) {
  const base = opts.base ?? '/';
  const models = opts.models ?? loadModels();
  const catalog = buildCatalog(models);

  return (tree, file) => {
    // Per-file: link each model only on its first occurrence so the
    // page doesn't fill with repetitive links.
    const linked = new Set();
    // Don't link a model in its own page (resolved by frontmatter slug
    // if available, otherwise by file basename).
    const ownSlug = file?.data?.astro?.frontmatter?.slug
      ?? (file?.path && path.basename(String(file.path), '.md'));

    visit(tree, 'text', (node, index, parent) => {
      if (!parent || index == null) return;
      if (parent.type === 'element' && SKIP_TAGS.has(parent.tagName)) return;
      const value = node.value;
      if (!value || value.length < 5) return;

      // Find the first un-linked match in this text node, if any.
      let bestStart = -1;
      let bestLen = 0;
      let bestSlug = null;
      let bestText = null;
      for (const item of catalog) {
        if (linked.has(item.slug)) continue;
        if (item.slug === ownSlug) continue;
        const m = value.match(item.regex);
        if (!m) continue;
        if (m.index == null) continue;
        // Prefer the earliest match; tie-break by longer label.
        if (
          bestStart === -1
          || m.index < bestStart
          || (m.index === bestStart && m[0].length > bestLen)
        ) {
          bestStart = m.index;
          bestLen = m[0].length;
          bestSlug = item.slug;
          bestText = m[0];
        }
      }
      if (bestStart === -1) return;

      const before = value.slice(0, bestStart);
      const after = value.slice(bestStart + bestLen);
      const out = [];
      if (before) out.push({ type: 'text', value: before });
      out.push({
        type: 'element',
        tagName: 'a',
        properties: {
          href: `${base}models/${bestSlug}/`,
          className: ['model-link'],
        },
        children: [{ type: 'text', value: bestText }],
      });
      if (after) out.push({ type: 'text', value: after });

      linked.add(bestSlug);
      parent.children.splice(index, 1, ...out);
      // Continue past the inserted nodes; the next text node may
      // contain another match for a different model.
      return [SKIP, index + out.length];
    });
  };
}
