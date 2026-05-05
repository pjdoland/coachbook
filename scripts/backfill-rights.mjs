#!/usr/bin/env node
/**
 * Backfill the `- rights:` field on sources/registry.md entries
 * that don't have one.
 *
 * Each entry's rights are derived from its `- type:` field where the
 * mapping is unambiguous (SEC filings -> public-domain, brand
 * websites -> brand, PurseForum threads -> community). Ambiguous
 * types (catalog, article, blog, encyclopedia) get assigned
 * `fair-use-commentary` because they're being quoted in commentary
 * and the archive doesn't republish them.
 *
 * Run with --dry to preview. Without flags it edits in place.
 */
import fs from 'node:fs';
import path from 'node:path';

const DRY = process.argv.includes('--dry');
const file = path.resolve('sources/registry.md');
const text = fs.readFileSync(file, 'utf8');

// Type -> rights mapping. Anything not in this map gets
// 'fair-use-commentary' as the default. Entries already carrying a
// rights field are skipped entirely.
const TYPE_TO_RIGHTS = {
  'sec-filing': 'public-domain',
  'sec-filing-10k': 'public-domain',
  'sec-filing-s1': 'public-domain',
  'filing-index': 'public-domain',
  'patent': 'public-domain',
  'trademark-database': 'public-domain',
  'trademark-record': 'public-domain',
  'finding-aid': 'institutional',
  'museum-collection-record': 'institutional',
  'museum-page': 'institutional',
  'forum': 'community',
  'forum-thread': 'community',
  'wiki': 'community',
  'brand-page': 'brand',
  'brand-social-post': 'brand',
  'catalog': 'fair-use-commentary',
  'catalog-archive': 'fair-use-commentary',
  'book': 'fair-use-commentary',
  'article': 'fair-use-commentary',
  'trade-press-article': 'fair-use-commentary',
  'trade-press-obituary': 'fair-use-commentary',
  'encyclopedia': 'fair-use-commentary',
  'design-essay': 'fair-use-commentary',
  'oral-history': 'fair-use-commentary',
  'dealer-blog': 'community',
  'collector-blog': 'community',
  'blog': 'community',
};

const lines = text.split('\n');
let cursor = null;
const decisions = []; // [{id, line, type, rights}]

const flush = () => {
  if (!cursor) return;
  if (cursor.hasRights) { cursor = null; return; }
  const rights = TYPE_TO_RIGHTS[cursor.type] ?? 'fair-use-commentary';
  decisions.push({ ...cursor, rights });
  cursor = null;
};

for (let i = 0; i < lines.length; i += 1) {
  const ln = lines[i];
  if (/^##\s+Tier\s+/.test(ln)) flush();
  const idMatch = ln.match(/^###\s+([a-z0-9][a-z0-9-]*)\s*$/);
  if (idMatch) {
    flush();
    cursor = { id: idMatch[1], line: i, type: null, hasRights: false, lastBulletLine: i };
    continue;
  }
  if (!cursor) continue;
  const tierMatch = ln.match(/^-\s*type:\s*(.+?)\s*$/);
  if (tierMatch) cursor.type = tierMatch[1];
  if (/^-\s*rights:/.test(ln)) cursor.hasRights = true;
  if (/^-\s/.test(ln)) cursor.lastBulletLine = i;
  if (/^###|^##/.test(lines[i + 1] ?? '')) {
    // Next entry coming — flush handled at top of loop on the
    // next iteration.
  }
}
flush();

if (decisions.length === 0) {
  console.log('All entries already have rights set.');
  process.exit(0);
}

console.log(`Backfilling rights on ${decisions.length} entries:\n`);
for (const d of decisions) {
  console.log(`  ${d.id.padEnd(40)} type: ${(d.type ?? '?').padEnd(28)} -> ${d.rights}`);
}

if (DRY) {
  console.log('\n--dry: no changes written.');
  process.exit(0);
}

// Write the rights line right after the type line for each entry.
// Walk again, this time inserting where needed.
const out = [];
let i = 0;
const insertAfter = new Map();
for (const d of decisions) insertAfter.set(d.line, d);

let cur = null;
for (i = 0; i < lines.length; i += 1) {
  out.push(lines[i]);
  if (insertAfter.has(i)) {
    cur = insertAfter.get(i);
    continue;
  }
  if (cur) {
    if (/^-\s*type:/.test(lines[i])) {
      out.push(`- rights: ${cur.rights}`);
      cur = null;
    } else if (/^###|^##/.test(lines[i + 1] ?? '') || lines[i].trim() === '') {
      // Reached end of block without a type line — append rights
      // before the structural break.
      out.push(`- rights: ${cur.rights}`);
      cur = null;
    }
  }
}

fs.writeFileSync(file, out.join('\n'));
console.log(`\nWrote ${decisions.length} rights lines into sources/registry.md.`);
