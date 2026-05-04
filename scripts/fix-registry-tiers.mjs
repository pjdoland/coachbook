#!/usr/bin/env node
/**
 * One-off rewrite of sources/registry.md.
 *
 * Six entries currently live under "## Tier 2" but their `tier:` field
 * is `1`. Move each block (the `### id` line and its body) up into the
 * Tier 1 section (just before "## Tier 2 — Reputable secondary"), in
 * the original order they appear.
 *
 * Idempotent: safe to re-run; if the misplaced IDs are no longer in
 * the wrong section, the script reports zero moves.
 */
import fs from 'node:fs';
import path from 'node:path';

const file = path.resolve('sources/registry.md');
const text = fs.readFileSync(file, 'utf8');
const lines = text.split('\n');

// Walk and bucket: section tier and per-entry blocks (id + body).
let sectionTier = null;
let cursor = null;
const movables = [];

const flush = () => {
  if (!cursor) return;
  if (cursor.tier && cursor.section && cursor.tier !== cursor.section) {
    movables.push({ ...cursor });
  }
  cursor = null;
};

for (let i = 0; i < lines.length; i += 1) {
  const ln = lines[i];
  const sec = ln.match(/^##\s+Tier\s+([1-4])\b/);
  if (sec) {
    flush();
    sectionTier = parseInt(sec[1], 10);
    continue;
  }
  const idHead = ln.match(/^###\s+([a-z0-9][a-z0-9-]*)\s*$/);
  if (idHead) {
    flush();
    cursor = { id: idHead[1], section: sectionTier, tier: null, start: i, end: i };
    continue;
  }
  if (cursor) {
    cursor.end = i;
    const t = ln.match(/^-\s*tier:\s*([1-4])\b/);
    if (t) cursor.tier = parseInt(t[1], 10);
  }
}
flush();

if (movables.length === 0) {
  console.log('No misplaced entries — registry is consistent.');
  process.exit(0);
}

// Each block: from its ### line through to the line before the next
// ### / ## boundary, including any trailing blank lines that belong
// to it. Collect blocks (in document order) and the deletion ranges.
const blocks = movables.map((m) => {
  // Extend end to include the trailing blank line(s) before the next
  // structural line. The walker stops at the next ### or ## (not
  // included). Trim trailing blanks: keep one blank between entries.
  let end = m.end;
  while (end >= m.start && lines[end].trim() === '') end -= 1;
  return {
    id: m.id,
    text: lines.slice(m.start, end + 1).join('\n'),
    start: m.start,
    end,
  };
});

// Find the line of the first "## Tier 2" so we know where to insert
// (just before it, with one blank line between).
let tier2Line = -1;
for (let i = 0; i < lines.length; i += 1) {
  if (/^##\s+Tier\s+2\b/.test(lines[i])) { tier2Line = i; break; }
}
if (tier2Line === -1) {
  console.error('Could not find "## Tier 2" heading.');
  process.exit(1);
}

// Build the rewritten file: start with all lines, but replace the
// blocks-to-move with empty placeholders, then insert the moved
// blocks immediately before tier2Line.
//
// Strategy: build a Set of indices to drop, then collect the insert
// payload (the blocks' text in original order), and emit.
const drop = new Set();
for (const b of blocks) {
  for (let i = b.start; i <= b.end; i += 1) drop.add(i);
}

// Insert payload — a blank line between blocks for readability.
const payload = blocks.map((b) => b.text).join('\n\n') + '\n';

const out = [];
for (let i = 0; i < lines.length; i += 1) {
  if (i === tier2Line) {
    // Strip a single trailing blank line at the end of out (so we
    // don't double-blank between the inserted block and Tier 2).
    while (out.length > 0 && out[out.length - 1].trim() === '') out.pop();
    out.push(''); // one blank before insert
    out.push(payload);
    out.push(''); // one blank before Tier 2 header
  }
  if (drop.has(i)) continue;
  out.push(lines[i]);
}

// Squash any triple-blank runs created by deletion.
const collapsed = [];
let blankRun = 0;
for (const ln of out) {
  if (ln.trim() === '') {
    blankRun += 1;
    if (blankRun > 2) continue;
  } else {
    blankRun = 0;
  }
  collapsed.push(ln);
}

fs.writeFileSync(file, collapsed.join('\n'));
console.log(`Moved ${blocks.length} entries into Tier 1 section:`);
for (const b of blocks) console.log(`  - ${b.id}`);
