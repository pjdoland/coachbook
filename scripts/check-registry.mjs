#!/usr/bin/env node
/**
 * Audit sources/registry.md.
 *
 * Verifies that each source entry's `tier:` field matches the section
 * it's listed under (## Tier 1 / Tier 2 / ...). The schema in the
 * registry instructs that "New sources are added in alphabetical-by-ID
 * order within each tier"; this script flags entries where the field
 * tier and the section tier disagree, plus any entry missing a tier
 * field, plus duplicate IDs.
 *
 * Run via:  node scripts/check-registry.mjs
 * Exits 1 on issues so CI / pre-commit can gate.
 */
import fs from 'node:fs';
import path from 'node:path';

const file = path.resolve('sources/registry.md');
const text = fs.readFileSync(file, 'utf8');

let currentSectionTier = null;
const entries = [];
const seen = new Map();
let issues = 0;

const lines = text.split(/\r?\n/);
let cursor = null;
const flush = () => {
  if (!cursor) return;
  if (seen.has(cursor.id)) {
    console.error(`✗ Duplicate ID at line ${cursor.line}: "${cursor.id}" (first seen at line ${seen.get(cursor.id)})`);
    issues += 1;
  } else {
    seen.set(cursor.id, cursor.line);
  }
  if (cursor.fieldTier == null) {
    console.error(`✗ Missing tier: field at line ${cursor.line}: "${cursor.id}"`);
    issues += 1;
  } else if (cursor.sectionTier != null && cursor.fieldTier !== cursor.sectionTier) {
    console.error(
      `✗ Section/field mismatch at line ${cursor.line}: "${cursor.id}" listed under Tier ${cursor.sectionTier} but field says tier: ${cursor.fieldTier}`,
    );
    issues += 1;
  }
  entries.push(cursor);
  cursor = null;
};

for (let i = 0; i < lines.length; i += 1) {
  const line = lines[i];
  const sectionMatch = line.match(/^##\s+Tier\s+([1-4])\b/);
  if (sectionMatch) {
    flush();
    currentSectionTier = parseInt(sectionMatch[1], 10);
    continue;
  }
  const idMatch = line.match(/^###\s+([a-z0-9][a-z0-9-]*)\s*$/);
  if (idMatch) {
    flush();
    cursor = {
      id: idMatch[1],
      line: i + 1,
      sectionTier: currentSectionTier,
      fieldTier: null,
    };
    continue;
  }
  if (cursor) {
    const tierField = line.match(/^-\s*tier:\s*([1-4])\b/);
    if (tierField) cursor.fieldTier = parseInt(tierField[1], 10);
  }
}
flush();

const byTier = entries.reduce((acc, e) => {
  if (e.fieldTier) acc[e.fieldTier] = (acc[e.fieldTier] || 0) + 1;
  return acc;
}, {});

console.log('');
console.log(`Registry: ${entries.length} entries`);
for (const [t, n] of Object.entries(byTier).sort()) {
  console.log(`  Tier ${t}: ${n}`);
}

if (issues > 0) {
  console.error(`\n${issues} issue${issues === 1 ? '' : 's'} found.`);
  process.exit(1);
}
console.log('All entries pass tier audit.');
