#!/usr/bin/env node
/**
 * Audit model entries for editorial gaps.
 *
 * Reports per-entry which of these editorial markers are missing:
 *
 *   - has-facts           — frontmatter facts: block exists
 *   - has-tier1           — at least one Tier 1 source cited
 *   - has-era-code        — era_code field set
 *   - has-introduced      — introduced field set (year or string)
 *   - has-discontinued    — discontinued field set
 *   - has-related         — related: array set
 *   - body-length         — body words >= 200 (rough completeness threshold)
 *
 * Output: a per-entry table with check/cross marks plus an overall
 * counts summary. Exits 0 in all cases — this is informational, not
 * blocking.
 *
 * Run:  node scripts/audit-models.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

// Read the registry's tier map so we can flag has-tier1.
function loadTiers() {
  const file = path.resolve('sources/registry.md');
  const text = fs.readFileSync(file, 'utf8');
  const map = new Map();
  const re = /^###\s+([a-z0-9][a-z0-9-]*)\s*$([\s\S]*?)(?=^###\s|\z)/gm;
  for (const m of text.matchAll(re)) {
    const tierMatch = m[2].match(/^-\s*tier:\s*([1-4])\b/m);
    if (tierMatch) map.set(m[1], parseInt(tierMatch[1], 10));
  }
  return map;
}

const TIERS = loadTiers();
const dir = path.resolve('models');
const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'));

const rows = [];

for (const file of files) {
  const slug = file.replace(/\.md$/, '');
  const text = fs.readFileSync(path.join(dir, file), 'utf8');
  const fmMatch = text.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
  if (!fmMatch) continue;
  const fm = fmMatch[1];
  const body = fmMatch[2] ?? '';

  // Crude YAML parse for the markers we care about.
  const has = (re) => re.test(fm);
  const sourcesArr = (() => {
    const m = fm.match(/^sources:\s*\n((?:\s+-\s+\S+\s*\n)+)/m);
    if (!m) {
      const inline = fm.match(/^sources:\s*\[(.*?)\]/m);
      if (!inline) return [];
      return inline[1].split(',').map((s) => s.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
    }
    return m[1]
      .split('\n')
      .map((ln) => ln.replace(/^\s+-\s+/, '').trim())
      .filter(Boolean);
  })();

  const wordCount = body.split(/\s+/).filter(Boolean).length;
  const hasTier1 = sourcesArr.some((id) => TIERS.get(id) === 1);

  rows.push({
    slug,
    facts: has(/^facts:/m),
    tier1: hasTier1,
    eraCode: has(/^era_code:/m),
    introduced: has(/^introduced:/m),
    discontinued: has(/^discontinued:/m),
    related: has(/^related:/m),
    wordsOk: wordCount >= 200,
    words: wordCount,
  });
}

const c = (b) => (b ? '✓' : '·');
console.log('slug                                facts  T1  era  intro  disc  rel   words');
console.log('----                                -----  --  ---  -----  ----  ---   -----');
for (const r of rows.sort((a, b) => a.slug.localeCompare(b.slug))) {
  console.log(
    `${r.slug.padEnd(36)}  ${c(r.facts).padEnd(5)}  ${c(r.tier1).padEnd(2)}  ${c(r.eraCode).padEnd(3)}  ${c(r.introduced).padEnd(5)}  ${c(r.discontinued).padEnd(4)}  ${c(r.related).padEnd(3)}   ${r.words}`,
  );
}

const total = rows.length;
const tally = (k) => rows.filter((r) => r[k]).length;
console.log(`\n${total} entries`);
console.log(`  facts: blocks       ${tally('facts')}/${total}`);
console.log(`  Tier-1 backed       ${tally('tier1')}/${total}`);
console.log(`  era_code set        ${tally('eraCode')}/${total}`);
console.log(`  introduced set      ${tally('introduced')}/${total}`);
console.log(`  discontinued set    ${tally('discontinued')}/${total}`);
console.log(`  related set         ${tally('related')}/${total}`);
console.log(`  body >= 200 words   ${tally('wordsOk')}/${total}`);
