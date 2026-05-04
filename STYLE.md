# STYLE.md — Contributor and future-self style guide

This is the operational guide for writing entries in the coachbook archive.
The conventions here are pulled from `PLAN.md` (canonical project doc) and
the Phase 0 research files. If something here conflicts with `PLAN.md`,
`PLAN.md` wins — fix this file.

Goal: anyone (or future you) opening this repo cold can write a new entry
that fits without reinventing conventions.

---

## 1. Voice

- **Concise. Factual. No purple prose.** Treat each entry as reference,
  not advertising copy.
- **Past tense for historical events.** "Cashin departed in 1974,"
  not "Cashin departs in 1974."
- **Active voice.** "Coach introduced the Willis in 1980," not "The
  Willis was introduced by Coach in 1980."
- **Do not editorialize about resale value.** Market data lives in the
  market category with dated observations. No "highly collectible,"
  "holy grail," "underrated," "undervalued."
- **No marketing-speak.** Avoid "iconic," "timeless," "legendary,"
  "luxurious," "coveted," "storied," "quintessential." If a primary
  source uses such a word, it goes inside quotation marks with a
  citation. Do not paraphrase marketing language as your own.
- **Hedge honestly.** Use "likely," "tentative," "disputed" in the
  prose where the confidence tag is not `confirmed`. Never bury
  uncertainty.
- **No first-person.** No "I think," no "we believe." The archive is
  the voice; the contributor is invisible.

Good (from `research/B-history.md`):
> Cahns purchased Gail Leather in 1961; they did not found the company
> in 1941. Coach predates the Cahns by ~5 years.

Bad:
> The iconic Coach brand has its storied origins in 1941, when…

---

## 2. Citation format

Every factual claim cites a source by its **stable ID** from
`sources/registry.md` — never a bare URL in the body of an entry.

### Inline format

- Single source: `[source-id]`
- Multiple sources: `[id1, id2, id3]`
- Sources go immediately after the claim, before the period.

Examples:
- "Cashin's contract ended in 1974 [wwd-coach-early-years, lake-cashin-2016]."
- "Original company name was Gail Leather Products, not 'Manhattan
  Leather Bags' [fundinguniverse-coach, encyclopedia-com-coach-leatherware,
  wwd-coach-early-years]."

### Workflow when adding a new source

1. Add the source to `sources/registry.md` first, with all fields
   (id, url, snapshot, type, tier, title, accessed, rights, notes).
2. Then cite the new ID inline. Build-time checks fail if a cited
   ID is not in the registry.
3. Capture an archive.org snapshot URL and record it in the registry
   `snapshot:` field. URLs rot.

### Frontmatter `sources:` array

The frontmatter `sources:` array lists every source ID cited anywhere
in the entry. The inline `[id]` markers are the per-claim provenance;
the frontmatter list is the rollup for tooling.

---

## 3. Confidence tags

Every fact gets a confidence tag. Apply them in frontmatter `facts:`
blocks and inline in prose where helpful.

```yaml
confidence: confirmed | likely | tentative | disputed | mixed | log | framework
```

The first four are *claim* tags — the kind any fact in the archive
can carry. The last three are *meta* tags reserved for entries that
don't bear claims of their own (rollups, change-logs, structural
index pages); they exist so the schema can validate every entry's
confidence field without lying about pages where a single rollup tag
would misrepresent the contents.

| Tag | Definition | Example |
|-----|------------|---------|
| `confirmed` | ≥2 independent sources agree, or 1 Tier-1 primary source. | "1941: Coach founded as Gail Leather Products" — confirmed by `fundinguniverse-coach`, `encyclopedia-com-coach-leatherware`, `wwd-coach-early-years`. |
| `likely` | 1 Tier-1, or multiple Tier-2 sources that agree. | "1996: Reed Krakoff hired as creative director" — widely cited but not yet found in primary source. |
| `tentative` | 1 Tier-2 source, or multiple Tier-3 community sources only. Renders with a "tentative" badge on the site. | "Pre-1994 serial format `xxxx-xxx`" — repeated across Tier 3 collector sources without primary citation. |
| `disputed` | Sources disagree. The entry shows both positions and cites each. Renders with a "disputed" badge linked to a notes section. | "`B6D-9927` resolves to either Feb 1996 or Feb 2006 under the single-digit-year scheme" — see `research/E-authentication.md` §2. |
| `mixed` | Aggregate / rollup pages where individual claims carry their own per-event confidence tags and a single rollup tag would misrepresent the entry. Use sparingly; prefer per-claim tags wherever possible. | `history/timeline.md` — every event in the timeline has its own `confidence:` line; the page's frontmatter rollup is `mixed`. |
| `log` | Change-log entries: errata, bibliographies, and other meta-pages whose individual rows are dated records, not claims about Coach. | `errata.md`, `bibliography.md`. |
| `framework` | Structural index pages where the children carry their own confidence tags and the parent is purely a navigation node. | `authentication/counterfeits/index.md` — each counterfeit family beneath it has its own confidence tag. |

### Independence

Two sources are not independent if one quotes or derives from the other.
Two PurseForum posts that cite the same blog count as one source.

### Promotion rule

A `tentative` claim becomes `likely` or `confirmed` only when a higher-
tier source corroborates it. Do not promote on volume of community
agreement alone.

---

## 4. High-folklore zones (extra scrutiny)

These topics are where the community is most often wrong. Default to
`tentative` and require explicit primary or reputable-secondary
corroboration before publishing as `confirmed`. From `PLAN.md`
"Fact-checking discipline" plus the Phase 0 corrections.

1. **Serial-number decoding** — published "decoders" are partial or
   conflate eras. Require a worked example from a dated catalog or
   a bag with independent date evidence. See `research/E-authentication.md`
   for the current state.
2. **Bonnie Cashin attribution** — Cashin's contract ended in 1974.
   Bags introduced after 1974 are **not** Cashin designs regardless
   of community claims, even if they use her vocabulary (turnlock,
   side pockets, etc.). Require a primary source (Cashin papers
   `ucla-cashin-papers`, or a dated 1962–74 Coach catalog) for any
   Cashin attribution. See `research/C-cashin.md` §5. Note the
   start-date dispute (`maharam-cashin` frames the engagement as
   1961–1974 vs the prevailing 1962 start in WWD / FundingUniverse /
   vintagecoachie / Wikipedia); flag the start year as `disputed`
   pending the UCLA contract document. The 1974 end date is not in
   dispute.
3. **"Made in U.S.A." cutoff** — offshoring was gradual and model-
   specific. No blanket year claims. Per-model evidence only.
4. **Style-number reuse** — Coach reused some style numbers across
   decades for different bags. A style number alone never dates a bag.
5. **"Original" hardware vs replacement** — Coach Repair / Factory
   Restoration frequently swapped turnlocks, dogleash clips, and creed
   patches. A bag may be authentic and still have non-original hardware.
6. **Catalog "introduction year" vs "appearance year"** — first catalog
   appearance is a *latest possible* introduction, not a confirmed one.
   State the difference.
7. **"Manhattan Leather Bags" name** — community misnomer. The original
   1941 entity was **Gail Leather Products** [fundinguniverse-coach,
   encyclopedia-com-coach-leatherware, wwd-coach-early-years]. Do not
   repeat "Manhattan Leather Bags" except as a documented misnomer.
8. **Cashin archive location** — the Bonnie Cashin Collection is at
   **UCLA Library Special Collections** (`ucla-cashin-papers`), not
   LACMA. Earlier drafts had this wrong; do not repeat the error.
9. **Frankfort role timing** — president 1985 (Sara Lee era), chairman/
   CEO 1995. Do not collapse into "since 1985." See `research/B-history.md`
   on the disputed wording.
10. **Single-digit year ambiguity in post-1994 codes** — `B6D-9927` is
    Feb 1996 *or* Feb 2006. Always cross-check year against creed
    wording, lining, hardware, and country of origin. Never publish
    a year reading from the code alone.

When writing in any of these zones, lead with the disputed/folklore
context, not with the claim.

---

## 5. Frontmatter rules

Every entry has YAML frontmatter. Astro content collections enforce
the schema at build time; the rules below define what each schema
must require.

### Required for every entry

```yaml
# Use `name` for entries describing a thing (model, designer, color, creed
# format). Use `title` for document-style entries (authentication topic
# pages, history pages, catalog references). Exactly one is required;
# never set both.
name: <human-readable name>     # or
title: <document title>
slug: <kebab-case slug, matches filename>
status: draft | published | stub
confidence: confirmed | likely | tentative | disputed | mixed | log | framework
sources: [source-id-1, source-id-2, ...]                        # every cited ID; each must resolve in sources/registry.md
```

`name` vs `title` (canonical):

| Category | Field |
|----------|-------|
| `models/` | `name` |
| `designers/` | `name` |
| `colors/` | `name` |
| `creed-formats/` | `name` |
| `authentication/` | `title` |
| `history/` | `title` |
| `catalogs/` | `title` |

### Per-category required fields

**`models/<slug>.md`** — bag models:
```yaml
style_numbers: ["9927", ...]            # known style numbers
era: E1 | E2 | E3 | E4 | E5             # canonical era code (preferred)
era_code: E1 | E2 | E3 | E4 | E5        # cross-cutting query field (see below)
introduced: <year or "unknown">
discontinued: <year or "ongoing" or "unknown">
designer: <slug or "in-house">
dimensions_in: { w: <n>, h: <n>, d: <n> }
closure: turnlock | zip | snap | drawstring | ...
variants: [...]
colors_known: [british-tan, black, ...]
related: [<slug>, ...]
authentication:                          # block — see PLAN.md §12
  creed_location: ...
  expected_serial_patterns: [...]
  hardware_stamps: ...
```

`era` accepts the canonical E-codes (`E1`–`E5`) **and** human-readable
era names (`pre-cashin`, `cashin`, `classic-nyc`, `transition`,
`krakoff`) plus boundary tags (`cashin-or-post-cashin`,
`cashin-through-transition`, `krakoff-transition`,
`classic-nyc-or-early-1990s`) that some entries use to express genuine
ambiguity. Both forms are accepted by the schema.

When an entry uses a named era (or a boundary tag) for human
readability, **also** set `era_code` to the corresponding E-code so
cross-cutting era queries work. `era_code` is single-valued and uses
the strict `E1`–`E5` enum. For ambiguity-tag entries, pick the era
where the bag most likely sits and document the ambiguity in prose.
For multi-era models, `era` may list multiple codes; `era_code`
remains single-valued.

**`designers/<slug>.md`** — designers:
```yaml
born: YYYY-MM-DD
died: YYYY-MM-DD                         # if applicable
tenure_start: YYYY                       # at Coach (the only employer this archive tracks)
tenure_end: YYYY                         # at Coach
employment_status: contracted | employee
role: <title>
```

Use `tenure_start` / `tenure_end` (not `coach_tenure_start` /
`coach_tenure_end`). Coach is the only employer this archive tracks
for any designer, so the `coach_` prefix is redundant.

**`authentication/<slug>.md`** — authentication entries:
```yaml
feature: creed | serial | hangtag | hardware | zipper | leather | stitching | lining | construction | country | packaging
era_coverage: [E1, E2, E3, E4, E5]
```

**`creed-formats/<slug>.md`** — creed format variants:
```yaml
era: E1 | E2 | ...
year_range: { start: YYYY, end: YYYY }
exact_text: "<exact transcription>"
country_of_origin: <country or "U.S.A.">
```

**`catalogs/<slug>.md`** — catalog references:
```yaml
year: YYYY
season: spring | fall | resort | holiday
publisher: coach
images: [<path>, ...]                    # under catalogs/images/
rights: third-party | brand | fair-use-commentary
```

**`colors/<slug>.md`** — colors:
```yaml
era_introduced: E1 | E2 | ...
swatch_image: <path>
seen_on: [<model-slug>, ...]
```

### Per-claim `facts:` block (optional, for entries with many discrete claims)

```yaml
facts:
  - claim: "Willis introduced 1980"
    confidence: likely
    sources: [coacharchive-com, coachbagrehab-style-numbers]
  - claim: "Designer attribution"
    confidence: disputed
    sources: [lake-cashin-2016, purseforum-vintage-coach]
    notes: "Cashin's contract ended 1974; community frequently
            misattributes post-1974 models. See research/C-cashin.md §5."
```

---

## 6. Image rules

- **No first-party photography for now.** The archive runs on free
  online sources only; budget is $0 (`PLAN.md` decision 5).
- **Reproduced third-party images** must be flagged in frontmatter:
  ```yaml
  rights: third-party
  source: <source-id from registry>
  ```
- **Prefer linking over mirroring.** When a community photo or museum
  image lives at a stable URL, link out rather than mirror. Mirror
  only with explicit permission, recorded in `sources/permissions.md`.
- **Always credit the source** in the image caption, with the source
  ID. Example caption: `Catalog spread, Fall 1985 [coacharchive-com].`
- **Catalog and ad scans** used inline are low-resolution under fair-
  use commentary, flagged `rights: fair-use-commentary`. Full-res
  copies are not republished.
- **Strip EXIF.** No personal metadata in any image committed to repo.
- **Brand-published images** (Coach Pinterest, coach.com brand pages)
  are flagged `rights: brand` with the source ID.
- **No watermarking other people's photos.** Watermark only original
  prose-archive material if and when it exists.
- **Image filenames**: `<entry-slug>-<short-descriptor>-<n>.webp`
  (e.g., `willis-creed-closeup-001.webp`). Kebab-case, no spaces.

---

## 7. Naming conventions

- **Slugs**: kebab-case, all lowercase. `bonnie-cashin`, `british-tan`,
  `cashin-carry`. No spaces, no underscores, no capitals.
- **Source IDs**: kebab-case. `coach-1985-fw-catalog`,
  `purseforum-vintage-date-codes`. Stable forever — if a source
  changes URL, fix the URL in the registry, not the ID.
- **Filenames match slugs**: `models/willis.md` for slug `willis`.
- **No spaces, no underscores in filenames.** Hyphen-separated only.
- **Era codes**: `E1` through `E5` as defined in `PLAN.md` §"Era-keyed
  authentication matrix." Use the codes verbatim in frontmatter.
- **Years**: four digits. `1980`, not `'80`. Year ranges:
  `1962–1974` (en dash, not hyphen).
- **Style numbers**: quoted strings to preserve leading zeros and
  prevent type coercion: `style_numbers: ["9966", "9966-052"]`.

---

## 8. Pre-publish checklist

Copied verbatim from `PLAN.md` §"Pre-publish checklist." Every entry
runs this gate before `status:` flips from `draft` to `published`.

1. Every claim has `confidence:` and `sources:`.
2. No `tentative` claims appear without a visible badge on the
   rendered page.
3. Every source ID resolves in `sources/registry.md`.
4. Every external URL has an archive.org snapshot recorded.
5. Two-source rule satisfied (or single Tier-1 primary).
6. Cross-checked against at least one community source for
   contradictions; contradictions resolved or marked `disputed`.

Build-time checks (from `PLAN.md` §Tooling) additionally fail on:
- A frontmatter `claim` without a `sources` array.
- A `sources` ID not present in the registry.
- A `confidence: confirmed` claim with fewer than two sources.
- A registry entry without an archive.org snapshot URL.

Errata: corrections post-publication go to `errata.md` (date, entry,
what was wrong, what it now says, who flagged it). Do not silently
overwrite — git history plus the errata log preserve the record.

---

## 9. When to use which research file

The research files in `research/` are the Phase 0 working notes —
the source of truth for what we know going into authoring entries.
Pull from them when starting a new entry.

| Writing this kind of entry | Read first |
|----------------------------|------------|
| Designer entry (Cashin, Krakoff, in-house staff) | `research/C-cashin.md` (and any future designer files) |
| Model entry (Willis, Court, Sheridan, …) | `research/D-models.md` |
| Authentication entry (creed, serial, hardware, zipper, …) | `research/E-authentication.md` |
| Company history / timeline entry | `research/B-history.md` |
| Catalog references and dated catalog citations | `research/F-catalogs.md` |
| Adding or citing a source | `sources/registry.md` |
| Source-acquisition strategy and what's available free | `research/A-*.md` and `sources/online-sources.md` (when built) |

The research files already carry confidence tags and citations. When
moving content from research into an entry, preserve the citations
and re-check the confidence level — do not silently upgrade.

---

## 10. Quick-start checklist for a new entry

1. Decide the category and create `<category>/<slug>.md`.
2. Read the matching research file (table above).
3. Write frontmatter with all required fields for the category.
4. For every claim in prose, append `[source-id]`. If the source is
   not yet in `sources/registry.md`, add it there first.
5. Tag every claim with confidence. Default to `tentative` if you
   are pulling from Tier 3 only.
6. If the entry touches a high-folklore zone (§4), flag explicitly.
7. Run the pre-publish checklist (§8).
8. Set `status: draft` until the checklist passes; flip to
   `status: published` after.

---

## 11. Normalization decisions (2026-05-01)

The Astro scaffolding flagged six frontmatter inconsistencies across
the in-tree entries. Decisions resolved here so the schema stops
accumulating drift:

1. **Era values** — both forms accepted. `era` may carry the canonical
   E-codes (`E1`–`E5`) **or** human-readable era names
   (`pre-cashin`, `cashin`, `classic-nyc`, `transition`, `krakoff`,
   plus boundary tags like `cashin-or-post-cashin`,
   `cashin-through-transition`, `krakoff-transition`,
   `classic-nyc-or-early-1990s`). When an entry uses a named era,
   **also** set `era_code` (single value, strict `E1`–`E5` enum) so
   cross-cutting authentication queries work. The named-era values
   stay because they preserve genuine ambiguity (a "1970s" bag
   straddling Cashin's 1974 departure cannot honestly be pinned to
   either E2 or E3 without a primary source).

2. **`name` vs `title`** — both fields preserved with category-specific
   canonical assignment. Models, designers, colors, and creed-formats
   describe a *thing* and use `name`. Authentication, history, and
   catalogs describe a *document* and use `title`. The schema requires
   exactly one; entries set whichever matches their category.

3. **`confidence: mixed`** — added to the enumerated set in §3 above.
   Used only on aggregate / rollup entries (currently
   `history/timeline.md`) where individual events carry their own
   per-claim confidence and a single rollup tag would mislead.

4. **Tenure-field naming** — canonical is `tenure_start` /
   `tenure_end`. The `coach_tenure_*` variant in `bonnie-cashin.md`
   was renamed (Coach is the only employer this archive tracks; the
   `coach_` prefix is redundant). The schema continues to accept the
   `coach_tenure_*` form so older drafts do not break, but new
   entries use the un-prefixed names.

5. **`covers_eras` vs `era_coverage`** — canonical is `era_coverage`
   (matches §5 above). `creed-formats.md` was migrated. The schema
   accepts both for backward compatibility with any in-flight drafts.

6. **Frontmatter `sources:` rollup must include every inline-cited ID.**
   This is a correctness rule, not a style preference: build-time
   checks and on-page citation rendering both rely on the rollup
   being complete. If a body cites `[some-id]`, `some-id` belongs in
   the frontmatter `sources:` array. Do not remove sources from the
   rollup that are not inline-cited — they may be implicit /
   methodological references that still belong to the entry.
