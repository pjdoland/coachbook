---
title: Catalogs
slug: catalogs-index
status: published
confidence: tentative
sources:
  - coach-pinterest-archives
  - purseforum-vintage-catalogs
  - pinterest-ilexberry-catalog-pages
  - vintagecoachie
  - coacharchive-com
  - coach-originals
  - coach-vintage-soho
  - coach-vintage-sheridan-stewart
  - coach-vintage-bleecker
---

Coach catalogs are the most valuable primary source for dating models and tracking the visual evolution of the brand. The free-online catalog landscape is fragmented — there is no single canonical archive — but several community archives, a brand-curated Pinterest board, and one major third-party reference site exist. This page is the index of what is known and what to do about it.

## Sources for free Coach catalog scans

- **Coach official "From the Archives" Pinterest board** — 88 brand-curated pins of historical bags, ads, and catalog spreads [coach-pinterest-archives]. Tier 1 (brand-published).
- **PurseForum vintage Coach catalogs thread** — member-uploaded scans, the canonical community location for catalog imagery [purseforum-vintage-catalogs]. Tier 3, browser-only (returns 403 to headless fetch).
- **ilexberry Pinterest board** — ~300 scanned catalog pages re-pinned from various sources [pinterest-ilexberry-catalog-pages]. Tier 3; per-pin origin verification required.
- **vintagecoachie style guide** — catalog imagery embedded in the style-guide pages [vintagecoachie]. Tier 3.
- **coacharchive.com (Vintage Coach Library)** — 344 styles documented with period photography drawn from catalogs [coacharchive-com]. Tier 3; largest external structured reference.

## Catalogs known to exist (era anchors not yet retrieved)

The following catalog years are referenced in Tier 3 sources as having been scanned and shared somewhere; locating each is a Phase 3 priority.

- **Late 1970s / early 1980s** — first specialty store era; would anchor the early numbered-creed period.
- **1985 Fall/Winter** — Sara Lee transition era.
- **1992** — Sheridan and Camden launch.
- **1993** — Manhattan collection (bright colors); brand-published Sheridan Stewart introduction date [coach-vintage-sheridan-stewart].
- **1994** — Soho launch [coach-vintage-soho].
- **1995** — Sonoma launch.
- **1998** — Ergo line.
- **2000–2001** — IPO era; Bleecker (2000) [coach-vintage-bleecker], Signature C (2001).

## What this directory will contain

- One file per dated catalog: `catalogs/<year>-<season>.md` (e.g., `1994-fall.md`).
- Each entry records: year, season, edition title, source (Pinterest pin URL or PurseForum post URL), models documented, page count seen, and mirror status.
- Frontmatter follows the catalog schema in `PLAN.md` §"Data model" and `STYLE.md` §5: `year`, `season`, `publisher`, `images`, `rights`.
- **Currently empty** pending Phase 3 retrieval per `RETRIEVAL.md`.

## Image-rights policy

Per `PLAN.md` §"Image-rights policy": reproduced catalog scans are flagged `rights: third-party` (or `rights: brand` for Coach-published Pinterest pins). The default is to link out rather than mirror. Community-uploaded photos require explicit permission tracked in `sources/permissions.md`. Catalog and ad scans used inline are low-resolution under fair-use commentary.

## Operational queue

Three operations in `RETRIEVAL.md` populate this directory:

- **Operation 4** — PurseForum vintage Coach catalogs thread: page through the thread, record each member-uploaded scan by year/season/uploader/post, and stub `catalogs/<year>-<season>.md` entries. Do not mirror without permission.
- **Operation 5** — Coach official "From the Archives" Pinterest: capture all ~88 pins (URL, image URL, caption, date), file under `images/coach-archives-pinterest/`, and create matching catalog or model entries for every dated pin.
- **Operation 6** — coacharchive.com systematic review: cross-validate the 344-style list against the model canon; promote nothing on coacharchive.com alone (Tier 3).

## Sources

- [coach-pinterest-archives](../sources/registry.md#coach-pinterest-archives)
- [purseforum-vintage-catalogs](../sources/registry.md#purseforum-vintage-catalogs)
- [pinterest-ilexberry-catalog-pages](../sources/registry.md#pinterest-ilexberry-catalog-pages)
- [vintagecoachie](../sources/registry.md#vintagecoachie)
- [coacharchive-com](../sources/registry.md#coacharchive-com)
- [coach-originals](../sources/registry.md#coach-originals)
- [coach-vintage-soho](../sources/registry.md#coach-vintage-soho)
- [coach-vintage-sheridan-stewart](../sources/registry.md#coach-vintage-sheridan-stewart)
- [coach-vintage-bleecker](../sources/registry.md#coach-vintage-bleecker)
