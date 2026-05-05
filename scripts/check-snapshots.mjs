#!/usr/bin/env node
/**
 * Audit / resolve archive.org snapshots in sources/registry.md.
 *
 * Each registry entry has a `- snapshot:` field. Entries with
 * `snapshot: TODO` need a Wayback Machine snapshot URL captured.
 *
 * Modes:
 *   --report (default) — list every TODO entry with its url field,
 *                         grouped by tier, so a human can capture
 *                         them manually.
 *   --resolve         — query archive.org's wayback availability API
 *                         (https://archive.org/wayback/available)
 *                         for each TODO entry's url, and rewrite the
 *                         registry with any existing snapshots
 *                         it finds.
 *   --save            — POST to https://web.archive.org/save/<url>
 *                         to request a fresh snapshot. Slow, rate-
 *                         limited. Use sparingly. Not run by default.
 *
 * The script preserves entries that already have a non-TODO snapshot.
 */
import fs from 'node:fs';
import path from 'node:path';

const MODE = process.argv.includes('--resolve')
  ? 'resolve'
  : process.argv.includes('--save')
    ? 'save'
    : 'report';

const file = path.resolve('sources/registry.md');
const text = fs.readFileSync(file, 'utf8');
const lines = text.split('\n');

let sectionTier = null;
let cursor = null;
const entries = [];
const flush = () => {
  if (!cursor) return;
  entries.push({ ...cursor });
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
    cursor = {
      id: idHead[1],
      sectionTier,
      url: null,
      snapshot: null,
      snapshotLine: null,
      start: i,
    };
    continue;
  }
  if (cursor) {
    const u = ln.match(/^-\s*url:\s*(.+?)\s*$/);
    if (u) cursor.url = u[1];
    const snap = ln.match(/^-\s*snapshot:\s*(.+?)\s*$/);
    if (snap) {
      cursor.snapshot = snap[1];
      cursor.snapshotLine = i;
    }
  }
}
flush();

const todos = entries.filter((e) => e.snapshot === 'TODO' || (e.snapshot && e.snapshot.startsWith('TODO')));

if (MODE === 'report') {
  console.log(`${todos.length} entries need archive.org snapshots:\n`);
  for (const tier of [1, 2, 3, 4]) {
    const inTier = todos.filter((e) => e.sectionTier === tier);
    if (inTier.length === 0) continue;
    console.log(`Tier ${tier} (${inTier.length}):`);
    for (const e of inTier) {
      console.log(`  ${e.id}`);
      console.log(`    ${e.url ?? '(no url)'}`);
    }
    console.log('');
  }
  console.log('To check for existing wayback captures: --resolve');
  console.log('To request fresh captures (slow): --save');
  process.exit(0);
}

async function checkAvailable(url) {
  // Wayback Machine availability API. Returns { archived_snapshots: { closest: { ... } } }.
  // Handles HTTP errors and missing url gracefully.
  if (!url) return null;
  const api = `https://archive.org/wayback/available?url=${encodeURIComponent(url)}`;
  try {
    const res = await fetch(api);
    if (!res.ok) return null;
    const data = await res.json();
    const closest = data?.archived_snapshots?.closest;
    if (closest?.available && closest.url) return closest.url;
    return null;
  } catch {
    return null;
  }
}

async function requestSave(url) {
  if (!url) return null;
  // Public save endpoint. Returns the new snapshot URL on success.
  // Not authenticated; rate-limited per IP.
  try {
    const res = await fetch(`https://web.archive.org/save/${url}`, {
      method: 'GET',
      redirect: 'follow',
    });
    if (!res.ok) return null;
    return res.url;
  } catch {
    return null;
  }
}

if (MODE === 'resolve' || MODE === 'save') {
  const action = MODE === 'resolve' ? checkAvailable : requestSave;
  console.log(`Checking ${todos.length} entries via archive.org…\n`);

  const updates = [];
  let i = 0;
  for (const e of todos) {
    i += 1;
    process.stdout.write(`[${i}/${todos.length}] ${e.id}… `);
    const snapUrl = await action(e.url);
    if (snapUrl) {
      console.log('found');
      updates.push({ ...e, snapUrl });
    } else {
      console.log('none');
    }
    // brief delay to be polite
    await new Promise((r) => setTimeout(r, 250));
  }

  if (updates.length === 0) {
    console.log('\nNo snapshots resolved.');
    process.exit(0);
  }

  console.log(`\n${updates.length} snapshots resolved. Writing to registry…`);
  // Replace the snapshot line in each entry.
  for (const u of updates) {
    if (u.snapshotLine == null) continue;
    lines[u.snapshotLine] = `- snapshot: ${u.snapUrl}`;
  }
  fs.writeFileSync(file, lines.join('\n'));
  console.log('Done.');
}
