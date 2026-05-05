#!/usr/bin/env node
/**
 * Lint editorial folklore zones.
 *
 * STYLE.md §4 enumerates the high-folklore zones where the community
 * is most often wrong. This script encodes the *programmatically
 * checkable* subset — the rules that can be expressed as frontmatter
 * field comparisons — and exits 1 on violations so CI / pre-commit
 * can gate.
 *
 * Rules encoded:
 *
 *   F1. designer: bonnie-cashin + introduced > 1974 (Cashin tenure ended
 *       1974; later silhouettes cannot be Cashin designs).
 *   F2. designer: reed-krakoff + introduced < 1996 (Krakoff hire date
 *       per coach-10k-fiscal-2003).
 *   F3. era_code: E1 + introduced > 1961 (Pre-Cashin window ends 1961).
 *   F4. era_code: E2 + introduced < 1962 or > 1974 (Cashin window).
 *   F5. era_code: E5 + introduced < 1995.
 *   F6. designer_confidence: confirmed + designer: bonnie-cashin
 *       + sources don't include ucla-cashin-papers OR a 1962–74 catalog
 *       source (per STYLE.md §4.2 the bar is one of those primary
 *       sources). The check pass-through is loose: we require either
 *       ucla-cashin-papers or coach-catalogs-1960-1989 in the sources
 *       array.
 *   F7. body text contains "Manhattan Leather Bags" (community misnomer
 *       per STYLE.md §4.7) — must be inside a quotation-mark or backtick
 *       to read as quoted folklore, not as the archive's own claim.
 *
 * Run:  node scripts/check-folklore.mjs
 * Exits 1 if any violations are found.
 */
import fs from 'node:fs';
import path from 'node:path';

const issues = [];
const dir = path.resolve('models');
const designerDir = path.resolve('designers');

function readEntries(folder) {
  if (!fs.existsSync(folder)) return [];
  return fs
    .readdirSync(folder)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const text = fs.readFileSync(path.join(folder, f), 'utf8');
      const fmMatch = text.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
      if (!fmMatch) return null;
      return { file: path.join(folder, f), fm: fmMatch[1], body: fmMatch[2] };
    })
    .filter(Boolean);
}

function getField(fm, name) {
  const m = fm.match(new RegExp(`^${name}:\\s*(.+?)\\s*$`, 'm'));
  return m ? m[1] : null;
}

function getYear(fm, name) {
  const raw = getField(fm, name);
  if (!raw) return null;
  const match = raw.match(/(\d{4})/);
  return match ? parseInt(match[1], 10) : null;
}

function getList(fm, name) {
  // Match an indented block-list under `name:` OR an inline `[…]`.
  const blockRe = new RegExp(`^${name}:\\s*\\n((?:\\s+-\\s+\\S+.*\\n)+)`, 'm');
  const block = fm.match(blockRe);
  if (block) {
    return block[1]
      .split('\n')
      .map((ln) => ln.replace(/^\s+-\s+/, '').trim().replace(/^["']|["']$/g, ''))
      .filter(Boolean);
  }
  const inlineRe = new RegExp(`^${name}:\\s*\\[(.*?)\\]`, 'm');
  const inline = fm.match(inlineRe);
  if (inline) {
    return inline[1]
      .split(',')
      .map((s) => s.trim().replace(/^["']|["']$/g, ''))
      .filter(Boolean);
  }
  return [];
}

const models = readEntries(dir);

for (const { file, fm, body } of models) {
  const designer = getField(fm, 'designer');
  const designerConf = getField(fm, 'designer_confidence');
  const eraCode = getField(fm, 'era_code');
  const introduced = getYear(fm, 'introduced');
  const sources = getList(fm, 'sources');

  // F1: Cashin attribution + post-1974 introduction
  if (designer === 'bonnie-cashin' && introduced && introduced > 1974) {
    issues.push(`F1 ${file}: designer=bonnie-cashin but introduced=${introduced} (Cashin tenure ended 1974)`);
  }
  // F2: Krakoff attribution + pre-1996 introduction
  if (designer === 'reed-krakoff' && introduced && introduced < 1996) {
    issues.push(`F2 ${file}: designer=reed-krakoff but introduced=${introduced} (Krakoff hired Dec 1996)`);
  }
  // F3-F5: era_code vs introduced year
  if (eraCode && introduced) {
    const code = eraCode.split('-')[0];
    const yearByEra = {
      E1: [1941, 1961],
      E2: [1962, 1974],
      E3: [1975, 1984],
      E4: [1985, 1994],
      E5: [1995, 2002],
    };
    const range = yearByEra[code];
    if (range && (introduced < range[0] || introduced > yearByEra[eraCode.split('-').pop()]?.[1] || range[1])) {
      // For ranges like E3-E4, expand the upper bound to include the second era
      const upper = yearByEra[eraCode.split('-').pop()]?.[1] ?? range[1];
      const lower = range[0];
      if (introduced < lower || introduced > upper) {
        issues.push(`F3-5 ${file}: era_code=${eraCode} but introduced=${introduced} (window ${lower}-${upper})`);
      }
    }
  }
  // F6: confirmed Cashin designer attribution requires primary sourcing
  if (designer === 'bonnie-cashin' && designerConf === 'confirmed') {
    const hasPrimary = sources.includes('ucla-cashin-papers')
      || sources.includes('coach-catalogs-1960-1989');
    if (!hasPrimary) {
      issues.push(`F6 ${file}: designer=bonnie-cashin designer_confidence=confirmed but no Tier-1 Cashin source (need ucla-cashin-papers or coach-catalogs-1960-1989)`);
    }
  }
  // F7: "Manhattan Leather Bags" anywhere in body, not quoted
  const mlbMatches = body.match(/Manhattan Leather Bags/g);
  if (mlbMatches) {
    // Allow if every occurrence is quoted (preceded by " or `)
    const ok = body.split(/\s+/).every((tok) => !/Manhattan/.test(tok) || /["`]Manhattan/.test(tok));
    if (!ok) {
      issues.push(`F7 ${file}: 'Manhattan Leather Bags' folklore mentioned without quoting; must be quoted to mark as misnomer`);
    }
  }
}

console.log(`Checked ${models.length} model entries`);
if (issues.length === 0) {
  console.log('No folklore-zone violations.');
  process.exit(0);
}
console.error(`\n${issues.length} folklore-zone violation${issues.length === 1 ? '' : 's'}:\n`);
for (const i of issues) console.error(`  ✗ ${i}`);
process.exit(1);
