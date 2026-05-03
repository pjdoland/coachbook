# Research stream F — Catalogs and ads online

Compiled 2026-05-01. The free-online catalog landscape for vintage
Coach is fragmented: there is no single canonical archive, but several
community archives, a brand-curated Pinterest board, and a major
third-party reference site exist.

---

## Sources

- **F1** — Vintage Coach Library / coacharchive.com: https://www.coacharchive.com/ (Tier 3, 344 styles documented; potentially the single best external reference — verify provenance of their photos and data)
- **F2** — Pinterest, "Coach: From the Archives" (official Coach board): https://www.pinterest.com/coach/from-the-archives/ (Tier 1, brand-curated; 88 pins of historical bags, ads, catalogs)
- **F3** — Pinterest, ilexberry "Vintage Coach Catalogue Pages": https://www.pinterest.com/ilexberry/vintage-coach-catalogue-pages/ (Tier 3, ~300 pins; verify each pin's origin URL)
- **F4** — PurseForum "Vintage Coach Catalogs" thread: https://forum.purseblog.com/threads/vintage-coach-catalogs.1045341/ (Tier 3 community; 403 from headless WebFetch, accessible in browser)
- **F5** — vintagecoachie style guide pages (catalog imagery embedded): https://www.vintagecoachie.com/style-guide (Tier 3)
- **F6** — Coach.com "The Coach Originals" (current re-release line, with original-era photography): https://www.coach.com/shop/new/featured/the-coach-originals (Tier 1, brand-published)
- **F7** — Internet Archive book: Marnie Fogg, "Vintage Handbags": https://archive.org/details/vintagehandbags0000fogg (Tier 2, contextual; not Coach-specific)
- **F8** — Coach Pinterest "From the Archives" notes: official board (F2 above)

---

## Status of free catalog scans

### Brand-curated archive
- **F2 (Coach official Pinterest)** is the single best brand-published
  source: 88 pins of historical bags, ads, and catalog spreads
  curated by Coach itself.
- **F6** ("The Coach Originals") includes brand re-release product
  pages with historical context (Soho 1994, Sheridan 1993, Bleecker
  2000) — primary for those introduction dates.

### Community archive
- **F1 (coacharchive.com / Vintage Coach Library)** is a free public
  reference with **344 styles documented**, period photography, and
  specs. Self-described as covering "the golden era — before the
  brand changed direction in the early 2000s." Operator details are
  not on the homepage; "About" page exists but not yet pulled.
  Affiliate-revenue-funded, not paywalled.
- **F3 (ilexberry Pinterest)** has ~300 pinned pages of vintage
  Coach catalogs from various sources. Each pin needs origin
  verification — many trace back to PurseForum or eBay listings.
- **F4 (PurseForum vintage-Coach catalogs thread)** is the canonical
  community location for member-uploaded catalog scans. Direct
  WebFetch returns 403 (likely Cloudflare); accessible in a real
  browser. Manual review needed.

### Internet Archive
- **No dedicated Coach-catalog collection on archive.org** as of
  this pass. Only a generic vintage-handbag reference book (F7) is
  there. **Action item:** request Internet Archive scan-on-demand
  for any physical Coach catalog the user can locate.

### Coach's own archive
- The brand reportedly maintains a 20,000+ item private archive at
  HQ, including catalogs going back to 1941 (referenced in industry
  press). **Not publicly accessible.** Outreach to Coach's
  PR/Heritage team would be the channel; treat as long-shot.

---

## What to do next

For Phase 1 publishing, the dependency chain is:

1. **F1 deep-read** — coacharchive.com is the single largest external
   data source. Compare its 344-style list against the model canon
   (research/D-models.md) and note discrepancies. If F1's numbers
   diverge from D1/D2, both views are recorded `disputed`.
2. **F2 systematic capture** — go through all 88 official Pinterest
   pins, record each as a `catalogs/` entry citing the original
   image and any caption Coach published.
3. **F3 audit** — sample 20 random ilexberry pins, trace each to its
   origin URL, and downgrade any pin whose source cannot be
   verified.
4. **F4 manual review** — open the PurseForum catalogs thread in a
   browser, identify which years/seasons of catalogs members have
   uploaded, and link those scans (with poster credit) into our
   `catalogs/` reference. Do NOT mirror the images without
   permission.

---

## Catalogs known to exist (era anchors, no scan in hand)

The following catalog years are referenced in Tier 3 sources as
having been scanned and shared somewhere. Action: locate each.

- **Late 1970s / early 1980s** — referenced in PurseForum and
  Yourgreatfinds; any specific year would help anchor the early
  numbered-creed era.
- **1985 Fall/Winter** — referenced in collector blogs; would help
  bridge into the Sara Lee era.
- **1992 Spring** — Sheridan and Camden launch.
- **1993 Spring** — Manhattan collection (bright colors).
- **1994** — Soho launch; major catalog year.
- **1995** — Sonoma collection.
- **1998** — Ergo line in production.
- **2000–2001** — IPO era; Bleecker (2000), Signature (2001).

---

## Deliverables for the catalogs/ tree

When promoting catalog references into `catalogs/<year>-<season>.md`:

```yaml
---
year: 1994
season: fall
edition: "Holiday 1994"
source_id: f4-purseforum-thread-1045341-post-XX
mirror: false           # link out only; do not mirror unless permission
pages_seen: 24
models_documented:
  - soho
  - willis
  - court
  - mailbox
rights: third-party
confidence: tentative
---
```

The body of each entry is prose: which models appear on which pages,
what colors/variants are shown, and any contemporaneous price points
visible.

---

## Open verification items

1. Identify operator and methodology of coacharchive.com (F1).
2. Browser-review PurseForum catalogs thread (F4).
3. Sample-verify Pinterest sources (F3).
4. Determine whether Coach's official "From the Archives" board
   (F2) credits photographers / catalog dates — captions usually do.
5. Consider Internet Archive scan-on-demand for any one purchased
   catalog (out of scope under the free-only constraint, but record
   for future phases).
