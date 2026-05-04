import fs from 'node:fs';
import path from 'node:path';
import { visit, SKIP } from 'unist-util-visit';

// Read the source registry once at plugin construction. Every `### foo`
// header is a source ID. We intentionally exclude colors/, models/,
// and other bracket-shaped tokens that share the [kebab] surface form
// — only IDs that actually resolve in the registry get linkified.
function loadRegistry() {
  const registryPath = path.resolve('sources/registry.md');
  const text = fs.readFileSync(registryPath, 'utf8');
  const ids = new Set();
  for (const m of text.matchAll(/^###\s+([a-z0-9][a-z0-9-]*)\s*$/gm)) {
    ids.add(m[1]);
  }
  return ids;
}

const SKIP_TAGS = new Set(['a', 'code', 'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']);

export default function rehypeSourceCitations(opts = {}) {
  const base = opts.base ?? '/';
  const registry = opts.registry ?? loadRegistry();
  const cite = /\[([a-z0-9][a-z0-9-]*)\]/g;

  return (tree) => {
    visit(tree, 'text', (node, index, parent) => {
      if (!parent || index == null) return;
      if (parent.type === 'element' && SKIP_TAGS.has(parent.tagName)) return;
      const value = node.value;
      if (!value || value.indexOf('[') === -1) return;

      cite.lastIndex = 0;
      const out = [];
      let last = 0;
      let m;
      let touched = false;
      while ((m = cite.exec(value)) !== null) {
        const id = m[1];
        if (!registry.has(id)) continue;
        touched = true;
        if (m.index > last) out.push({ type: 'text', value: value.slice(last, m.index) });
        out.push({
          type: 'element',
          tagName: 'a',
          properties: {
            href: `${base}sources/#${id}`,
            className: ['source-cite'],
          },
          children: [{ type: 'text', value: m[0] }],
        });
        last = m.index + m[0].length;
      }
      if (!touched) return;
      if (last < value.length) out.push({ type: 'text', value: value.slice(last) });
      parent.children.splice(index, 1, ...out);
      return [SKIP, index + out.length];
    });
  };
}
