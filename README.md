# coachbook

Vintage Coach handbag archive covering 1941–2002 — from Gail Leather
Products through the Cashin years, the Classic NYC era, and the Krakoff
transition. A reference site over a Markdown content tree, built behind
Cloudflare Access during compilation and flipped public once the launch
checklist is met.

## What this is

- **Scope**: vintage Coach Leatherware, 1941–~2002. Out of scope: post-
  2002 mainstream Signature/Poppy lines except as contrast points.
- **Sourcing**: free online sources only, $0 budget. No purchases. The
  vintage-Coach community runs on folklore; this archive imposes a
  two-source rule, four confidence tiers (`confirmed` / `likely` /
  `tentative` / `disputed`), a per-claim provenance trail, and an
  `errata.md` log so corrections are public.
- **Voice**: factual, scannable, no marketing language. See `STYLE.md`.

## Layout

Each top-level directory is a content category. Markdown files with YAML
frontmatter; Astro content collections type-check the frontmatter at
build time (`src/content/config.ts`).

| Directory | Count | Purpose |
|-----------|-------|---------|
| `models/` | 75 entries | One file per bag style — Willis, Court, Stewardess, Cashin Carry, Sheridan, Madison, etc. |
| `designers/` | 3 entries | Bonnie Cashin, Reed Krakoff, the Cahn family. |
| `authentication/` | 12 topic pages + 4 counterfeit families | Era-keyed authentication matrix: creed, serial, hangtag, hardware, zipper, leather, stitching, lining, country-of-origin, packaging, plus toolkit, decision tree, and pre-creed-era guidance. |
| `colors/` | 14 colors + index | British Tan, Black, Burgundy, Mahogany, Hunter, Putty, Navy, Saddle, Camel, Bordeaux, Tabac, Khaki, Cream, Bone. |
| `catalogs/` | 10 catalog stubs + index | Dated catalog references 1985–2000 awaiting scan retrieval (`RETRIEVAL.md`). |
| `history/` | `timeline.md` | Company timeline with per-event confidence tags. |
| `care/` | `index.md` | Leather conditioning, brass polishing, the historic Coach Factory Restoration program. |
| `creed-formats/` | empty | Reserved for per-variant creed-format pages once retrieval lands the dated examples. |
| `sources/` | `registry.md` | Stable source IDs, tiers, URLs, archive.org snapshots. Build-time checks fail on any unregistered citation. |
| `research/` | 10 files (`A`–`J`) | Phase 0 working notes — primary research feeding the published entries. |
| `src/` | Astro app | Pages, layouts, content-collection schemas. The site is a thin layer over the Markdown tree. |

Top-level documents:

- `PLAN.md` — canonical project doc (scope, phasing, fact-checking
  discipline, findings to date).
- `STYLE.md` — editorial conventions (voice, citations, confidence tags,
  frontmatter rules, naming).
- `errata.md` — public correction log.
- `RETRIEVAL.md` — manual-pull operations (SEC EDGAR, FindLaw, USPTO
  TSDR, PurseForum) blocked by Cloudflare from headless fetch.
- `LAUNCH.md` — private→public flip checklist.
- `bibliography.md`, `market.md` — secondary references and observed
  resale data.

## Running the site locally

```sh
npm install
npm run dev      # local dev server
npm run build    # static build to dist/
npm run preview  # preview the built site
npm run check    # type-check Astro + content schemas
```

The Astro skeleton lives in `src/`. Content collections load the
top-level directories via the glob loader; schemas are in
`src/content/config.ts`.

## Reading the archive

Start at [`authentication/decision-tree.md`](./authentication/decision-tree.md) —
"I have a bag and want to know if it's real" — and branch from there
into the era-keyed matrix and the per-model entries. The decision tree
links into creed, serial, hardware, zipper, and country-of-origin
references, which in turn link to model pages.

## Contributing

- Read [`STYLE.md`](./STYLE.md) before adding or editing entries.
  Voice, citation format, confidence tags, frontmatter requirements,
  and high-folklore zones are all defined there.
- Corrections after publication go to [`errata.md`](./errata.md). Do
  not silently overwrite; log every change.
- For the open browser-required source pulls (SEC EDGAR S-1, USPTO
  patent records, UCLA Cashin contract document, FindLaw contract
  mirror, PurseForum scan threads), see [`RETRIEVAL.md`](./RETRIEVAL.md).

## Status

- **Phase 1 — skeleton & schema**: complete. Repo scaffold, Astro
  content collections, `STYLE.md`, source registry seeded.
- **Phase 2 — core canon**: complete. 30+ models published (current
  count: 75); Bonnie Cashin, Reed Krakoff, and Cahn-family designer
  entries; 14 colors; authentication v1 covering creed, serial,
  hangtag, hardware, zipper, leather, stitching, lining,
  country-of-origin, packaging, toolkit, decision tree.
- **Phase 3 — catalogs & primary sources**: underway. 10 catalog stubs
  span 1985–2000 awaiting scan retrieval per `RETRIEVAL.md`; first
  Tier 1 primary source (Coach 2003 10-K) ingested and propagated.
- **Phase 4 — long tail & community**: ongoing. Remaining models,
  regional/seasonal variants, submission pipeline.

The site is **private now, public later**. The `LAUNCH.md` checklist
governs the flip.
