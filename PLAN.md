# Vintage Coach Handbag Archive — Plan

## Goal

Build an exhaustive, well-organized, citable reference archive covering vintage
Coach Leatherware (roughly 1941–early 2000s, with emphasis on the pre-Sara Lee
NYC era through the Reed Krakoff transition).

## Scope: what counts as "vintage"

- **Pre-Cashin era** (1941–1961): Founded 1941 as **Gail Leather Products**
  (NOT "Manhattan Leather Bags," a community misnomer); Miles & Lillian
  Cahn joined 1946, purchased the company 1961. Few extant bags.
- **Cashin era** (1962–1974): Bonnie Cashin as designer; brass turnlock,
  "Cashin Carry," kissing-lock coin purse, side toggles.
- **Classic NYC era** (1975–~1994): glove-tanned cowhide standardization,
  numbered creed, NYC and later Carlstadt NJ manufacturing.
- **Transition era** (1995–~2002): Reed Krakoff arrives 1996; Signature C
  introduced 2001; offshoring begins; logo branding shifts.
- **Krakoff transition (E5)**: included **as contrast only** — referenced
  where it bounds NYC-era timelines (creed wording shift, offshoring start,
  zipper-maker overlap, Signature C launch as the cutoff event). No full
  model entries for Krakoff-era bags.
- **Out of scope**: post-2002 mainstream Signature/Poppy/Coach 1941 lines,
  except where needed to contrast with vintage.

## Content categories (the archive's "tables")

1. **Timeline & company history** — founders (Miles & Lillian Cahn), ownership
   changes (Sara Lee 1985, IPO 2000), factory locations (310 W 34th, 516 W
   34th, Carlstadt), creative directors.
2. **Designers** — Bonnie Cashin (primary), staff designers, Reed Krakoff.
   Bios, tenures, signature design vocabulary.
3. **Models / styles** — one entry per style: Court, Willis, Stewardess →
   Legacy, Station, Madison, Sheridan, Soho, Penny, Patricia's Legacy,
   Cashin Carry, Mailbox, Dinky, Swagger, Saddlebag, Beekman, Lexington,
   Bucket, Pocket Purse, etc. Each entry: years produced, dimensions,
   variants, style numbers, original retail.
4. **Materials & construction** — glove-tanned cowhide spec, suede, British
   Calf, Sheridan-tweed, hardware (solid brass: turnlock, dogleash clip,
   D-rings, buckles), thread, lining materials by era, stitching
   (saddle-stitched vs machine).
5. **Colors** — palette by era with swatches: British Tan, Black, Burgundy,
   Mahogany, Hunter, Putty, Navy, Saddle, Camel, Bordeaux, Tabac, etc.
6. **Creed & serial numbers** — every known creed format with dated examples;
   style-number / factory-code decoding (e.g., `9966-052`); "No.######"
   format; "Made in" country progression.
7. **Hangtags & hardware marks** — beanbag-style tag evolution, stamped
   "COACH" hardware vs unstamped, replacement-tag issues.
8. **Catalogs & advertising** — scans of season catalogs, print ads,
   in-store materials with year/source.
9. **Authentication guide** — see the dedicated section below; this is a
   first-class pillar of the archive, not a footnote.
10. **Care & restoration** — leather conditioning, brass polishing, lining
    repair, the historic Coach Factory Restoration program (intake address,
    what they did/didn't do, end of program).
11. **Market & pricing** — observed resale ranges by model/era, trend notes,
    primary marketplaces (eBay, Etsy, Poshmark, Mercari, vintage shops).
12. **Bibliography & community** — books, magazine features, PurseForum
    threads, Instagram accounts, archival blogs, museum holdings (UCLA
    Library Special Collections holds the Bonnie Cashin Collection — primary
    Cashin archive; FIT and Met Costume Institute hold related fashion-history
    material).

## Authentication — detailed coverage

Authentication is the most-asked, most-abused topic in vintage Coach. The
archive must be the definitive reference: every claim grounded in a dated,
photographed example, every era covered, every common counterfeit pattern
catalogued. The structure below maps to files under `authentication/` plus
per-model authentication notes inside each `models/<name>.md`.

### Era-keyed authentication matrix

Every authenticator changes over time. The archive's central artifact is a
matrix indexed by era × feature, where each cell links to a reference page
with photos and citations.

Eras (matched to the scope eras above):
- **E1** Pre-Cashin (1941–1961)
- **E2** Cashin (1962–1974)
- **E3** Early NYC (1975–1984)
- **E4** Late NYC / Carlstadt (1985–1994)
- **E5** Transition / early offshore (1995–~2002)

Features (rows):
1. Creed patch
2. Serial / style number format
3. Hangtag (beanbag)
4. Hardware (turnlock, dogleash, D-rings, feet)
5. Zipper make and pull
6. Leather (type, weight, edge treatment)
7. Stitching (SPI, thread, lock-stitching)
8. Lining (material, color, branding)
9. Construction (gusset, strap attachment, rivets)
10. Country-of-origin tag
11. Dust bag and packaging
12. Care card / registration card

### 1. Creed patch

The leather "creed" patch is the single most diagnostic element. Document:

- **Wording variants** with exact transcription:
  - `COACH LEATHERWARE / EST. 1941 / NEW YORK` (early NYC)
  - `COACH LEATHERWARE / EST. 1941 / NEW YORK CITY` (later)
  - `COACH / EST. 1941 / NEW YORK CITY` (post-rebrand)
  - "Made in U.S.A." vs "Made in" + country (Costa Rica, Dominican Republic,
    Italy, China, Turkey, Hungary) — record each combination seen.
- **Font characteristics**: serif weight, kerning, "1941" numeral shapes,
  "Est." with vs without period. Counterfeit creeds typically have wrong
  kerning, fatter strokes, or sans-serif substitution.
- **Embossing depth & method**: heat-stamped impression vs printed; the
  crispness of the corners; whether ink is filled.
- **Patch leather**: matches body leather on authentic NYC bags; often a
  contrasting square on fakes.
- **Stitch attachment**: stitched on all four sides with matching SPI and
  thread; rivets only on specific later models.
- **Position on bag**: model-specific — every model entry records expected
  creed location and orientation.

Output: one `creed-formats/` page per dated variant, each with at least
three independently-sourced photos and a year range supported by catalog
appearances.

### 2. Serial / style number decoding

Document every known format with a parser-style spec:

- **No serial** (E1–early E2): absence is not evidence of fakery for this era.
- **`No.` prefix** (e.g., `No.1234567`): brief usage window — date it.
- **Style-dash-factory** (e.g., `9966-052`): left side = style number,
  right side = factory code. Provide a known-style table and a known-factory
  table (072 = NYC, others to be confirmed from primary sources).
- **Letter-letter-number-style** (e.g., `K8C-9966` or similar): decode
  position by position — month letter, year digit, factory letter, style
  number — with a worked example per year.
- **All-numeric run** seen on transition-era and offshore bags.
- **Serial absent on small accessories** (key rings, coin purses): note
  which models legitimately ship without serials.

Format the spec as a table the user can match against a bag in hand:

```
pattern: ^([A-Z])([0-9])([A-Z])-([0-9]{4,5})$
groups: month_letter, year_digit, factory_letter, style_number
example: K8C-9966 → Nov 1988, factory C, style 9966 (Willis)
sources: [coach-1988-fw-catalog, owned-bag-WIL-001]
```

### 3. Hangtag (beanbag)

The leather "beanbag" hangtag evolved in shape, attachment, and stamping.
Document:

- Tag silhouette by era (squarer early, rounder later).
- Attachment hardware: brass clip vs leather strap vs plastic-coated wire.
- Stamping: "COACH" only, "COACH" + style number, or blank reverse.
- Replacement tags: Coach Repair sometimes shipped new tags with restored
  bags — note that a "wrong era" tag does not always indicate a fake.

### 4. Hardware

- **Material**: solid brass on E2–E4. Test: brass is **non-magnetic** and
  feels heavy for its size. A magnet that sticks is a strong fake signal
  (or a post-2000 plated steel piece).
- **Turnlock construction**: two-piece face + rotating bar, riveted to the
  bag through a brass back plate. Document the rivet count, head shape,
  and whether the back plate is stamped.
- **"COACH" stamping**: present on later turnlocks, dogleash clips, and
  zipper pulls. Absent on early Cashin-era hardware. Do not treat absence
  as a fake tell without confirming era.
- **Dogleash clip**: spring-loaded, smooth action, "COACH" stamped on the
  oval body in late E3 onward. Counterfeits often have a stiffer spring,
  visible casting seams, and uneven oval geometry.
- **Feet, D-rings, buckles**: solid brass, no plating wear-through; record
  shapes per model.
- **Patina**: real brass develops a warm honey-to-amber patina; plated fakes
  show silver underlayer where worn.

### 5. Zipper make and pull

Zippers are date-coded surrogates — they often outlive the wearer and are a
strong era check.

- **Talon**: pre-mid-1970s common; document tooth profile and slider stamps.
- **YKK**: dominant from late 1970s onward; YKK has a published date-stamp
  system on some sliders.
- **Coats** and **Ideal**: occasional, era-specific.
- **Conmar**: very early, rare on Coach.
- **Pulls**: solid brass tab, often "COACH" stamped on later examples;
  pull shapes (lozenge, square-ended, leather-tabbed) vary by model.
- A bag whose zipper maker postdates the creed-format era is suspect.

### 6. Leather

- **Glove-tanned cowhide** is the NYC-era standard: full-grain, drum-dyed
  through (cut edge shows the same color as the surface), develops patina
  rather than cracking.
- **Edge treatment**: authentic vintage edges are typically **raw or burnished,
  not painted**. A glossy painted edge on a "1980s" bag is a strong fake or
  reproduction signal.
- **Smell**: real glove-tanned has a distinct neatsfoot/leather smell; many
  counterfeits smell of acetone or plastic.
- **Weight & thickness**: record measured leather thickness in mm by model;
  fakes are often thinner.
- **Suede, British Calf, tweed, sherpa**: per-material authentication notes
  for less-common variants.

### 7. Stitching

- **Saddle-stitched vs lock-stitched**: NYC-era bags use machine lock-stitch
  for most seams (despite folklore), with hand-finishing on specific
  accents. Document which models have which.
- **Stitches per inch (SPI)**: measured ranges by era; record on each model
  page.
- **Thread**: heavy bonded nylon or polyester; color matches body leather.
  Contrasting thread is model-specific (Sheridan, some Madison variants).
- **Lock-stitch endings**: authentic bags backstitch cleanly; fakes often
  show loose tail threads or visible knots on the inside.

### 8. Lining

- **Unlined** is correct for many E3–E4 bags — an unlined Court or Willis is
  not a fake tell.
- **Lined models**: cotton twill, grosgrain, or Coach-branded jacquard
  (later). Document color by model and era.
- **Pocket construction**: square-bottomed inset pockets with bound edges;
  fakes use heat-cut polyester.

### 9. Construction

- **Gusset**: turned-and-stitched on NYC-era; raw-edge bound on some later.
- **Strap attachment**: D-ring + dogleash, or fixed loop with rivet-through;
  document rivet count and head style per model.
- **Edge paint**: authentic vintage = none, with rare exceptions; paint =
  red flag.

### 10. Country-of-origin tag

- "Made in U.S.A." stamped into the creed itself on NYC/Carlstadt bags.
- Separate fabric tag sewn into a seam on offshore bags.
- "Made in [country]" should match the era: Costa Rica appears mid-1990s,
  Dominican Republic late 1990s, China 2000s. A "Made in China" stamp on a
  bag with E3 creed wording is a fake.

### 11. Dust bag and packaging

- Original dust bags: cream cotton with green "COACH" print (era-specific
  fonts). Document all known variants.
- Care card and registration card text and sizes by era.
- A bag without packaging is not suspect; a bag with the *wrong-era*
  packaging may be.

### 12. Per-model authentication notes

Each `models/<name>.md` carries an `authentication:` block in frontmatter
plus an "Authentication" section in the body covering tells specific to
that model. Example structure:

```yaml
authentication:
  creed_location: interior_back_wall_centered
  expected_serial_patterns: ["####-###", "[A-Z][0-9][A-Z]-####"]
  hardware_stamps: turnlock_back_unstamped, dogleash_stamped_COACH
  zipper_makers_seen: [YKK, Talon]
  lining: unlined
  common_fakes:
    - description: "1990s Korean reproduction with painted edges"
      tells: [edge_paint_present, magnetic_hardware, wrong_creed_kerning]
      photo_refs: [fakes/willis-korean-001.jpg]
```

### 13. Counterfeit catalog

A dedicated `authentication/counterfeits/` subdirectory documents known
fake "families" — Korean repros, Turkish repros, modern Chinese fakes,
"Frankenbags" assembled from real parts plus replacement creeds — each
with diagnostic photos, year first observed, and the tells that catch them.

### 14. Authenticator's toolkit

A `authentication/toolkit.md` page listing what to use:
- 10× jeweler's loupe (creed font, stitch lock-offs)
- Digital calipers (leather thickness, hardware dimensions)
- Kitchen scale (hardware weight as a brass proxy)
- Strong magnet (brass-vs-plated-steel test)
- 365 nm UV flashlight (modern adhesives fluoresce; original glues do not)
- Color-corrected daylight bulb for photographing for second opinions
- Reference ruler in every photo

### 15. Decision tree

A printable one-page flow: "I have a bag and want to know if it's real."
Branches on creed presence → era inferred → checks expected for that era →
red-flag aggregate score. Linked from the homepage.

### 16. Submission and second-opinion workflow

- Reader-submission form requesting the canonical photo set: full bag,
  creed close-up (with ruler), turnlock front and back, zipper pull and
  tape stamp, lining and any tags, country-of-origin stamp, hangtag both
  sides, base/feet.
- Submissions enter `authentication/submissions/` as drafts; once verified,
  notable ones become reference examples.

### Authentication-specific phasing

Folded into the main phasing:
- **Phase 1**: stand up the era-keyed matrix as empty pages; publish the
  toolkit and decision tree.
- **Phase 2**: fill creed, serial, hardware, and zipper rows for E2–E4
  (the most-collected eras), with at least 5 dated reference photos per
  cell.
- **Phase 3**: extend to E1 and E5; populate the counterfeit catalog with
  the top 10 fake families.
- **Phase 4**: per-model authentication blocks for all canon models; open
  the submission pipeline.

## Data model

Use a flat collection of Markdown files with YAML frontmatter, one per entity,
organized by category. Frontmatter is the structured layer; body is the prose.

```
models/
  willis.md
    ---
    name: Willis
    style_numbers: ["9927"]
    introduced: 1980
    discontinued: 1996
    designer: in-house
    dimensions_in: { w: 9, h: 7, d: 3.5 }
    closure: turnlock
    variants: [small, medium]
    colors_known: [british-tan, black, burgundy, ...]
    related: [court, stewardess]
    sources: [coach-1985-catalog, ...]
    ---
designers/
  bonnie-cashin.md
colors/
  british-tan.md
creed-formats/
  1980-style-number-dash-factory.md
catalogs/
  1985-fall.md            # with images/ alongside
authentication/
  zippers.md
care/
  leather-conditioning.md
sources/
  bibliography.md
```

Why Markdown + frontmatter: trivially diffable, future-proof, queryable with
basic tooling, renders to a static site without lock-in. If structure outgrows
this, frontmatter migrates cleanly to SQLite.

## Sourcing strategy

The archive is **mostly compiled from secondary sources**, not first-party
photography. Citation discipline is therefore non-negotiable: every claim
cites a source, every reproduced image records its origin and rights status.

Source quality tiers:

- **Tier 1 — primary**: original Coach catalogs (scans), ads, press releases,
  Bonnie Cashin's archived papers (UCLA), patents, SEC filings post-IPO.
- **Tier 2 — secondary, reputable**: "Bonnie Cashin: Chic Is Where You Find
  It" (Stephanie Lake, 2016), New York Times / WWD / Vogue archives, museum
  collection notes (FIT, Met Costume Institute, UCLA).
- **Tier 3 — community**: PurseForum vintage-Coach megathreads, established
  vintage-Coach Instagram archivists (e.g. dedicated archivist accounts),
  long-running blogs, dated YouTube collection tours.
- **Tier 4 — listings**: eBay/Etsy/Poshmark sold listings — used for market
  data and dated photo evidence only, never as authority on facts.

Acquisition tactics — **free online sources only**:

1. **Open archives**:
   - Internet Archive (archive.org) for digitized catalogs, back issues of
     Vogue / WWD / Harper's Bazaar / New York Times Magazine.
   - HathiTrust for fashion-history monographs in the public domain.
   - Library of Congress digital collections.
2. **Museum digital collections**:
   - UCLA — Bonnie Cashin papers finding aid and any digitized items.
   - Metropolitan Museum / Costume Institute online collection.
   - FIT Museum online collection and Special Collections finding aids.
   - Other costume archives (Kent State, RISD, V&A) where Coach or Cashin
     items are held.
3. **Free primary records**:
   - U.S. Patent and Trademark Office records (USPTO) — Coach hardware,
     turnlock, and trademark filings.
   - SEC EDGAR — post-2000 IPO filings (10-K, S-1) for company history.
   - Trademark Status & Document Retrieval (TSDR) for "COACH" and
     "COACH LEATHERWARE" wordmark history.
4. **Community archives** (always credited, never mirrored without permission):
   - PurseForum vintage-Coach megathreads — decades of dated member photos.
   - Established vintage-Coach Instagram archivist accounts.
   - Long-running personal blogs and dated YouTube collection tours.
5. **Library catalogs without buying** — read-online or interlibrary-loan
   only; no purchases:
   - Stephanie Lake, "Bonnie Cashin: Chic Is Where You Find It" (2016).
   - Google Books snippet view for spot-checks.
6. **Email outreach** — free:
   - UCLA and FIT reference desks; many offer free image scans for
     non-commercial research with attribution.

A working list of actual URLs for each of the above lives in
`sources/online-sources.md` and is the first artifact built in Phase 1.

Image-rights policy (matters because the site goes public eventually):
- Original prose: CC BY-SA.
- Reproduced catalog/ad scans: low-resolution under fair-use commentary,
  with full citation; flagged as `rights: third-party` in frontmatter so we
  can pull them at the public-launch flip if needed.
- Community-submitted or community-mirrored photos: only with explicit
  permission, recorded in `sources/permissions.md`. Default to linking out
  rather than mirroring.

## Fact-checking discipline

The vintage-Coach community runs on folklore — many "facts" repeated across
PurseForum, YouTube, and resale listings are wrong, and some are confidently
wrong (e.g., serial-number decoding schemes, designer attributions, dates a
model was discontinued). Without a hard discipline, this archive will inherit
that folklore and amplify it. The protocol below applies to every factual
claim before publication.

### Two-source rule

No fact appears in the archive without **at least two independent sources**,
or **one Tier-1 primary source**. Independence means: not citing each other,
not derived from the same upstream. Two PurseForum posts are not two sources
if one quotes the other.

### Confidence levels

Every fact is tagged with one of four confidence levels in frontmatter:

```yaml
confidence: confirmed | likely | tentative | disputed
```

- `confirmed` — multiple Tier-1 sources agree, or one primary plus one
  reputable Tier-2.
- `likely` — one Tier-1, or multiple Tier-2 sources that agree.
- `tentative` — one Tier-2, or multiple Tier-3 community sources only.
  Rendered with a visible "tentative" badge on the site.
- `disputed` — sources disagree; the entry shows both positions and cites
  each. Rendered with a "disputed" badge that links to a notes section.

### Provenance trail

Every fact carries its sources inline. The frontmatter pattern:

```yaml
facts:
  - claim: "Willis introduced 1980"
    confidence: likely
    sources: [coach-1981-spring-catalog-p4, purseforum-thread-12345-post-9]
  - claim: "Designer attribution: Bonnie Cashin"
    confidence: disputed
    sources: [stephanie-lake-2016-p147, purseforum-thread-99999-post-3]
    notes: "Lake credits in-house team post-1974; community frequently
            misattributes to Cashin. See disputes/willis-attribution.md."
```

A `sources/` registry assigns every source a stable ID; `facts` references
those IDs, never bare URLs. Broken or relocated sources are fixed once in
the registry and propagate.

### High-folklore zones (extra scrutiny)

Areas where the community is most often wrong, requiring `confirmed` before
publication or an explicit `tentative` badge:

1. **Serial-number decoding** — many published "decoders" are partial or
   conflate eras. Require a worked example from a dated catalog or a bag
   with independent date evidence.
2. **Bonnie Cashin attribution** — Cashin departed in 1974; bags introduced
   after that date are not hers regardless of community claims. Require a
   primary source (Cashin papers, dated catalog from her tenure) for any
   Cashin attribution.
3. **"Made in U.S.A." cutoff dates** — offshoring was gradual and model-
   specific. No blanket year claims; only model-by-model evidence.
4. **Style-number reuse** — Coach reused some style numbers across decades
   for different bags. A style number alone never dates a bag.
5. **"Original" hardware vs replacement** — Coach Repair frequently swapped
   turnlocks, dogleash clips, and creed patches. A bag may be authentic
   yet have non-original hardware. Authentication entries call this out.
6. **Catalog "introduction year" vs "appearance year"** — a bag's first
   catalog appearance is a *latest possible* introduction, not a
   confirmed one. State the difference.

### Source registry

`sources/registry.md` records every source with:
- stable ID (e.g., `coach-1985-fw-catalog`)
- tier (1–4)
- type (catalog, book, ad, museum-record, forum-post, …)
- canonical URL or physical citation
- access date (URLs rot)
- archive.org snapshot URL (always capture one)
- rights status

### Pre-publish checklist

Every entry runs the following gate before its frontmatter `status:` flips
from `draft` to `published`:

1. Every claim has `confidence:` and `sources:`.
2. No `tentative` claims appear without a visible badge on the rendered
   page.
3. Every source ID resolves in `sources/registry.md`.
4. Every external URL has an archive.org snapshot recorded.
5. Two-source rule satisfied (or single Tier-1 primary).
6. Cross-checked against at least one community source for contradictions;
   contradictions resolved or marked `disputed`.

### Errata and corrections

A public `errata.md` page logs every correction made post-publication:
date, entry, what was wrong, what it now says, who flagged it. Corrections
do not silently overwrite — git history plus the errata log preserve the
record. This is a feature: it builds trust that the archive cares about
being right.

### Periodic audit

Quarterly: random sample of 10 published entries. Re-verify every cited
source still resolves; re-check claims against any newly available sources;
log results in `audits/YYYY-QN.md`. URLs decay; this catches it.

### Tooling

Build-time checks fail the site build on any of:
- A frontmatter `claim` without a `sources` array.
- A `sources` ID not present in the registry.
- A `confidence: confirmed` claim with fewer than two sources.
- A registry entry without an archive.org snapshot URL.

These are cheap to write and they prevent the most common slippage.

## Build & publish

Phase 1 work product is the data; the site is a thin layer over it. The
site is **private now, public later** — built behind a password from day
one and flipped to public once Phase 2's quality bar is met.

- **Generator**: **Astro**, using content collections for typed frontmatter
  schemas (catches malformed entries at build time, which matters when the
  data outweighs the code).
- **Hosting**: Cloudflare Pages with Cloudflare Access for the private
  phase (free tier handles single-user auth); flip to public by removing
  the Access policy. Custom domain from the start so URLs do not change.
- **Search**: Pagefind (static, no backend).
- **Images**: WebP + original JPEG, EXIF stripped, watermarked low-res for
  inline display, full-res linked for primary sources.
- **License**: CC BY-SA for original prose; reproduced third-party scans
  flagged with `rights:` frontmatter so they can be audited and, if
  necessary, pulled before the public flip.

### Private → public flip checklist

A `LAUNCH.md` runbook tracks what must be true before flipping public:
- Every reproduced image has a rights tag and a citation.
- No tier-4 listing photos used as authority for facts.
- Authentication decision tree linked from the homepage.
- 30 core models published with at least one image and full sources.
- robots.txt and sitemap.xml ready; Cloudflare Access policy removed.

## Phasing

**Phase 1 — Skeleton & schema (week 1–2)**
- Scaffold repo: `models/`, `designers/`, `colors/`, `creed-formats/`,
  `catalogs/`, `authentication/`, `care/`, `sources/`, `images/`.
- Define and document frontmatter schemas for each category.
- Write `STYLE.md` (voice, citation format, image rules, naming conventions).
- Stand up Astro skeleton that renders one entity per category as proof.

**Phase 2 — Core canon (week 3–8)**
- 30 most-collected models, fully written with photos and sources.
- Bonnie Cashin designer entry.
- Creed-format reference with dated examples.
- Top 12 colors with swatches.
- Authentication guide v1 (zippers, hardware, creed fonts, stitching).

**Phase 3 — Catalogs & primary sources (week 9–14)**
- Acquire and scan ≥10 catalogs spanning 1975–1999.
- Cross-link every model entry to the catalog pages it appears in.
- Bibliography page populated.

**Phase 4 — Long tail & community (ongoing)**
- Remaining models, regional/seasonal variants, prototypes.
- Submission form for reader-contributed creed photos and dated bags.
- Quarterly market-pricing refresh.

## Decisions

Resolved up front:

1. **Audience**: private now, public later. Built behind Cloudflare Access;
   flipped to public once the launch checklist is satisfied.
2. **Sources**: mostly secondary, **free online only**. No purchases. Any
   future purchase requires explicit go-ahead.
3. **Generator**: Astro with content collections (typed frontmatter).
4. **Krakoff era (E5)**: included as contrast only — referenced where it
   bounds NYC-era timelines, no full model entries.
5. **Budget**: $0. Free online sources only.

## Findings to date (2026-05-01)

Research pass produced ten files in `research/` and a seeded
`sources/registry.md`. Headlines:

- **Corporate name**: original 1941 entity was **Gail Leather Products**,
  not "Manhattan Leather Bags" (a community misnomer that propagated
  through resale listings). Cahns joined 1946, purchased 1961.
- **Cashin archive location**: papers are at **UCLA Library Special
  Collections**, not LACMA. Online finding aid:
  https://oac.cdlib.org/findaid/ark:/13030/kt9z09q97x/
- **Coach 2003 10-K — first Tier 1 primary source pulled** (user-supplied
  copy of the fiscal-2003 annual report, `coach-10k-fiscal-2003`). Enabled
  several upgrades from Tier 3 community wording to primary-sourced
  detail:
  - **Sara Lee acquisition** dated to **July 1985** (same month Frankfort
    became president of Coach).
  - **Reed Krakoff hire** dated to **December 1996** as SVP / Executive
    Creative Director; promoted to President + ECD September 1999.
  - **Jacksonville, Florida consolidation** of worldwide warehousing,
    distribution, and repair functions (560,000 sq ft), **July 1999** —
    end-state of the Coach Repair / Factory Restoration program.
  - **Lares, Puerto Rico facility** ceased operations **April 2002** —
    Coach's last in-house manufacturing facility; from that date all
    production is by independent contractors.
  - **Fiscal-2003 manufacturing geography**: China, Costa Rica, Mexico,
    **India**, Italy, **Spain**, Hungary, Turkey. India and Spain are
    new confirmed additions; **Dominican Republic dropped** from the
    primary-sourced list (downgraded to tentative).
  - **IPO**: 17.0 million shares sold October 2000 (canonical primary
    metric; supersedes the disputed 17 % / 19.5 % / 19.9 % secondary
    figures).
- **Cashin supplemental — Maharam essay** (`maharam-cashin`, Tier 2):
  documents Cashin's design output across **35+ houses** including
  Hermès, Ballantyne, and Aquascutum — far broader than the
  Vintage-Fashion-Guild list (Coach, Sills, Meyers, Crescendoe-Superb,
  HBA, D. Klein). Maharam also credits Cashin with the **first-ever
  flight-attendant uniforms for American Airlines**, kept explicitly
  separate from the Coach Stewardess–United-Airlines folklore. Maharam
  frames Cashin's Coach engagement as **1961–1974**, disputing the
  prevailing 1962 start date; plausible reconciliation is contract
  signed 1961 with first collection shipping Fall 1962. Awaiting UCLA
  Cashin papers contract document.
- **Stewardess UA-variant**: elevated from `tentative` to `likely` on
  the basis of multiple independent listings plus vintagecoachie's
  explicit distinction between the United-Airlines variant and the
  retail style 9525.
- **Vintage Fashion Guild four-design Cashin attribution**: VFG names
  Bucket Bag and Convertible Clutch as Cashin designs alongside the
  Cashin Carry and Kissing-Lock Coin Purse. Used to upgrade the
  Bucket Bag and Convertible Clutch attributions out of Tier 3 territory.
- **1964 turnlock correction**: brass turnlock introduced **1964**, two
  years after Cashin's 1962 hire — superseding the prior "1962" framing.
  The Cashin Carry tote (Fall 1962) predates the turnlock; earliest
  examples used different closures.
- **Frankfort timing**: president 1985 (Sara Lee era), chairman/CEO of
  Coach Inc. June 1, 2000 (incorporation date of the Maryland public
  company). "Since 1985" wording in some secondary sources collapses
  these and is documented as disputed.
- **Serial-number ambiguity**: post-1994 single-digit year code
  (`B6D-9927`) is ambiguous between 1996 and 2006 without contextual
  cross-checks. Documented as `disputed` in `research/E-authentication.md`.
- **Major data sources used**:
  - `coacharchive.com` (Vintage Coach Library): 344 styles, free, the
    largest external structured reference.
  - Yourgreatfinds collector guide: ~80 named styles with style numbers.
  - PurseForum vintage Coach catalogs thread: member-uploaded scans;
    Cloudflare-blocked from headless fetch, browser-accessible (see
    `RETRIEVAL.md`).
  - Coach official "From the Archives" Pinterest (88 brand-published pins).
- **Disputed dates still on the watchlist**: Sheridan launch (1992 vs
  1993).
- **Open primary-source pulls** (see `RETRIEVAL.md`): Coach 2000 S-1
  prospectus (CIK 1116132), USPTO turnlock patent number, UCLA Cashin
  contract document, FindLaw contract mirror.

See `research/{A–J}-*.md` for full findings with citations and
confidence tags. Post-publication corrections are logged in `errata.md`.

## What I'd build first

1. `sources/online-sources.md` — researched, link-checked list of every
   free online source that's actually useful, grouped by type. **This goes
   first** because it determines what is even possible to write about.
2. `sources/registry.md` schema + the build-time fact-checking checks.
3. Repo scaffold and Astro content-collection schemas.
4. One fully-fleshed model entry (Willis) as the template for everything
   that follows, with `confidence:` tags exercised end-to-end.
