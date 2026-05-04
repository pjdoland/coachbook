/**
 * Build-time helpers for source-tier roll-ups.
 *
 * The source registry is the only file that knows each source's tier;
 * detail pages cite by ID alone. These helpers read sources/registry.md
 * once at build start, build an ID → tier map, and let pages compute
 * a tier roll-up for any list of cited source IDs.
 */
import fs from 'node:fs';
import path from 'node:path';

let cache: Map<string, number> | null = null;

function loadRegistry(): Map<string, number> {
  if (cache) return cache;
  const file = path.resolve('sources/registry.md');
  const text = fs.readFileSync(file, 'utf8');
  const map = new Map<string, number>();
  // Parse `### <id>` followed (within the next several lines) by `- tier: <n>`.
  // The schema in registry.md is deterministic enough that this works
  // without YAML; the alternative is parsing rehype-AST on a registry
  // we've already serialized.
  const re = /^###\s+([a-z0-9][a-z0-9-]*)\s*$([\s\S]*?)(?=^###\s|\z)/gm;
  for (const m of text.matchAll(re)) {
    const id = m[1];
    const block = m[2];
    const tierMatch = block.match(/^-\s*tier:\s*([1-4])\b/m);
    if (tierMatch) map.set(id, parseInt(tierMatch[1], 10));
  }
  cache = map;
  return map;
}

export interface EvidenceSummary {
  total: number;
  byTier: Record<1 | 2 | 3 | 4, number>;
  /** The strongest tier present (1 is strongest). null if no sources cited. */
  best: 1 | 2 | 3 | 4 | null;
  /** Short editorial label: "Primary-source backed" etc. */
  label: string;
  /** Stripped citation list with their tier annotation. */
  cited: { id: string; tier: number | null }[];
}

const TIER_LABELS: Record<number, string> = {
  1: 'Primary-source backed',
  2: 'Reputable-secondary backed',
  3: 'Community-source backed',
  4: 'Listing-evidence only',
};

export function summarize(sourceIds: string[] | undefined | null): EvidenceSummary {
  const registry = loadRegistry();
  const ids = sourceIds ?? [];
  const cited = ids.map((id) => ({ id, tier: registry.get(id) ?? null }));
  const byTier = { 1: 0, 2: 0, 3: 0, 4: 0 } as Record<1 | 2 | 3 | 4, number>;
  for (const c of cited) {
    if (c.tier && c.tier >= 1 && c.tier <= 4) byTier[c.tier as 1 | 2 | 3 | 4] += 1;
  }
  let best: EvidenceSummary['best'] = null;
  for (const t of [1, 2, 3, 4] as const) {
    if (byTier[t] > 0) { best = t; break; }
  }
  const label = best ? TIER_LABELS[best] : 'No sources cited';
  return { total: ids.length, byTier, best, label, cited };
}
