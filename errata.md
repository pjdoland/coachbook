---
title: Errata
slug: errata
status: published
confidence: log  # this is a log, not a confidence-tagged claim
---

# Errata

Errata logs every correction made to the coachbook archive after publication.
Corrections do not silently overwrite: git history plus this log preserve
the record. Trust comes from documenting being wrong.

---

## Format

Each entry records:

- **Date applied** — ISO date the correction landed.
- **Files** — entry path(s) corrected.
- **Was** — what the archive previously said.
- **Now** — what it now says.
- **Source** — source ID(s) from `sources/registry.md` supporting the
  correction.
- **Flagged by** — who or what surfaced the error (research stream,
  reader submission, periodic audit).

---

## Pre-launch corrections

Corrections applied during initial drafting, before the public flip.
Recorded here for completeness so the public archive opens with a full
correction history rather than a clean slate.

### 2026-05-01 — "Manhattan Leather Bags" → "Gail Leather Products"

- **Files**: `PLAN.md` (multiple sections), `research/B-history.md`
- **Was**: Original 1941 company name written as "Manhattan Leather Bags."
- **Now**: Original 1941 entity was Gail Leather Products. "Manhattan
  Leather Bags" is a community misnomer that propagated through resale
  listings.
- **Source**: `fundinguniverse-coach`, `encyclopedia-com-coach-leatherware`,
  `wwd-coach-early-years`
- **Flagged by**: Phase 0 research stream B (self-flagged on first source
  comparison)

### 2026-05-01 — Cashin papers location: LACMA → UCLA

- **Files**: `PLAN.md` (multiple sections), `research/C-cashin.md`,
  `sources/registry.md`, `designers/bonnie-cashin.md`
- **Was**: Bonnie Cashin papers said to be at LACMA.
- **Now**: Cashin papers are at UCLA Library Special Collections (gift
  of the estate, July 2003).
- **Source**: `ucla-cashin-papers`
  (https://oac.cdlib.org/findaid/ark:/13030/kt9z09q97x/)
- **Flagged by**: Phase 0 research stream C

### 2026-05-01 — Turnlock introduction year: 1962 → 1964

- **Files**: `designers/bonnie-cashin.md`, `models/cashin-carry.md`,
  `history/timeline.md`, `research/B-history.md`, `research/C-cashin.md`
- **Was**: Brass turnlock introduced when Cashin started in 1962.
- **Now**: Turnlock introduced 1964, two years after her 1962 hire. The
  Cashin Carry tote (Fall 1962) predates the turnlock; earliest examples
  used different closures. The turnlock was used non-exclusively across
  Cashin's collections for Coach, Sills, Meyers, Crescendoe-Superb, HBA,
  and D. Klein.
- **Source**: `vintagefashionguild-cashin`
- **Flagged by**: Phase 0 research stream H (USPTO/turnlock investigation
  surfaced Vintage Fashion Guild)

### 2026-05-01 — Frankfort dates: vague "1985" → July 1985 (president), 1995 (CEO at Coach), June 2000 (CEO at Coach Inc.)

- **Files**: `research/B-history.md`, `history/timeline.md`
- **Was**: "Frankfort named president 1985 / CEO 1995."
- **Now**: Frankfort was appointed President of Coach in July 1985 (the
  same month Sara Lee acquired the company); became CEO/Chairman of
  Coach Inc. (the Maryland public company) on its incorporation date
  June 1, 2000 — separating the operational role at Coach from the
  public-company role.
- **Source**: `coach-10k-fiscal-2003` (PRIMARY)
- **Flagged by**: Coach 2003 10-K primary-source pull

### 2026-05-01 — Krakoff hire: "1996" → December 1996

- **Files**: `research/B-history.md`, `history/timeline.md`
- **Was**: "Reed Krakoff arrived as creative director c. 1996."
- **Now**: Krakoff joined Coach as SVP and Executive Creative Director
  in December 1996. Promoted to President + Executive Creative Director
  in September 1999. Prior background captured in detail in the source.
- **Source**: `coach-10k-fiscal-2003` (PRIMARY)
- **Flagged by**: 10-K primary-source pull

### 2026-05-01 — Sara Lee acquisition: "1985" → July 1985

- **Files**: `research/B-history.md`, `history/timeline.md`
- **Was**: "Sara Lee acquired Coach in 1985."
- **Now**: Sara Lee acquired Coach in July 1985 (same month Frankfort
  named president).
- **Source**: `coach-10k-fiscal-2003` (PRIMARY)

### 2026-05-01 — IPO percentage: disputed "17% / 19.5% / 19.9%" → 17.0 million shares (canonical primary metric)

- **Files**: `research/B-history.md`, `history/timeline.md`
- **Was**: Various secondary sources reported 17% / 19.5% / 19.9% — disputed.
- **Now**: Per the primary 10-K, 17.0 million shares were sold in October
  2000. Percentage figures from secondary sources reflect different
  denominators or stages (filing target vs realized).
- **Source**: `coach-10k-fiscal-2003` (PRIMARY)

### 2026-05-01 — Manufacturing geography 2003: Dominican Republic dropped, India and Spain added

- **Files**: `research/E-authentication.md`,
  `authentication/country-of-origin.md`
- **Was**: Tier 3 sources listed countries including Dominican Republic;
  India and Spain absent.
- **Now**: Per the fiscal-2003 10-K, the 2003 sourcing list is China,
  Costa Rica, Mexico, India, Italy, Spain, Hungary, Turkey. Dominican
  Republic is NOT in the list (downgraded to tentative); India and Spain
  are new confirmed additions.
- **Source**: `coach-10k-fiscal-2003` (PRIMARY)

### 2026-05-01 — Coach last in-house factory: not previously documented → April 2002 Lares, Puerto Rico closure

- **Files**: `research/E-authentication.md`,
  `authentication/country-of-origin.md`, `research/B-history.md`,
  `history/timeline.md`
- **Was**: Tier 3 community sources did not surface Coach's Puerto Rico
  facility.
- **Now**: Coach operated a manufacturing facility in Lares, Puerto Rico,
  which ceased operations in April 2002 — Coach's last Coach-operated
  manufacturing facility. From that date forward, all Coach production
  is by independent contractors.
- **Source**: `coach-10k-fiscal-2003` (PRIMARY)

### 2026-05-01 — Coach Repair location: undocumented → consolidated to Jacksonville, FL July 1999

- **Files**: `research/B-history.md`, `history/timeline.md`
- **Was**: Coach Repair / Factory Restoration program operational details
  and dates were entirely undocumented in the research files.
- **Now**: Per the primary 10-K, Coach consolidated worldwide warehousing,
  distribution, AND repair functions into Jacksonville, Florida (560,000
  sq ft) in July 1999.
- **Source**: `coach-10k-fiscal-2003` (PRIMARY)

### 2026-05-02 — Cashin design clients expanded; AA uniform credential added

- **Files**: `designers/bonnie-cashin.md`, `models/stewardess.md`,
  `research/J-cashin-supplemental.md`, `sources/registry.md`
- **Was**: Cashin's design clients listed as Coach, Sills, Meyers,
  Crescendoe-Superb, HBA, D. Klein (per `vintagefashionguild-cashin`)
- **Now**: Maharam adds **Hermès, Ballantyne, Aquascutum, and 35+
  total houses**. Maharam also documents that Cashin designed the
  **first-ever flight attendants' uniforms for American Airlines** —
  separate from any Coach-airline-uniform claim.
- **Source**: `maharam-cashin` (Tier 2)
- **Flagged by**: Stream J supplemental WebFetch on 2026-05-02

### 2026-05-02 — Cashin Coach tenure marked disputed

- **Files**: `designers/bonnie-cashin.md`, `research/J-cashin-supplemental.md`
- **Was**: Cashin Coach tenure consistently cited as 1962–1974
- **Now**: Maharam (Tier 2) frames the engagement as **1961–1974**
  (a 13-year period). Disputed against the prevailing 1962 start
  date in WWD, FundingUniverse, vintagecoachie, and Wikipedia.
  Plausible reconciliation: contract signed in 1961 (Cahn purchase
  year) with first collection shipping Fall 1962. Resolution
  pending UCLA Cashin papers contract document.
- **Source**: `maharam-cashin` vs prior consensus

### 2026-05-02 — Stewardess UA-variant elevated from `tentative` to `likely` (existence)

- **File**: `models/stewardess.md`
- **Was**: The community claim that the Stewardess was a UA uniform bag was treated as a single Tier 3 attribution (`tentative`).
- **Now**: Multiple independent listings (Tier 4 evidence, multi-source) plus vintagecoachie (Tier 3) explicitly distinguishing "the classic 9525" from the "1980s United Airlines model" as separate products elevate the **existence** of a UA-employees-only variant to `likely`. The variant has documented diagnostic features: United Airlines logo embossed on the strap, British Tan only, ID photo pocket, suede interior, four brass feet, ~10.5"×8"×4.5". The era (1970s vs 1980s) remains `disputed`. The retail 9525 and the UA variant are now treated as distinct products.
- **Source**: `vintagecoachie`, multiple Tier 4 listings (`etsy-vintage-coach`, `ebay-vintage-coach`)

### 2026-05-02 — Cahns 1946 join: "employees" → "contractors"

- **Files**: `designers/cahn-family.md`, `research/B-history.md` (pending), `history/timeline.md` (pending)
- **Was**: The Cahns described as joining Gail Leather Products in 1946 "as employees" per FundingUniverse and other secondary sources.
- **Now**: WWD's obituary of Lillian Cahn states the Cahns joined as **contractors**, not employees. The contractor framing better matches the eventual leveraged-buyout-of-the-factory pattern (you don't typically buy out the company you're an employee of via leveraged buyout from your own bosses).
- **Source**: `wwd-lillian-cahn-obituary` (Tier 2)

### 2026-05-02 — Cashin contract: signed 1961, first collection 1962

- **Files**: `designers/bonnie-cashin.md`, `designers/cahn-family.md`, `research/J-cashin-supplemental.md`
- **Was**: Cashin tenure variously framed as 1962–1974 (most secondary sources) or 1961–1974 (Maharam alone — earlier treated as outlier).
- **Now**: Both framings are correct descriptions of different milestones. **1961** = contract signed (WWD obituary of Lillian Cahn, Maharam). **1962** = first collection shipped (Coach official Facebook post, RISD Museum dating, multiple Tier 2 sources). The archive uses 1962 as canonical for compatibility with the dominant secondary literature, while flagging 1961 as the contract year in prose.
- **Sources**: `wwd-lillian-cahn-obituary` and `maharam-cashin` (1961 contract); `coach-fb-1962-cashin`, `risd-cashin-1962`, `wwd-coach-early-years` (1962 first collection).

### 2026-05-02 — Sheridan Collection Fall 1992 launch + Stewart variant 1993 — both disputed sources right

- **Files**: `models/sheridan-stewart.md`, `research/M-catalogs-deep-readings.md`,
  `errata.md`
- **Was**: Sheridan launch year disputed between FundingUniverse "early 1992"
  and Coach.com "first introduced in 1993."
- **Now**: Primary catalog evidence settles both. Fall Special Edition 1992
  catalog cover announces "**New Sheridan Styles pages 2-9**" — primary
  confirms Sheridan Collection launched **Fall 1992**. The Stewart Bag
  (Style 4231) was NOT in Fall 1992 launch roster of 12 styles; it appears
  in Fall 1993 catalog Sheridan Collection ($224). So **Sheridan Stewart
  Bag introduced 1993** within the established Sheridan line.
  Both prior sources were correct, just describing different things —
  FundingUniverse dated the collection launch (1992); Coach.com dated the
  Stewart variant within it (1993). False dispute.
- **Source**: Coach catalog archive (`coach-catalogs-1960-1989`) Fall 1992
  Special Edition cover + Fall 1993 An American Legacy p. 60.

### 2026-05-02 — Manhattan Lightweights Spring 1993 launch — primary-confirmed

- **Files**: `models/manhattan-*` (pending), `research/M-catalogs-deep-readings.md`
- **Was**: FundingUniverse said "Spring 1993 Manhattan collection introduced
  featuring bright colors."
- **Now**: Spring Preview 1993 catalog cover announces
  "**Introducing Manhattan Lightweights Pages 2-5**." Five launch styles
  primary-confirmed: Museum Bag (4127), Bistro Bag (4125), Park Tote (4129),
  Matinee Bag (4126), Boulevard Bag (4128). Style number prefix 4XXX shared
  with Sheridan Collection. Distinct **Manhattan Lightweights palette**:
  Black, Blue, Buff, Celadon, Terracotta. Distribution at launch was
  "exclusively through mail order and select Coach stores" — limited.
- **Source**: Coach catalog archive (`coach-catalogs-1960-1989`)

### 2026-05-02 — Soho Bag dispute RESOLVED — primary-confirmed Holiday 1991

- **Files**: `models/soho.md`, `research/M-catalogs-deep-readings.md`,
  `errata.md`
- **Was**: Soho launch dispute between coacharchive.com "1991-1997" and
  Coach.com `coach-vintage-soho` "first introduced in 1994."
- **Now**: Holiday 1991 catalog page 22 primary-sources **Soho Bag (No. 4082)
  $228**, "Largest Coach bag," 17¼"×14½"×8½", in Berry, Black, Chamois,
  Cocoa, Ivy. Soho was already established by Holiday 1991. coacharchive.com's
  1991 framing is correct; Coach.com's "1994" likely refers to a specific
  reissue model (CU909) within the modern Coach Originals line, not the
  original 1991 Soho Bag.
- **Source**: Coach catalog archive (`coach-catalogs-1960-1989`) Holiday 1991

### 2026-05-02 — Lightweight Collection had 10+ styles by Holiday 1991

- **Files**: `models/whitney.md` (correction), `research/M-catalogs-deep-readings.md`
- **Was**: Lightweight Collection framed as Spring 1993 launch in earlier errata.
- **Now**: Holiday 1991 catalog primary-sources **10+ Lightweight Collection
  styles**: Soho (4082), Hudson (4113), Cafe (4111), Studio (4081), Bucket
  (4075), Bucket Small (4070), Monterey Hobo (4027), Whitney (4115), Laurel
  (4112), Gallery (4028). Spring 1993 was an EXPANSION of the existing
  Lightweight Collection (added MacDougal Zip, Mercer, Carlton, Waverly,
  Back Sac plus British Tan / Classic Navy / Celadon to the palette), not
  a launch. **"Lightweight leather"** is thinned glove-tanned cowhide
  ("the graceful drape of our lightweights is achieved through a process
  that reduces the thickness and weight of our glove-tanned cowhide"),
  NOT a different material. Whitney Bag (4115) is a Lightweight Collection
  model, not a Classic NYC model — `models/whitney.md` needs correction.
- **Source**: Coach catalog archive (`coach-catalogs-1960-1989`) Holiday 1991 pp 22-27

### 2026-05-02 — 1981 ten-color palette + 1991 expanded palette + 1993 Manhattan palette

- **Files**: `colors/index.md`, multiple per-color files, `errata.md`
- **Was**: Color palettes loosely framed; specific era anchoring missing.
- **Now**: Primary-sourced palette progression:
  - **Fall 1981 (Classic palette, 10 colors)**: Saddle, Navy, Mocha, Red,
    British Tan, Putty, Sage, Burgundy, Black, Tabac
  - **Holiday 1991 (Classic palette, ~12 colors)**: Black, British Tan,
    Burgundy, Bone, Forest Green, Mahogany, Navy, Putty, Red, Tabac, Mocha,
    Berry. Mahogany IS in 1991 (Sage→Forest Green; Mocha and Mahogany
    co-exist).
  - **Holiday 1991 (Lightweight palette, 8 colors)**: Berry, Black, Blue,
    Bone, Chamois, Cocoa, Ivy, Taupe — distinct from Classic.
  - **Fall 1992 (Sheridan palette)**: Black, Bone, Green, Navy, Tan, Red,
    Taupe — distinct from both.
  - **Spring 1993 (Manhattan Lightweights palette)**: Black, Blue, Buff,
    Celadon, Terracotta — distinct from above.
- **Source**: Coach catalog archive (`coach-catalogs-1960-1989`)

### 2026-05-02 — Spectator 6XXX style-number prefix convention

- **Files**: `authentication/serial-numbers.md`, `errata.md`
- **Was**: Style number conventions framed as 9XXX (Classic) or 4XXX (sub-collections).
- **Now**: A **6XXX style-number prefix** is documented for "Spectator"
  two-tone variants of Classic Collection models. Confirmed pairings from
  Holiday 1991 catalog: Scooter Bag 9893 / Spectator 6893; Scout Bag 9890 /
  Spectator 6890; Compartment Bag 9850 / Spectator 6850; Broadway Satchel
  9891 / Spectator 6891. Spectator variants feature body in main color
  with British Tan contrasting trim.
- **Source**: Coach catalog archive (`coach-catalogs-1960-1989`) Holiday 1991

### 2026-05-02 — Springlock closure type added to authentication

- **Files**: `authentication/hardware.md`, `errata.md`
- **Was**: Closure types framed as turnlock, kiss-lock, magnetic, zip.
- **Now**: Holiday 1991 catalog uses "Springlock closure" / "Springlock tab
  closure" for Barclay Tote, Scout Bag, Chrystie Bag, Convertible Clutch.
  Springlock is a distinct closure type from brass turnlock and from
  hidden magnetic snap. `authentication/hardware.md` needs to add
  Springlock as a documented Coach closure family. The 1981 catalog also
  used "industrial turnlock" wording — confirming "industrial" is Coach's
  own descriptor for the brass turnlock.
- **Source**: Coach catalog archive (`coach-catalogs-1960-1989`)

### 2026-05-02 — Coach Color Palette card mentioned in 1992-93 catalogs

- **Files**: `colors/index.md`, `errata.md`
- **Was**: No mention of an official Coach color palette publication.
- **Now**: Fall 1992, Spring 1993, Fall 1993 catalogs all reference a
  dedicated "Coach Color Palette" page (typically page 33 or 37) — a
  reference page within the catalog showing all colors as leather hangtag
  swatches. This is similar to the 1981 catalog's page 3 ten-tag display.
  Open research item: capture and ingest each catalog's color-palette
  page as a primary swatch reference for `colors/<color>.md` entries.
- **Source**: Coach catalog archive (`coach-catalogs-1960-1989`)

### 2026-05-02 — Coach catalog archive 1960–2020 fully retrieved (PRIMARY)

- **Files**: `research/L-catalogs-1960-1989.md`, `sources/registry.md`,
  `sources/primary/catalogs/Archived Vintage Coach Catalogues/`
- **Was**: Catalogs were a Phase 3 retrieval gap; only stub pages
  written for documented years.
- **Now**: User-supplied Google Drive folder yielded **107 original
  Coach catalogs** spanning 1960 (wallets) through 2020 (Coach
  Originals), including comprehensive coverage of every season
  1981–1999. Initial readings of the 1960 and 1975 and 1981 catalogs
  surfaced numerous primary-source upgrades documented in the next
  errata entries.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)

### 2026-05-02 — Coach colors 1981 palette: ten canonical colors with hangtag photos

- **Files**: `colors/index.md`, `colors/sage.md` (new — pending),
  `colors/mahogany.md`, `colors/hunter-green.md`, `errata.md`
- **Was**: Multiple colors documented loosely without era anchoring.
- **Now**: Fall 1981 catalog page 3 displays **ten canonical Coach
  Bag colors** with leather-hangtag photographs: **Saddle, Navy,
  Mocha, Red, British Tan, Putty, Sage, Burgundy, Black, Tabac**.
  Mahogany and Hunter Green are NOT in the 1981 palette — primary
  evidence that both colors were introduced post-1981. **Sage** is a
  documented 1981 color new to our archive. Soft-corrects
  `colors/mahogany.md` (era E3 wider window) and `colors/hunter-green.md`
  (era E3-E4 framing) to reflect post-1981 introduction.
- **Source**: `coach-catalogs-1960-1989` (Tier 1, Fall 1981 catalog p.3)

### 2026-05-02 — Musette Bag (Style 9625) primary-confirmed 1981

- **Files**: `models/musette.md`, `errata.md`
- **Was**: Musette Bag attributed to Cashin per Tier 3 source;
  style number not pinned.
- **Now**: Fall 1981 catalog primary-sources Musette Bag Style 9625,
  $162, dimensions 16"×11"×5", "Largest of Coach® Bags," available
  in Black, Mocha, Tabac, British Tan, Saddle. Cashin attribution
  remains tentative pending pre-1974 catalog evidence; the model
  itself is now primary-confirmed for 1981 production.
- **Source**: `coach-catalogs-1960-1989` (Fall 1981 p.5)

### 2026-05-02 — Coach 1975 catalog: 18 models documented; "35 years" framing

- **Files**: `research/L-catalogs-1960-1989.md`, `errata.md`,
  multiple model entries (pending updates)
- **Was**: Late-Cashin-era and immediate-post-Cashin Coach product
  line was undocumented in primary sources.
- **Now**: Fall 1975 catalog (Cashin's first post-departure year)
  primary-sources 18 models including Knapsac, Mini Pouch, Classic
  Pouch, Pulley Bag, Hasp Bag, Flite Bag, Folio Tote, Mini Clutch,
  Twin Clutch, Convertible Purse, Slim Satchel, Handle Clutch,
  Sentry Tote, Canoe Tote, Zippered Clutch, Shopping Bag Tote, plus
  confirms Duffle Sac (9085), Saddle Bag (9205/9210), Convertible
  Clutch (9320), Watermelon Tote (9440), Crescent (9235),
  Doctor's Satchel (9340). The catalog also reveals the **"Ruff-Out"
  suede variant convention** (style number +3 from base, e.g.,
  9085 standard / 9088 Ruff-Out), entirely undocumented previously.
- **Source**: `coach-catalogs-1960-1989` (Fall 1975)

### 2026-05-02 — coacharchive.com Soho dating: 1991-1997 (DISPUTED with Coach.com 1994)

- **Files**: `models/soho.md`, `errata.md`
- **Was**: `models/soho.md` cited 1994 introduction date per
  Coach.com brand re-release page (Tier 1).
- **Now**: coacharchive.com (Tier 3 reference, 675+ documented
  styles) lists **Soho Bag (Style 4082) as 1991–1997**, with a
  separate "Soho Small *" sub-line in 1998 (4104, 4106, 4107,
  4108). This conflicts with Coach.com's "first introduced 1994"
  framing. Likely reconciliation: the Soho LINE existed from 1991;
  Coach.com's CU909 vintage re-release product page references a
  specific 1994 sub-style. Mark `disputed` until resolved against
  the original Coach catalogs (we have 1991, 1992, 1993, 1994
  catalogs in `sources/primary/catalogs/`).
- **Source**: `coacharchive-com` (Tier 3) vs `coach-vintage-soho` (Tier 1)

### 2026-05-02 — Brass turnlock patent: US3201162A, Fulford Manufacturing, April 6, 1964

- **Files**: `designers/bonnie-cashin.md`, `models/cashin-carry.md`,
  `authentication/hardware.md`, `errata.md`, `sources/registry.md`,
  `research/H-uspto.md`
- **Was**: Brass turnlock attributed loosely to Cashin's design
  vocabulary, with the 1964 introduction date sourced from Vintage
  Fashion Guild (Tier 2 only).
- **Now**: Primary patent identified — **US3201162A "Turn lock
  assembly"**, inventor **Paynor Melvin**, assignee **Fulford
  Manufacturing Co**. Priority/Filing date **April 6, 1964**,
  granted August 17, 1965. Expired by lifetime 1982. Cashin
  did NOT invent the turnlock — she sourced just-patented Fulford
  hardware. The 1964 first-use-at-Coach date aligns precisely with
  the patent priority date, confirming Cashin was an early adopter
  of the new Fulford fastener. The "1940s convertible-car
  inspiration" Cashin recounted in interviews is a conceptual
  lineage, not the actual hardware origin.
- **Source**: `uspto-patent-turnlock-3201162` (Tier 1 PRIMARY)

### 2026-05-02 — COACH LEATHERWARE wordmark first use in handbag class: September 1973

- **Files**: `authentication/creed-formats.md`, `errata.md`,
  `sources/registry.md`
- **Was**: LEATHERWARE wordmark dated to "early NYC era" loosely,
  no primary first-use date.
- **Now**: USPTO Reg 1242098 (Serial 73345984) registered the COACH
  LEATHERWARE wordmark for IC 018 (handbags) + IC 025 (belts) on
  June 14, 1983, with **First Use in Commerce September 1973**.
  The wordmark itself appears on the 1960 Coach Wallets catalog
  cover, predating handbag-class first use; the September 1973
  date is specifically for the handbag goods class. This anchors
  the LEATHERWARE-on-creed era boundary precisely: handbag
  creeds bearing LEATHERWARE-stamped wordmark date from 1973
  onward at the earliest. Cancelled 2016-03-18 for non-renewal —
  Coach abandoned the LEATHERWARE wordmark formally in 2016 (it
  had effectively dropped from new product creeds in the
  mid-1990s; the registration's lapse is the legal terminus).
- **Source**: `uspto-tm-coach-leatherware` (Tier 1 PRIMARY)

### 2026-05-02 — Coach 1960 catalog: pre-Cashin product line documented

- **Files**: `research/L-catalogs-1960-1989.md`,
  `authentication/serial-numbers.md` (pending — pre-1961 style number
  format), `authentication/stitching.md` (pending — saddle-stitch
  authentic on pre-1961 SLGs), `errata.md`
- **Was**: Coach's pre-Cashin product line (1941–1961) was entirely
  un-documented in the archive; the brand's pre-1962 history was
  framed as "wallets and billfolds" via secondary sources only.
- **Now**: User-supplied 1960 Coach Wallets catalog (Tier 1 primary)
  documents six pre-Cashin Coach wallet models: **Mark 111**,
  **Playboy**, **All American**, **Traveler**, **Hard Top**,
  **Private Secretary**. Style-number format pre-1961 was
  `22-25XXX-NNN` (constant prefix, sequential five-digit base,
  price-tier suffix) — completely different from the post-1980 9XXX
  format. Pre-1961 saddle-stitching IS authentic (per "Mark 111 –
  Hand turned Saddle Stitched stud box") — corrects the research/E
  §7 framing of saddle-stitching as folklore. COACH LEATHERWARE
  wordmark and horse-and-carriage logo both already in commercial
  use 1960, predating Cashin and the Cahn purchase. "Over two
  decades" 1960 marketing copy soft-disputes the 1941 founding date.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)

### 2026-05-02 — Coach 2000 S-1 prospectus pulled (PRIMARY)

- **Files**: `research/K-coach-s1-2000.md` (new), `sources/registry.md`,
  `history/timeline.md`, `authentication/country-of-origin.md`
  (pending)
- **Was**: 2000 S-1 was the highest-value un-pulled primary source.
  Frankfort dates given as "1985 president, 1995 CEO"; manufacturing
  geography only via 2003 10-K.
- **Now**: User-supplied local copy of the S-1 (filed June 20, 2000)
  is now in the archive. Major upgrades:
  - **Frankfort president July 1985 – September 1991** (departed
    Coach for Sara Lee corporate roles)
  - **Frankfort returned as Chairman/CEO November 1995** (specific
    to month)
  - **June 1998 Keith Monda joined as EVP/COO**
  - **July 1998 David DeMattei joined as President, Retail Division**
  - **Medley, Florida 107,000 sq ft manufacturing** facility — the
    long-rumored 1988 "Miami-area" plant, now primary-confirmed.
    Closed between June 2000 and June 2003 (date open).
  - **Lares, Puerto Rico 66,000 sq ft manufacturing** confirmed
    (closed April 2002 per 2003 10-K).
  - **Florence, Italy 16,000 sq ft product development** office
    operating in 2000.
  - **Predecessor entity name**: "Coach Leatherware Company" was
    the corporate-form predecessor Sara Lee acquired in 1985.
  - **1985 sales $19.0M** (primary, vs WWD's "$18M" approximation).
  - **FY1997 peak sales $540.4M** (high-water mark before 1998-1999
    declines).
  - **First direct mail catalog by 1980s** (S-1 primary anchor).
  - **Carlstadt warehouse closed during 1999**, manufacturing
    operations significantly reduced; Carlstadt retained for
    prototype work and product development.
- **Source**: `coach-s1-2000` (PRIMARY)

### 2026-05-02 — Cahn life dates documented

- **Files**: `designers/cahn-family.md`
- **Was**: Cahn life dates not in any archive entry.
- **Now**: Lillian Cahn 1923–2013 (born Sátoraljaújhely, Hungary), Miles Cahn 1921–2017. Lillian's WWD obituary is the primary anchor.
- **Source**: `wwd-lillian-cahn-obituary` (Tier 2)

### 2026-05-02 — Stewardess UAL claim cross-referenced with Cashin AA commission

- **File**: `models/stewardess.md`
- **Was**: The community Stewardess–United Airlines claim stood with
  no related Cashin aviation-uniform context
- **Now**: Cashin's American Airlines flight-attendant uniform
  commission (per Maharam) is explicitly noted as a **separate**
  fact from the Stewardess–UA claim. The two should not be conflated.
  The AA commission predates Coach (Cashin signed Coach 1961/1962)
  and is unrelated to the 1970s Coach Stewardess.
- **Source**: `maharam-cashin`

### 2026-05-02 — 1985 catalogs: Sara Lee transition + brand-voice preservation

- **Files**: `research/M1-catalogs-1985.md` (new), `history/timeline.md`
  (pending update), `errata.md`
- **Was**: Sara Lee acquisition framed as a 1985 corporate event with
  uncertain product/voice impact; "Handle Shoulder Bag" assumed stable
  name; archive lacked primary on Spring/Summer/Winter 1985 product line.
- **Now**: Three primary 1985 catalogs read (Spring, Summer, Winter).
  Sara Lee acquired Coach July 1985. Brand voice **preserved verbatim**
  in Winter 1985 — months after acquisition: "We are a small family
  owned company that has been making leather bags, belts and billfolds
  since 1941" appears unchanged. **~10% across-the-board price increase
  Spring→Winter 1985.** **Toll-free number changed**: 262-2422 →
  544-3004. The "Handle Shoulder Bag" was **renamed "School Bag"** in
  Winter 1985 (style 9695 unchanged). 10+ new SKUs added Winter 1985
  (Standard Clutch 5140, Small Clutch 5110, Slim Clutch Large 9555,
  Classic Clutch 9720, Shoulder Purse 9385, Skinny Tote 9546, Passport
  Case 4625, Checkbook Purse 4680, Envelope Purse 4650). 1985 retail
  network confirmed: Paris (Rue Jacob — international), NYC (754
  Madison Ave), Washington DC, Seattle, San Francisco, Boston.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream M1 catalog deep-read

### 2026-05-02 — 1985 archive duplicate: 1985-fall.pdf == 1985-summer.pdf content

- **Files**: `sources/primary/catalogs/Archived Vintage Coach Catalogues/`,
  `errata.md`
- **Was**: Archive assumed four distinct 1985 catalogs (Spring, Summer,
  Fall, Winter).
- **Now**: `1985-fall.pdf` is **content-identical** to `1985-summer.pdf`
  — same brown/rust cover labeled "Summer 1985," same SKUs, same prices.
  Different file hashes but visually identical. The archive effectively
  has **three distinct 1985 editions** (Spring, Summer, Winter), not
  four. A genuine Fall 1985 catalog (which would have introduced the
  ~10% price increase first) appears to be missing from the corpus.
- **Source**: `coach-catalogs-1960-1989`
- **Flagged by**: research stream M1 catalog deep-read

### 2026-05-02 — Coach Water Buffalo Hide: vegetable-tanned, India

- **Files**: `authentication/leather.md` (pending update), `errata.md`
- **Was**: Coach Water Buffalo Hide referenced loosely without
  origin or tanning method documented.
- **Now**: Per 1985 Spring catalog primary, Coach Water Buffalo Hide
  is **vegetable-tanned in India** — distinct material from glove-tanned
  cowhide. Also primary-documented from 1985 catalogs: 12 stitches per
  inch construction; outside-seam construction with continuous leather
  binding (predates the 1991 "hand-folded seam binding" language by 6+
  years); leather-covered kiss-lock purse frame as a Coach SLG hardware
  type.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream M1 catalog deep-read

### 2026-05-02 — Ergo line launch: Summer 1997 preview, Early Fall 1997 full launch

- **Files**: `models/ergo-hobo.md`, `research/M4-catalogs-1997-1998.md`
  (new), `errata.md`
- **Was**: Ergo Hobo entry framed as 1998 introduction, style numbers
  9020 + 9033 treated as colorway variants of the Hobo. Tier 3 source
  only.
- **Now**: Primary catalog evidence resolves both the date and the
  style-number confusion:
  - **1997 Summer catalog** previews Ergo: "the new Coach Ergo
    Collection, **previewed here**"
  - **1997 Early Fall catalog** is the actual launch with dedicated
    spread "Ergo / The shapely ones" and **six styles**:
    Hobo **9026**, Flap Bag 5029, Mini Zip Bag 9020, Mini Satchel
    9027, Zip Bag 9025, Pocket Zip Bag 9033.
  - The Ergo Hobo specifically is **style 9026** — 9020 and 9033 are
    sibling styles (Mini Zip Bag and Pocket Zip Bag), not Hobo
    variants. Earlier framing was wrong.
  - **Holly Solomon** ("SoHo Arts Pioneer") modeled for Ergo in
    Holiday 1997 — Coach's first named cultural-figure brand
    association.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream M4 catalog deep-read

### 2026-05-02 — Coach Neo (1998 New Collection) = first metal exterior brand-plate

- **Files**: `research/M4-catalogs-1997-1998.md` (new), `errata.md`,
  `authentication/hardware.md` (pending), Coach Neo entry (pending
  creation)
- **Was**: Signature C (2001) treated as the first exterior metal-brand
  marker on a Coach bag.
- **Now**: The **1998 New Collection** catalog = the **Coach Neo
  Collection**. Coach Neo bags carry a silver/nickel **"COACH NEW YORK"
  metal plaque on the bag front** — the **first metal exterior
  brand-plaque on a Coach bag, predating Signature C by ~3 years**.
  Companion launch: **Lexington Collection** (textured leather). This
  reframes the Krakoff transition: the visible-branding pivot began
  with metal hardware (Coach Neo 1998), not with the C-monogram
  jacquard (Signature C 2001).
  - Adjacent finding: **Tribeca embossed "COACH" wordmark** at base of
    bag (1998 Spring Preview) — first systematic exterior wordmark.
  - Adjacent finding: **NICKEL hardware** on the music-named Classic
    line (Cha Cha, Mambo, Disco, Tango, Swing — 1998 Holiday Preview),
    modernizing the heritage line away from solid brass.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream M4 catalog deep-read

### 2026-05-02 — Bleeker Bag 4153: 1997 Soho Collection — contradicts Coach.com 2000 date

- **Files**: `models/bleecker-satchel.md`, `errata.md`
- **Was**: Bleecker Satchel introduction year recorded as 2000
  (Tier 1 brand-published, Coach.com Vintage Bleecker Satchel CK664
  product page).
- **Now**: **1997 Spring Preview catalog** lists "Bleeker Bag" Style
  **4153** in the Soho Collection at $220 — three years before
  Coach.com's claimed introduction. Catalog spelling is "Bleeker"
  (single 'c'), a documented Coach name variant. Two reconciliations
  possible: (1) Same name, different silhouette — 1997 "Bleeker Bag"
  may be a Soho Collection model distinct from the 2000 "Bleecker
  Satchel"; (2) Coach.com misdates its own re-release. Until a
  2000+ catalog is read for the Bleecker Satchel, archive holds
  1997-spring as earliest primary appearance and re-tags introduction
  as `disputed`.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY) vs
  `coach-vintage-bleecker` (Tier 1 brand-published)
- **Flagged by**: research stream M4 catalog deep-read

### 2026-05-02 — Sonoma Collection pre-dates Spring 1995 — FundingUniverse 1995 wrong

- **Files**: `research/M3-catalogs-1995-1996.md` (new), `errata.md`,
  Sonoma entry (pending creation/update)
- **Was**: Sonoma launch tagged 1995 per FundingUniverse Tier 2
  trade-press source.
- **Now**: Spring 1995 Preview catalog verbatim copy reads:
  "**Sonoma … two NEW subtle tones … Terracotta and Slate**" — added
  to a pre-existing Nubuc palette of Bramble/Chamois/Sand. Natural
  Grain palette (Black/Buff/Saddle) is treated as already established.
  Sonoma did NOT launch in Spring 1995 — it was already in the line
  with an established palette by then. **FundingUniverse's 1995 date
  is incorrect.** The actual Sonoma launch year remains open
  (1992-1994 window). PurseForum's prior reference to a 1992 Sonoma
  catalog appearance warrants direct PDF verification but is not
  contradicted by the 1995-1996 corpus.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY) overrides
  `fundinguniverse-coach` (Tier 2)
- **Flagged by**: research stream M3 catalog deep-read

### 2026-05-02 — Sheridan Collection sunset: absent after Spring 1995

- **Files**: `models/sheridan-collection.md` (pending update),
  `research/M3-catalogs-1995-1996.md`, `errata.md`
- **Was**: Sheridan Collection era_code recorded as E4 with no
  documented end date.
- **Now**: Sheridan **disappears from Coach catalogs after Spring
  1995** — absent from 1995 Holiday Preview table of contents and
  from all subsequent 1996 catalogs and the 1996-1997 Source Book.
  Roughly a 3-year run: Fall 1992 launch → Spring 1995 final
  appearance. The Sheridan Collection was discontinued, not merged.
  Its disappearance precedes Reed Krakoff's December 1996 hire — so
  the sunset is **late-NYC era management decision, not Krakoff
  rationalization.**
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream M3 catalog deep-read

### 2026-05-02 — Berkeley Series launch: Early Autumn 1996 (suede, pre-Krakoff)

- **Files**: `research/M3-catalogs-1995-1996.md`, `errata.md`,
  Berkeley entry (pending creation)
- **Was**: Berkeley not previously documented in archive.
- **Now**: **Berkeley Series launches Early Autumn 1996** — suede
  collection in Mahogany / Red / Russet / Black, brand voice "casual
  American sensibility." This pre-dates Krakoff (hired December 1996)
  and is one of the last late-NYC-era named launches. Adjacent 1995-96
  launches: Olympic Games Collection (Holiday 1995, USOC + ACOG
  Centennial), Travelweave luggage (Spring 1995), Footwear (Holiday
  1995 Preview), Lexus Coach Edition automotive co-branding (Spring
  1996).
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream M3 catalog deep-read

### 2026-05-02 — Spectator Collection: Fall 1989 launch — NOT 1991

- **Files**: `models/` (Spectator entries pending), `research/M2-catalogs-1989.md`
  (new), `errata.md`, prior 6XXX errata note (supersedes)
- **Was**: Spectator 6XXX prefix convention dated to ~1991 in earlier
  errata.
- **Now**: **Spectator Collection launched Fall 1989** with eight
  styles, all originally with **Tabac trim** (transitioned to British
  Tan trim by 1991). Launch roster: **6375, 6750, 6765, 6790, 6820,
  6825, 6850, 6855**. The 6XXX style-number convention is a Fall 1989
  innovation, not 1991. Brand voice (Fall 1989): "Traditionally
  American in appeal, the Spectator Collection possesses a sportive
  spirit..."
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream M2 catalog deep-read

### 2026-05-02 — Court Bag (9870): Fall 1989 launch via Continental Series

- **Files**: `models/court.md`, `research/M2-catalogs-1989.md`,
  `errata.md`
- **Was**: Court Bag introduction year recorded as `tentative` with
  Holiday 1991 as earliest primary citation.
- **Now**: **Continental Series launched Fall 1989** with Plaza Bag
  (9860), Plaza Bag Large (9865), **Court Bag (9870)**, and Regency
  Brief (5255). The Court Bag is a Fall 1989 model — Holiday 1991 was
  not its debut, only an early documented appearance. Court entry
  introduction can be promoted from `tentative` to `confirmed` Fall
  1989.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream M2 catalog deep-read

### 2026-05-02 — Forest Green debut Fall 1989 — Hunter Green dispute resolved

- **Files**: `colors/` (Forest Green / Hunter Green entries pending),
  `research/M2-catalogs-1989.md`, `errata.md`
- **Was**: "Hunter Green" and "Forest Green" treated as candidate
  parallel names with unresolved primary attribution.
- **Now**: **Forest Green is the canonical Coach color name**,
  primary-confirmed in Fall 1989 catalog. "Hunter Green" is a
  community misnomer. Coach has used "Forest Green" consistently from
  Fall 1989 onward.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream M2 catalog deep-read

### 2026-05-02 — Sandstone debut Summer 1989; Mahogany Spring 1989

- **Files**: `colors/` (Sandstone, Mahogany entries pending),
  `research/M2-catalogs-1989.md`, `errata.md`
- **Was**: Mahogany loosely dated; Sandstone undocumented.
- **Now**: **Sandstone debuts Summer 1989** as a Classics palette
  color. **Mahogany confirmed in Spring 1989 Classics palette**
  (predates 1991 by 2+ years).
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream M2 catalog deep-read

### 2026-05-02 — Lightweight Collection: 14+ styles by Spring 1989

- **Files**: `models/lightweight-collection.md`, `research/M2-catalogs-1989.md`,
  `errata.md`
- **Was**: Lightweight Collection introduction recorded as `pre-1991`
  / `tentative` (10 styles confirmed Holiday 1991).
- **Now**: Lightweight Collection was **fully established by Spring
  1989** with **14+ styles** — Holiday 1991's 10-style roster was a
  trimmed selection, not a launch. **Hidden magnetic snap closure**
  was already in use Spring 1989. Lightweight Collection introduction
  remains `tentative` for the exact launch year (pre-Spring 1989) but
  can be tightened to "before Spring 1989."
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream M2 catalog deep-read

### 2026-05-02 — Soho Bag 4082 NOT in any 1989 catalog — narrows launch window

- **Files**: `models/soho-bag.md`, `research/M2-catalogs-1989.md`,
  `errata.md`
- **Was**: Soho Bag 4082 primary-confirmed Holiday 1991 (page 22),
  introduction tagged as 1991.
- **Now**: Soho Bag **absent from all five 1989 catalogs** (Spring,
  Summer, Fall, Winter, Holiday Previews). The 4082 style-number slot
  was empty in Spring 1989 numbering. **Soho launched between Fall
  1989 and Holiday 1991** — narrowing the launch window. The 1991
  Holiday primary citation may be the launch catalog itself; 1990
  catalogs (yet to be deep-read) are the next target.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream M2 catalog deep-read

### 2026-05-02 — Madder Silk Scarves launched Holiday 1989 — Como, Italy

- **Files**: `research/M2-catalogs-1989.md`, `errata.md`, accessories
  entries (pending)
- **Was**: Coach Madder Silk Scarves not documented in archive.
- **Now**: Madder Silk Scarves introduced Holiday 1989 — Como, Italy
  production. First documented non-leather, non-domestic-production
  category in Coach catalogs. Predates the 1990s expansion into
  travel and apparel categories.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream M2 catalog deep-read

### 2026-05-02 — "More than 45 years" / "almost fifty years" Spring–Holiday 1989 anniversary framing

- **Files**: `research/M2-catalogs-1989.md`, `errata.md`,
  `history/timeline.md` (pending)
- **Was**: Coach anniversary framing assumed monotonic.
- **Now**: 1989 catalog brand-voice anniversary tags shift across the
  year:
  - **Spring 1989**: "more than 45 years" (1941+45 = 1986; loose)
  - **Winter / Holiday 1989**: "almost fifty years" (1941+50 = 1991;
    forward-leaning toward the 50-year mark)
  - **Spring 1989** on Classic Shoulder Bag 9170: "After more than
    two decades, women still regard this bag — the original Coach
    bag — as an essential part of their Coach collection." This
    "original Coach bag" framing for the 9170 (Classic Shoulder Bag)
    is preserved primary copy and worth quoting on the 9170 entry.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream M2 catalog deep-read

### 2026-05-04 — Heritage Coach Classics retired by Autumn 2002 — Legacy West replaces

- **Files**: `errata.md`, `history/timeline.md`,
  `research/Q2-catalogs-2000-2002.md`,
  `models/willis.md`, `models/court.md`,
  `models/companion-flap.md`, `models/madison-satchel.md`,
  `models/duffle-sac.md`, `models/classic-shoulder-bag.md`
- **Was**: Earlier framing (per Q2 partial) showed late-NYC heritage
  silhouettes surviving into 2001 Holiday Preview. Their final
  retirement year was an open question.
- **Now**: Q2 follow-up deep-read of 2002-autumn confirms **all
  late-NYC-era heritage silhouettes are retired by Autumn 2002**
  [coach-catalogs-1960-1989]:
  - Willis 9927 — GONE
  - Court 9870 — GONE
  - Companion Flap 9076 — GONE
  - Daypack 9791 (original) — GONE
  - Madison Satchel 9725 (handbag) — GONE; "Madison" survives
    only as eyewear S412
  - Classic Shoulder Bag 9170 — GONE
  - Duffle Sac 9085 — name survives as "Coach Duffle Sac"
    sub-collection but not in 9085 heritage configuration
  - Bleecker — GONE (closes 3-era Bleecker timeline)
  - Mercer (handbag) — GONE; survives only as eyewear S311
  - Gramercy — GONE
  - Coach Bridle (handbag) — GONE; only Coach Bridle Classic Watch
    survives
  - Coach Neo — GONE
  - Hippie Flap 9134/9135 — GONE (single-season 2001 revival)
  - Rambler's Legacy 9061 — GONE

  **Legacy West Small Backpack 9858 ($238) and Legacy West Suede
  Small Backpack 9878 ($238) launch as Krakoff-era replacements**
  for the heritage daypack/companion silhouettes — "*A classic
  Coach style updated in rich suede and Fall's new neutrals*" with
  "Coach logo lining." This is **the formal end of vintage-era
  Coach as a current-season concept** — the natural archive cutoff.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream Q2 follow-up catalog deep-read

### 2026-05-04 — "COACH LEATHERWARE EST. 1941" embossed-leather patch: Autumn 2002 debut

- **Files**: `errata.md`, `history/timeline.md`,
  `authentication/creed-formats.md` (pending update),
  `research/Q2-catalogs-2000-2002.md`
- **Was**: The "COACH LEATHERWARE EST. 1941" mark appears on
  modern Coach Originals re-releases. Origin year of the embossed
  leather patch was undocumented.
- **Now**: Q2 follow-up confirms **the "COACH LEATHERWARE EST.
  1941" embossed-leather patch debuts Autumn 2002** on multiple
  Signature pieces: Signature Carryall 6086, Signature Travel
  Tote, Signature Skinny Wristlet 8365 [coach-catalogs-1960-1989].
  Tied to the Signature C embossed-calfskin debut. **Authentication
  implication**: a "COACH LEATHERWARE EST. 1941" embossed leather
  patch claiming pre-2002 manufacture is wrong on its face. The
  patch is the visual continuation of the post-2001 Signature C
  brand identity, not a heritage-era mark.

  Continues the **silent-anniversary pattern**: the 61st year is
  marked image-only via the embossed patch, never editorialized in
  body copy. Round-number anniversaries 40 (1981), 60 (2001), 61
  (2002) are silent; 45 (1986) and 50 (1990) are explicit.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream Q2 follow-up catalog deep-read

### 2026-05-04 — Signature C proliferates to embossed calfskin by Autumn 2002

- **Files**: `errata.md`, `history/timeline.md`,
  `research/Q2-catalogs-2000-2002.md`,
  `models/coach-neo-collection.md` (cross-reference)
- **Was**: Signature C was framed as a 2001 jacquard-only collection
  launch, with Wool C precursor 2000 Holiday.
- **Now**: Q2 follow-up shows the C-monogram completes its full
  transition from jacquard motif to brand-wide debossed-leather
  signature within ~2 years [coach-catalogs-1960-1989]:
  - **Holiday 2000**: Wool C Small Tote 8131 (jacquard, wool ground)
  - **2001 Fall**: 6-page Coach Signature editorial block (4263
    Multi-Function Tote, jacquard)
  - **2001 Holiday Preview**: Coach Signature continues as
    sub-collection
  - **Autumn 2002**: Signature C on EMBOSSED CALFSKIN — Embossed
    Cosmetic 8991, Embossed Slim Envelope Wallet 6873, Skinny
    Wristlet 8365, Carryall 6086, Travel Tote

  This positions Coach Neo's 1998 nickel "COACH NEW YORK" plaque
  (per M4) as the actual first metal-exterior brand-mark, with the
  Signature C jacquard and embossed-calfskin propagation as the
  successor visual brand-identity moves.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream Q2 follow-up catalog deep-read

### 2026-05-04 — Krakoff NEVER credited in any 2000-2002 catalog (full window)

- **Files**: `errata.md`,
  `research/Q2-catalogs-2000-2002.md`,
  reinforces folklore-trap pattern from N4
- **Was**: Per Q2 partial, Krakoff was not named in body copy of
  2000-2001 catalogs (caveat: PARTIAL, fine-print colophons not
  exhaustively checked).
- **Now**: Q2 follow-up confirms **Autumn 2002 also has zero
  Krakoff credit** across cover, every spread, and back cover
  [coach-catalogs-1960-1989]. **Full 2000-2002 in-scope window
  contains ZERO Krakoff colophon credits.** Pattern: creative-
  director silence is the house style of the Krakoff-era catalog.

  **Continuation of a 20+ year corporate-voice posture**: per N4
  cross-cut, Cashin was never named in any 1981-1984 catalog
  despite her silhouettes dominating the line; Krakoff is never
  named in 2000-2002 despite leading Coach as President +
  Executive Creative Director from September 1999 through end of
  archive scope. The continuity holds across two distinct
  ownership eras (Cahn 1981-1985, Sara Lee 1985-2001, standalone
  Coach Inc. 2001+) and two distinct creative leadership
  eras — confirming it as a deliberate house-style choice, not an
  artifact of any single era.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY) reinforces
  N4 cross-cut finding
- **Flagged by**: research stream Q2 follow-up catalog deep-read

### 2026-05-04 — Hamptons Collection: returned Autumn 2002 (single-season Holiday 2001 sunset NOT permanent)

- **Files**: `errata.md`, `history/timeline.md`,
  `research/Q2-catalogs-2000-2002.md`
- **Was**: Per Q2 partial, Hamptons disappeared between Fall 2001
  and Holiday 2001 Preview. Was framed as a sunset event.
- **Now**: Q2 follow-up confirms **Hamptons returns as the flagship
  of Autumn 2002** — Coach Hamptons Carryall, Tote, Bucket Bag,
  Demi Pouch (No. 7785, $128), and Hampton Rye Hobo all appear
  [coach-catalogs-1960-1989]. The Holiday 2001 sunset was a
  single-season gap, not a permanent retirement. Krakoff-era
  collection rotation is more turbulent than originally framed —
  collections cycle in/out of focus across single seasons rather
  than running multi-year arcs.

  Adjacent Autumn 2002 NEW launches that share catalog real estate
  with Hamptons return: **Coach Soft Signature** (NEW jacquard
  family), **Coach Textured Leather / Milbrook** (NEW), **Milbrook
  Tattersall** (NEW plaid), **Signature Chic** (NEW dressier
  evening Signature spinoff).
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream Q2 follow-up catalog deep-read

### 2026-05-04 — Signature C precursor: Wool C Small Tote 8131 in 2000 Holiday (NOT 2001 launch)

- **Files**: `errata.md`, `history/timeline.md`,
  `research/Q2-catalogs-2000-2002.md`
- **Was**: Per FundingUniverse + encyclopedia.com (Tier 2), Signature
  C double-C monogram collection launched 2001. Used as the
  end-of-vintage cutoff for this archive.
- **Now**: Q2 partial primary-confirms **Wool C Small Tote (Style
  8131) shipping in the 2000 Holiday catalog** [coach-catalogs-
  1960-1989] in the Wool C signature jacquard (twin-C surface, wool
  ground). The "Signature C launches 2001" framing is **off by one
  season** at the catalog level — the precursor Wool C product
  ships Holiday 2000, before the formal six-page Coach Signature
  editorial block in 2001 Fall (anchored by Coach Signature
  Multi-Function Tote 4263 at $368). The 2001 launch is the
  collection-level moment; the silhouette debut is 2000 Holiday.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY) refines
  `fundinguniverse-coach` and `encyclopedia-com-coach-leatherware`
- **Flagged by**: research stream Q2 catalog deep-read

### 2026-05-04 — Bleecker has 3 distinct production eras (1995, 1999, 2001)

- **Files**: `models/bleecker-satchel.md`,
  `research/Q2-catalogs-2000-2002.md`, `errata.md`,
  supersedes earlier 2-era framing
- **Was**: Per earlier P2 finding, Bleecker had 2 documented eras —
  Bleeker Bag 4153/4154 (Soho Series 1995-1997) and the
  Coach.com-claimed 2000 Bleecker Satchel re-release.
- **Now**: Q2 partial 1999 reading surfaces a **third era**:
  - **1995-1997**: Bleeker Bag (single 'c'), Soho Series, lightweight
    leather, Style 4153/4154
  - **Fall 1999**: Bleecker Tweed (double 'c') sub-line debuts —
    1999-fall back cover lists Bleecker Tweed Satchel 6126 at $198
    with "Preview our new Mercer, Hippies, Bleecker Tweed, and Home
    collections" [coach-catalogs-1960-1989]
  - **Holiday 2001**: Bleecker glove-tanned leather expansion —
    handbags 9303-9314 + tweed continuation 6112-6128 + Bleecker
    Combination Wallet Checkbook 5898 [coach-catalogs-1960-1989]
  Coach.com's "Vintage Bleecker Satchel CK664 first introduced 2000"
  conflates these eras. The CK664 is most likely a re-release of
  either the 1999 tweed line or the 2001 glove-tanned expansion, not
  a 2000-original silhouette. 2000-spring/2000-fall catalogs (not in
  archive corpus) would settle whether "2000" refers to a specific
  intermediate launch or a marketing rounding.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY) overrides
  `coach-vintage-bleecker` (Tier 1 brand-published, but inaccurate)
- **Flagged by**: research stream Q2 catalog deep-read

### 2026-05-04 — Heritage Coach Classics survive into post-IPO 2001 Holiday

- **Files**: `errata.md`, `history/timeline.md`,
  `research/Q2-catalogs-2000-2002.md`,
  `models/willis.md`, `models/court.md`,
  `models/companion-flap.md`
- **Was**: Earlier framing assumed late-NYC-era heritage silhouettes
  faded out under Krakoff (December 1996+). Post-2000 heritage-line
  survival was an open question.
- **Now**: Q2 deep-read primary-confirms the **2001 Holiday Preview
  catalog includes a dedicated "Coach Classics" sub-collection**
  (TOC p 18) with **Willis 9927, Court 9870, Companion Flap 9076,
  Large Daypack 9791** all alive in original Black/British
  Tan/Mahogany/Navy/Bone palette with brass hardware
  [coach-catalogs-1960-1989]. These late-NYC-era silhouettes
  **survive at least 7 years past the 1994 late-NYC peak** and into
  the post-Sara-Lee (April 2001 divestiture), post-IPO (October
  2000) standalone-Coach-Inc. era. The "MADE BY COACH" mark on the
  2001 Holiday Preview cover is a deliberate mid-century brand-voice
  anchor that pairs with this Coach Classics block. Adjacent: **Hippie
  Flap 9134/9135** with revival copy "vintage form streamlined for
  now" — Krakoff-era 1970s-silhouette revival.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream Q2 catalog deep-read

### 2026-05-04 — Carlstadt NJ → Jacksonville FL Coach Consumer Service by Fall 2001

- **Files**: `errata.md`, `history/timeline.md`,
  `research/Q2-catalogs-2000-2002.md`,
  `authentication/country-of-origin.md` (pending)
- **Was**: Per existing archive timeline, Coach consolidated
  worldwide warehousing/distribution/repair into Jacksonville FL
  in **July 1999**. Catalog brand-voice continuity was unverified.
- **Now**: Q2 deep-read documents the **catalog signage update lag**:
  Coach Consumer Service mailing address updates from "410 Commerce
  Boulevard / Carlstadt, NJ 07072-3099" (per P3 1994 corpus) to
  "**Coach Consumer Service / One Coach Way / Jacksonville, Florida
  32218**" with (904) 741-3090 phone line by **Fall 2001** catalog
  [coach-catalogs-1960-1989]. **2.25-year lag** between July 1999
  operational move and catalog-text update. Authentication
  implication: a Coach repair/care correspondence claim from a
  customer dating ~1999-2001 with the Carlstadt NJ return address
  is era-appropriate; Jacksonville FL on a same-period address
  would be unusual until catalog publish date.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY) +
  `coach-10k-fiscal-2003` (Jacksonville move date)
- **Flagged by**: research stream Q2 catalog deep-read

### 2026-05-04 — Hamptons Collection sunset between Fall 2001 and Holiday 2001 Preview

- **Files**: `errata.md`, `history/timeline.md`,
  `research/Q2-catalogs-2000-2002.md`
- **Was**: Per existing archive notes, Hamptons Collection emerged
  late 1990s as a Krakoff-era collection. Sunset year unknown.
- **Now**: Q2 deep-read documents a single-season transition:
  Hamptons Collection persists in 2001 Fall catalog as **two parallel
  sub-lines** (Coach Hamptons Carryalls TOC pp 3-5; Coach Hamptons
  Leather TOC pp 10-11 with Hamptons Leather Demi Pouch 7785) but is
  **absent from the 2001 Holiday Preview TOC**, replaced by Coach
  Monterey, Mercer, Gramercy, Bleecker, Coach Bridle, Coach Neo
  [coach-catalogs-1960-1989]. The Krakoff-era collection-rotation
  cadence is markedly faster than the late-NYC-era collections
  (Sheridan ran Spring 1992 - Spring 1995, ~3 years; Hamptons
  rotates across a single season). Open: 2002 Autumn unread —
  Hamptons return / Bleecker survival / Signature C proliferation
  not yet pinned.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream Q2 catalog deep-read

### 2026-05-04 — Krakoff NOT named in any 2000-2001 catalog body copy

- **Files**: `errata.md`, `research/Q2-catalogs-2000-2002.md`,
  reinforces folklore-trap pattern
- **Was**: Open question whether Reed Krakoff received explicit
  designer credit in catalog text after his September 1999 promotion
  to President + Executive Creative Director.
- **Now**: Q2 deep-read confirms Krakoff is **NOT explicitly named
  in body copy of any of the three Q2 catalogs read** (2000 Holiday,
  2001 Fall, 2001 Holiday Preview pp 1-38) [coach-catalogs-1960-1989].
  Brand voice is unmistakably Krakoff-era (Coach Signature, Mercer,
  Bleecker, Coach Bridle, Coach Neo, Hippie Flap revival, MADE BY
  COACH cover, Marisa Tomei celebrity placement) but no body-copy
  designer credit. **Continues the documented Coach pattern**: per
  N4 cross-cut, Bonnie Cashin was never named in any 1981-1984
  catalog despite her silhouettes dominating the line. The corporate-
  voice / no-individual-designer-credit posture has held from at
  least Fall 1981 through Holiday 2001 — a 20+ year continuity.
  Caveat: PARTIAL — fine-print colophons not exhaustively re-checked.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream Q2 catalog deep-read

### 2026-05-04 — 1994 American Legacy Series + Sonoma + Limited Editions launches

- **Files**: `errata.md`, `history/timeline.md`,
  `research/P3-catalogs-1994.md`, M3 Sonoma launch refined
- **Was**: Sonoma launch year was open ("pre-Spring 1995" per M3
  cross-reading; FundingUniverse "1995" disproven). American Legacy
  Series and 1994 Limited Editions retro revival not previously
  documented.
- **Now**: P3 primary-confirms three new 1994 collection launches
  [coach-catalogs-1960-1989]:
  - **American Legacy Series Early Autumn 1994**: 5 customer-
    ancestor-named NEW bags anchored on the 1973 Duffle Sac (Patricia
    Schneider's 9951, Janice Riccardi-Disanto's 9950, Faith Oliver
    Legrone's 9949, Helen Berg's 9953, Lula Smith's 9952). Color of
    season: Olive.
  - **Sonoma Collection Late Autumn 1994**: nubuc launch in
    Bramble/Chamois/Sage/Sand/Spruce (Backpack 4934, Small Backpack
    4938, Drawstrings 4930/4931, Flap Bag 4935, Bucket Zips
    4932/4933). Holiday Preview 1994 extends to natural-grain
    leather with Buff/Saddle additions. **Sonoma launch year is
    1994**, not 1992-1994 as M3 framing left open.
  - **Limited Editions / Catalogue Exclusive Holiday Preview 1994**:
    8 retro reissues anchored on heritage SKUs (Stewardess 9525,
    Saddle Pouch Lg 9585, Madison Satchel 9765, Carrier Bag 9800)
    + 4 NEW (Bixby 9963, Marshall Pack 9961, Mail Pouch 9962, Cody
    9964). Two exclusive colors: Acorn, Burgundy. Distinct from
    the Holiday 1992 "Retro" prefix Limited Editions per P1 — same
    heritage-revival concept, different naming convention.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream P3 catalog deep-read

### 2026-05-04 — Italian Tumbled Calfskin men's wallets Holiday 1994: first explicit non-American sourcing language

- **Files**: `errata.md`, `authentication/leather.md` (pending),
  `history/timeline.md`, `research/P3-catalogs-1994.md`
- **Was**: Earlier framing treated 1994 as the start of Costa Rica
  handbag offshoring (per existing timeline) but no catalog evidence
  surfaced.
- **Now**: P3 primary-confirms the **Classic Tumbled Calfskin
  Accessories Holiday 1994 launch** [coach-catalogs-1960-1989] —
  men's wallet line (5611, 5612, 5613, 5625, 5626, 5627, 5691, 5692
  — 5600-series) with brand voice: "TEXTURE IS THE FOCUS OF OUR
  NEW Classic Tumbled Calfskin Accessories HANDCRAFTED FROM
  SUPPLE FULL-GRAINED ITALIAN LEATHER... COMBINED WITH FINE European
  construction." **First explicit Italian/European-construction
  language in deep-read corpus** — major departure from the dominant
  1970s-1980s "American leather, American craftsmanship" register.
  Authentication: a vintage Coach men's wallet 5611-5692 series
  carrying Italian-leather identification is era-correct from
  Holiday 1994; Italian sourcing for **handbags** is a separate,
  later development. Adjacent: NO Costa Rica country-of-origin tags
  in any 1994 catalog (catalog descriptions reference leather
  type/treatment but not manufacturing country except for the
  Tumbled Calfskin Italian line).
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream P3 catalog deep-read

### 2026-05-02 — Sheridan Collection launch: Spring 1992 with 15 styles (NOT Fall 1992 with 12)

- **Files**: `models/sheridan-collection.md`,
  `research/P1-catalogs-1992.md`, `errata.md`, supersedes M-main
  framing
- **Was**: Per M's main file Fall Special Edition 1992 deep-read,
  Sheridan launched Fall 1992 with 12 styles. The "New Sheridan
  Styles pages 2-9" Fall 1992 cover was framed as the launch.
- **Now**: P1 primary-confirms Sheridan **launched in
  Spring/Summer 1992** in the previously-undeep-read
  `1992-special-edition.pdf` (cover: "1992 Edition" + "Introducing
  the Sheridan and Dakota Collections pages 4-15") with **at least
  15 NEW styles** — three more than Fall 1992
  [coach-catalogs-1960-1989]. The three Spring 1992 launch styles
  later dropped: **Hollister Tote (4220, $290), Charlotte Satchel
  (4215, $238), Shelby Bag (4213, $216)**. Hollister returned Fall
  1993; Charlotte and Shelby never returned. Coach **trimmed**
  Sheridan from 15→12 styles between Spring 1992 and Fall 1992
  (a launch-year roster contraction). The Fall 1992 "New Sheridan
  Styles" cover language refers to still-recent styles, not a
  launch.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream P1 catalog deep-read

### 2026-05-02 — Dakota Classics Collection: NEWLY DOCUMENTED, Spring 1992

- **Files**: `errata.md`, `research/P1-catalogs-1992.md`, models/
  Dakota entry pending
- **Was**: Dakota Classics not previously documented in archive.
- **Now**: P1 primary-confirms a previously-unknown
  **Dakota Classics Collection** launching alongside Sheridan in
  `1992-special-edition.pdf` (Spring/Summer 1992)
  [coach-catalogs-1960-1989]. Distinguishing features:
  - **"Box-grain" textured cowhide** (vs Sheridan's pebble-textured
    leather)
  - **Magnetic closures** (vs Sheridan's brass turnlock)
  - **Bridle leather trim in Tan**
  - **42XX style number prefix** (overlaps with Sheridan)
  - **7-color palette** identical to Sheridan
  - Brand voice: "an extension of Coach's fifty-year tradition...
    rugged 'box-grain' textured cowhide that will always retain its
    new appearance"
  Dakota does NOT appear in Fall 1992 or Holiday 1992 — likely
  pruned the same season as the three trimmed Sheridan styles.
  Open question: did Dakota survive past 1992?
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream P1 catalog deep-read

### 2026-05-02 — Carriage Classics ≠ Camden Classics — two distinct 1992 sub-lines

- **Files**: `errata.md`, `research/P1-catalogs-1992.md`, models/
  entries pending
- **Was**: Per FundingUniverse Tier 2, "Sheridan and Camden
  collections introduced" in early 1992. Camden was assumed to be
  a single sub-collection.
- **Now**: P1 documents **TWO parallel "Classic Collection
  extension" sub-lines launched in 1992**, both previously
  undocumented in archive [coach-catalogs-1960-1989]:
  - **Carriage Classics (Spring/Summer 1992)**: square patches,
    brass-stud tab with concealed magnetic closure, **exclusive
    colors Sage and Golden Tan**. Styles: Dover Bag 9900 ($228),
    Mulberry Bag 9899 ($196), Chauncey Bag 9897 ($148), Hamilton
    Mini Purse 7237 ($68), Fulton Bag 9898 ($196), Carnegie Clutch
    7236 ($94), Kingston Key Fob 7238 ($21).
  - **Camden Classics (Fall 1992)**: rounded silhouettes, brass
    touch-lock closure, brass-on-leather aesthetic, standard
    Classic palette (Black, British Tan, Burgundy, Forest Green,
    Navy). Styles: Jackson Bucket 9912 ($244), Ashland Bag 9913
    ($190), Pilford Bag 9914 ($250), Branson Bag 9915 ($282),
    zip-around wallet clutch.
  FundingUniverse's "Sheridan and Camden in early 1992" is correct
  about Camden's existence but **wrong about timing** — Camden
  was Fall 1992. FundingUniverse missed Carriage and Dakota
  entirely.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY) overrides
  `fundinguniverse-coach` (Tier 2)
- **Flagged by**: research stream P1 catalog deep-read

### 2026-05-02 — Limited Editions / "Retro" prefix program: Holiday 1992

- **Files**: `errata.md`, `research/P1-catalogs-1992.md`, models/
  affected entries (Stewardess, Pony Express, Saddle Pouch,
  Classic Shoulder Bag) pending update
- **Was**: Coach reissue/heritage program not previously documented;
  no "Retro" prefix in archive vocabulary.
- **Now**: P1 documents **the earliest Coach reissue/heritage
  program in the archive**: **Limited Editions launched Holiday
  1992** (catalog pages 2-7) with explicit "Retro" prefix on six
  styles [coach-catalogs-1960-1989]:
  - Retro Stewardess Bag (9525, $224) — Brass turnlock
  - Retro Pony Express Bag (9670, $204) — Double turnlock
  - Retro Riding Bag Small (9745, $152)
  - Retro Marketing Tote (9651, $322)
  - Retro Classic Shoulder Bag (9170, $178) — 57" adjustable strap
  - Retro Saddle Pouch Large (9505, $254)
  Brand voice: "Many of our original Coach Classics are still
  receiving compliments... we are pleased to offer these six
  classic designs as 'Limited Editions.'" The "Retro" prefix is a
  brand-voice innovation; precedes the Coach Originals re-release
  line by ~12 years. Note: a Holiday 1992 "Retro Stewardess Bag" or
  "Retro Pony Express" with the explicit "Retro" prefix in creed
  would be a distinct dating signal from the original 1970s
  examples.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream P1 catalog deep-read

### 2026-05-02 — West End Lightweights sub-line: Fall 1992

- **Files**: `models/lightweight-collection.md` (pending update),
  `errata.md`, `research/P1-catalogs-1992.md`
- **Was**: West End Lightweights referenced obliquely in M's main
  file but not directly documented.
- **Now**: P1 primary-confirms **West End Lightweights launches
  Fall 1992** as a formal sub-line within the broader Lightweight
  Collection [coach-catalogs-1960-1989]. Brand voice: "The buttery
  softness of our lightweight leather is the focus of our new West
  End handbags and accessories. Ornamentation is dismissed for the
  beauty found in a graceful pleat or simple fold." Launch styles:
  Tribeca Tote 4120 ($182), Terrace Bag 4117 ($206), Riverside Bag
  4118 ($226), Columbus Bag 6129 ($244), Perry Bag 6116 ($144),
  Mini Cosmetic Case 7259 ($36). The "West End Lightweights"
  naming **does not survive into 1994** — the Fall Preview 1993
  Soho Series rename absorbed both Lightweight and West End
  sub-lines.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream P1 catalog deep-read

### 2026-05-02 — "Soho" name first appears in Lightweights 1992 (Bag 4082 in collection narrative)

- **Files**: `models/soho-bag.md`, `models/soho.md`,
  `research/P1-catalogs-1992.md`, `errata.md`
- **Was**: Soho Bag (4082) primary-confirmed Holiday 1991. Earlier
  framing treated 1993-1994 as the period of "Soho" emergence as a
  name.
- **Now**: P1 documents **"Soho" branding already present in
  Lightweights by 1992** [coach-catalogs-1960-1989]: both
  `1992-special-edition.pdf` and Fall 1992 catalog have the
  Lightweight Collection intro narrative explicitly mentioning Soho
  by name: "**Lightweights offer choices from a petite Halsey Bag
  to an extra capacity Soho Bag.**" The Soho Bag at $228 (early
  1992) becomes $246 by Fall 1992. This is the **earliest
  brand-narrative use of "Soho" by name** in the Coach catalog
  archive — predating the formal Soho Series sub-collection rename
  (Fall Preview 1993 per P2). Full evolution:
  - 1991 Holiday: Soho Bag (4082) is one Lightweight style
  - 1992: Soho Bag named in Lightweight collection narrative
  - 1993 Fall Preview: "SOHO SERIES" header — collection rename
  - 1994: NYC SoHo flagship store opens; Coach.com retroactively
    dates Soho introduction to 1994 (incorrect)
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream P1 catalog deep-read

### 2026-05-02 — Travelweave Luggage Collection: Fall 1992

- **Files**: `errata.md`, `research/P1-catalogs-1992.md`, models/
  travel entries pending, supersedes M3 "Travelweave Spring 1995"
- **Was**: Per M3 (1995-1996), Travelweave luggage was framed as
  "debuted Spring 1995."
- **Now**: P1 primary-confirms **Travelweave™ Luggage Collection
  launched Fall 1992** [coach-catalogs-1960-1989], 2.5 years
  earlier than M3 framing. Both Fall 1992 catalog versions show
  cover language "Preview The Travelweave™ Luggage Collection
  pages 68-73." Brand voice: "100% spun nylon Travelweave™ fabric"
  with leather trim, brass details, leather luggage tags, brass
  padlocks. Launch styles: Garment Bag 550 ($476), Medium Duffle
  551 ($290), Large Duffle 552 ($310), Medium Boston 553 ($290),
  Large Boston 554 ($330), 26" Pullman 555 ($400). Travelweave is
  a **luggage-specific** sub-collection distinct from the existing
  Travel Collection (handbag-format travel leather, Holiday 1991
  launch per M's main file).
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream P1 catalog deep-read

### 2026-05-02 — 1992-fall-special-edition-scan.pdf is duplicate of 1992-fall-special-edition.pdf

- **Files**: `errata.md`,
  `sources/primary/catalogs/Archived Vintage Coach Catalogues/`,
  `research/P1-catalogs-1992.md`
- **Was**: Archive treated `1992-fall-special-edition-scan.pdf` and
  `1992-fall-special-edition.pdf` as potentially distinct editions.
- **Now**: P1 confirms they are **content-identical** —
  `1992-fall-special-edition-scan.pdf` is a higher-resolution scan
  (Adobe Acrobat 2022, 32 pages, 1084×1579 pts) of the same
  catalog as `1992-fall-special-edition.pdf` (2021 Preview-
  photographed version, 41 pages, lower-res). Recommendation: use
  the scan version for fully-legible style numbers and prices.
  Combined with prior duplicate findings (1984-fall-winter pair
  byte-identical; 1983-spring pair content-identical;
  1985-summer/1985-fall content-identical), the archive has **4
  documented PDF duplicates** in the corpus.
- **Source**: `coach-catalogs-1960-1989`
- **Flagged by**: research stream P1 catalog deep-read

### 2026-05-02 — Soho Series rename: Fall Preview 1993 (NOT 1994)

- **Files**: `models/soho.md`, `models/lightweight-collection.md`,
  `research/P2-catalogs-1993.md`, `errata.md`,
  supersedes Coach.com brand-published 1994 date
- **Was**: Coach.com brand-published claim that the Soho Collection
  was "first introduced 1994." Cross-reading hypothesis (M3 + M2)
  framed this as the Lightweight Collection rename, with the rename
  expected to land somewhere in 1994.
- **Now**: P2 primary-confirms the **Lightweight → Soho Series rename
  happened in Fall Preview 1993** [coach-catalogs-1960-1989] —
  one full season earlier than Coach.com's claim. The Fall Preview
  1993 catalog includes a discrete sub-collection page header
  reading **"SOHO SERIES"** in the same all-caps display setting
  used for MANHATTAN SERIES, SHERIDAN COLLECTION, BUSINESS
  COLLECTION, and CLASSIC COLLECTION. Holiday Preview 1993 and
  Holiday 1993 catalogs reuse the same "SOHO SERIES" header.
  Coach.com's 1994 date may collapse the rename and the **NYC SoHo
  flagship store opening (1994)** into a single retroactive
  narrative — the Soho rename is older than the Soho store.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY) overrides
  `coach-vintage-soho` (Tier 1 brand-published)
- **Flagged by**: research stream P2 catalog deep-read

### 2026-05-02 — Madison Collection launch: Holiday 1993

- **Files**: `models/madison-collection.md` (NEW),
  `models/madison-satchel.md`, `research/P2-catalogs-1993.md`,
  `errata.md`
- **Was**: Madison Collection sub-line introduction year imprecise;
  M3 documented it in 1995-1996 Source Book without pinning
  launch year.
- **Now**: P2 primary-confirms **Madison Collection launches in
  Holiday 1993 catalog** as a wholly new sub-collection (catalog
  pages 68-72) with **limited distribution** ("items available
  through mail order and select Coach stores")
  [coach-catalogs-1960-1989]. Launch specs:
  - **Dedicated 4400-series numbering** (4400-4409 at launch)
  - **"Specially developed textured leather"** — distinct from
    Classic glove-tanned cowhide and Sheridan pebble-textured
  - **Exclusive palette** (7 colors): Beechnut, Black, Cherry,
    Fern, Ivory, Maple, Navy
  - **Solid brass closures**, **jacquard lining**
  - Brand voice: "THE MADISON COLLECTION COMBINES SLEEK
    SOPHISTICATION WITH CLASSIC STYLE AND GRACE..."

  Should NOT be confused with the **Madison Satchel (Style 9725)**
  — a Classic-line single model from Spring 1986, ~7 years pre-
  Madison-Collection. The "Madison" name was reused across multiple
  distinct Coach products.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream P2 catalog deep-read

### 2026-05-02 — Willis (9927) debut: Fall Preview 1993 (CONFIRMED)

- **Files**: `models/willis.md`,
  `research/P2-catalogs-1993.md`, `errata.md`
- **Was**: Per O3, Willis launch window narrowed to "1991+ or silent
  late-1989 add"; Tier 3 community framing was "early 1980s"
  (off by ~10 years).
- **Now**: P2 **primary-confirms Willis Bag 9927 launches Fall
  Preview 1993** at $242, listed as "NEW"
  [coach-catalogs-1960-1989]. Launch palette: Black, Bottle Green,
  British Tan, Butterscotch, Mahogany, Navy, Red, Stone (8
  colors). Cover line "PREVIEW NEW CLASSIC STYLES PAGES 44-65"
  treats Willis as one of **five Fall Preview 1993 Classic NEW
  launches** alongside The Sling 9929 ($222), Lewiston Bag 9931
  ($178), Chadwick Satchel 9928 ($234), Murphy Bag 9930 ($182).
  This **definitively closes the Willis-introduction question** —
  off by 12 years from "early 1980s" community claim.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream P2 catalog deep-read

### 2026-05-02 — Manhattan Series palette transformation between Spring 1993 and Fall Preview 1993

- **Files**: `models/manhattan-lightweights.md` (pending update),
  `research/P2-catalogs-1993.md`, `errata.md`
- **Was**: Manhattan Lightweights launch palette (Spring 1993 per
  M's main file): Buff, Celadon, Terracotta, Blue, Black —
  pastel/spring framing.
- **Now**: P2 documents **Manhattan Series palette completely
  transformed for Fall Preview 1993** [coach-catalogs-1960-1989]:
  Buff/Celadon/Terracotta/Blue/Black (Spring) → **Black, Bottle
  Green, Butterscotch, Mahogany, Navy** (Fall Preview 1993). All
  five Spring-launch colors are gone; the Fall palette is entirely
  different. **No silhouette changes** — just a wholesale palette
  swap. Holiday Preview 1993 and Holiday 1993 retain the Fall
  palette. Manhattan prices also rose $4-$6 per style across the
  season.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream P2 catalog deep-read

### 2026-05-02 — Color Purple introduced Holiday Preview 1993

- **Files**: `colors/index.md` (pending update),
  `research/P2-catalogs-1993.md`, `errata.md`
- **Was**: Coach color Purple not previously documented in archive.
- **Now**: P2 primary-confirms **Color Purple introduced Holiday
  Preview 1993 across the Classic Collection**
  [coach-catalogs-1960-1989]. Brand voice: "THIS HOLIDAY SEASON,
  THE CLASSICS ARE UPDATED WITH FIVE NEW SILHOUETTES AND THE
  INTRODUCTION OF THE COLOR PURPLE." Photographed on Everett Bag
  9934, Hadley Zip 9935, Casey Bag 9923. Documented in color
  rosters of Becket Zip 9920, Kimball Zip 9911, Casey Bag 9923,
  Station Bag 5130, The Sling 9929, Classic Key Fob 7210, Swing
  Wallet 4843, Mini Belt Bag 9826.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream P2 catalog deep-read

### 2026-05-02 — 11 NEW Classic Collection silhouettes across 1993 fall/holiday

- **Files**: `models/willis.md`,
  `models/` (10 other entries pending), `research/P2-catalogs-1993.md`,
  `errata.md`
- **Was**: Earlier framing assumed steady Classic Collection
  expansion across 1989-1996.
- **Now**: P2 documents **eleven NEW Classic Collection silhouettes
  across the 1993 fall/holiday season** [coach-catalogs-1960-1989]
  — the **largest single-season Classic Collection introduction
  wave in the deep-read corpus** to date:

  Fall Preview 1993 (5 NEW): The Sling 9929, Lewiston Bag 9931,
  Chadwick Satchel 9928, **Willis Bag 9927**, Murphy Bag 9930

  Holiday Preview 1993 (5 NEW): Mitchell Zip 9938, Ritchie Bag
  9937, Carson Zip 9939, Everett Bag 9934, Hadley Zip 9935

  Holiday 1993 (1 NEW additional): Bradley Bucket 9936

- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream P2 catalog deep-read

### 2026-05-02 — Sheridan Collection mature roster: 14 bags + 8 SLG by Holiday 1993

- **Files**: `models/sheridan-collection.md` (pending update),
  `research/P2-catalogs-1993.md`, `errata.md`
- **Was**: Per M's main file, Sheridan launched Fall 1992 with 12
  styles; Stewart Bag 4231 added Fall 1993.
- **Now**: P2 documents **Sheridan growth from launch to mature
  roster** across 1993: **14 bags + 8 SLG by Holiday 1993**
  [coach-catalogs-1960-1989]. Additions across Fall Preview /
  Holiday Preview / Holiday 1993:
  - Bags: Roswell Satchel 4228 ($288), Darcey Drawstring 4229
    ($274), Stewart Bag 4231 ($224), Sheffield Bucket 4232 ($248),
    Wendell Tote 4233 ($310), Glenwood Bag 4225 ($258), Wilmington
    Satchel 4227 ($288)
  - SLG: Sheridan Cosmetic Case 4308 ($48), Sheridan French Purse
    4302 ($148), Sheridan Compact Purse 4300 ($140), Sheridan
    Credit Card Case 4304 ($60), Sheridan Checkbook Case 4307
    ($96), Sheridan Checkbook Wallet 4301 ($184), Sheridan
    Organizer 4306 ($192), Sheridan Key Fob 4305 ($18)
  - Carryovers: Monticello 4226, Mayfield 4224, Marietta
    Drawstring 4219, Hollister Tote 4220, Richmond Bag 4209,
    Charleston Bag 4217
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream P2 catalog deep-read

### 2026-05-02 — Camden Collection NOT in 1993 — must be 1994+

- **Files**: `errata.md`, `research/P2-catalogs-1993.md`
- **Was**: Per FundingUniverse Tier 2 source, "Sheridan and Camden
  collections introduced" together in early 1992. Sheridan
  primary-confirmed Fall 1992 (per M's main file). Camden never
  appeared in any deep-read catalog (1981-1993).
- **Now**: P2 confirms **Camden Collection is NOT in any 1993
  catalog** [coach-catalogs-1960-1989]. Combined with N1-N4 + O1-O3
  earlier negative evidence, Camden must be **1994+** — contradicting
  FundingUniverse's "early 1992" alongside Sheridan. The Camden
  question is now: did it ever launch (was FundingUniverse just
  wrong), or is it a 1994+ launch that 1994 deep-read needs to
  confirm? Open verification item for the 1994 P3 follow-up.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY) overrides
  `fundinguniverse-coach` (Tier 2)
- **Flagged by**: research stream P2 catalog deep-read

### 2026-05-02 — Forest Green and Bottle Green coexist as distinct 1993 colors

- **Files**: `colors/forest-green.md`, `colors/bottle-green.md`
  (pending), `research/P2-catalogs-1993.md`, `errata.md`
- **Was**: Forest Green primary-confirmed Fall 1989 debut (per M2);
  Bottle Green status not previously documented.
- **Now**: P2 documents **Forest Green and Bottle Green coexist as
  distinct colors in 1993 catalogs** [coach-catalogs-1960-1989].
  Forest Green is **wallet-only** by 1993; Bottle Green is the
  handbag color. The two are not synonyms or alternative names —
  they are parallel Coach colors with different deployment.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream P2 catalog deep-read

### 2026-05-02 — Mocha retired from Classic handbags by 1993; persists in SLGs

- **Files**: `colors/index.md`, `research/P2-catalogs-1993.md`,
  `errata.md`
- **Was**: Per O3, Mocha + Mahogany coexist 1988-1990; Mocha drops
  begin late 1990 SKU-by-SKU.
- **Now**: P2 confirms **Mocha is fully retired from Classic
  handbags by 1993** but **persists in SLGs** (Style 4795, 5220,
  7213) [coach-catalogs-1960-1989]. The Mocha→Mahogany
  handbag-line transition completed between Fall 1990 (Mocha still
  there per O3) and Fall Preview 1993 (Mocha absent from Classic
  handbags). The Mocha-in-SLGs continuity is a documented Coach
  pattern: phasing colors out at the handbag level while retaining
  them on smaller leather goods.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream P2 catalog deep-read

### 2026-05-02 — "Lightweight leather" descriptor persists through Early Autumn 1994

- **Files**: `models/lightweight-collection.md`, `models/soho.md`,
  `research/P3-catalogs-1994.md` (partial), `errata.md`
- **Was**: Cross-reading hypothesis (M2 + M3) suggested the Soho
  Collection (1994 per Coach.com) was the rename of the Lightweight
  Collection. The exact rename moment within 1994 was open.
- **Now (PARTIAL FINDING)**: Through **Early Autumn 1994 (page 32)**,
  Coach catalog body copy still uses "**lightweight leather**" as
  the material descriptor for both **Light Tote 4065** and **Mini
  Cosmetic Case 7239** [coach-catalogs-1960-1989]. **The Lightweight
  → Soho rename had NOT happened by Early Autumn 1994** — this
  pushes the rename window later than originally hypothesized,
  potentially landing in **1994-late-autumn**, **1994-holiday-preview**,
  **1994-holiday**, or **Spring 1995 Preview** ("Five New Soho
  Styles" cover banner per M3). The 1994 P3 deep-read is partial
  (only Early Autumn captured); the rest of 1994 needs follow-up
  to pin the exact rename moment.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream P3 catalog deep-read (PARTIAL)

### 2026-05-02 — Willis (9927) debut: 1991 (NOT early 1980s)

- **Files**: `models/willis.md`,
  `research/O3-catalogs-1988-1990.md`, `errata.md`, supersedes Tier 3
  community "early 1980s" framing
- **Was**: Earlier archive framing per Tier 3 community sources
  (yourgreatfinds, vintagecoachie, coachbagrehab) placed Willis
  9927 in "early 1980s" — assumed pre-1985 introduction.
- **Now**: Negative-evidence elimination across **24+ catalogs
  spanning 10 years (1981-1990)** confirms Willis is **absent from
  every catalog read**:
  - N1: Willis absent from Fall 1981, Spring/Summer 1982, Fall
    1982
  - N2: Willis absent from Spring 1983, Spring-2 1983, Fall 1983
  - N3: Willis absent from Spring 1984, Fall-Winter 1984
  - M1: Willis absent from Spring 1985, Summer 1985, Winter 1985
  - O1: Willis absent from Spring 1986, Summer 1986, Fall 1986,
    Winter 1986
  - O2: Willis absent from Early Spring 1987, Spring 1987, Early
    Summer 1987, Early Fall 1987, Holiday 1987
  - O3: Willis absent from 1988 Holiday, 1990 Fall, 1990 Holiday,
    1990 Winter Preview
  - M2: Willis NOT in Spring 1989 main Classics roster
  - First documented primary appearance: **Holiday 1991** (per M's
    main file)
  Willis launched **1991**, contemporary with the Travel Collection
  (Holiday 1991 launch). The Tier 3 "early 1980s" community framing
  is decisively wrong — off by ~10 years.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY) overrides
  Tier 3 community sources
- **Flagged by**: research streams N1, N2, N3, M1, O1, O2, O3
  cross-cut

### 2026-05-02 — Soho Bag (4082) launch year: 1991 (NOT 1990 as hypothesized)

- **Files**: `models/soho-bag.md`, `models/soho.md`,
  `research/O3-catalogs-1988-1990.md`, `errata.md`
- **Was**: Soho Bag launch window narrowed to "between Fall 1989
  and Holiday 1991" with 1990 hypothesized as most likely launch
  year.
- **Now**: O3 confirms **Soho Bag (Style 4082) absent from all four
  1988 Holiday + 1990 Fall + 1990 Holiday + 1990 Winter Preview
  catalogs**. The 1990 Fall Lightweight roster covers 4011-4023 +
  4040/4055/4065/4070/4075/4080/4095/4110 with **no 4082**. Soho
  Bag launch year is **1991**, not 1990. First primary appearance:
  Holiday 1991 catalog page 22 at $228. Window narrows to "between
  1990 Winter Preview and Holiday 1991." Confidence promoted from
  `likely` to `confirmed`.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream O3 catalog deep-read

### 2026-05-02 — Mocha + Mahogany coexist 1988-1990 (NOT clean replacement)

- **Files**: `colors/index.md` (pending update),
  `research/O3-catalogs-1988-1990.md`, `errata.md`, supersedes N4
  framing
- **Was**: Per N4 cross-cut, "Mocha → Mahogany transition year is
  open; specific year between 1985 and 1989 not yet pinned"
  implied a single replacement year.
- **Now**: O3 documents **Mocha + Mahogany BOTH coexist** throughout
  1988-1990 Classic Colors palette [coach-catalogs-1960-1989].
  N4's "1989 replacement" assumption is INCORRECT. Mocha drops are
  **gradual, SKU-by-SKU, beginning late 1990** — not a single
  palette-year transition. The Mocha→Mahogany shift is a multi-year
  gradual phase-out across 1988-early-1990s, not a clean swap year.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream O3 catalog deep-read

### 2026-05-02 — Springlock closure debuts Fall 1990

- **Files**: `authentication/hardware.md` (pending update),
  `history/timeline.md`, `research/O3-catalogs-1988-1990.md`,
  `errata.md`, supersedes earlier framing
- **Was**: Springlock closure documented in Holiday 1991 catalog
  Court Bag specs (per M's main file); introduction year imprecise.
- **Now**: O3 primary-confirms **Springlock closure as a 1990 Fall
  design innovation** [coach-catalogs-1960-1989]. First
  implementations: **9853 Binocular Bag**, **9886 Avenue Bag**, then
  **9826 Mini Belt Bag**. Authentication implication: a Coach bag
  with a Springlock closure should NOT predate Fall 1990; pre-1990
  bags use turnlock, magnetic snap, zipper, or drawstring closures.
  The Springlock joins the brass turnlock (Cashin 1964 patent) as
  a Coach signature mechanism. Updates `authentication/hardware.md`
  closure-family inventory and pre-1990 era diagnostics.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream O3 catalog deep-read

### 2026-05-02 — 50-year anniversary anchor: "six craftspeople" Fall 1990

- **Files**: `history/timeline.md`,
  `research/O3-catalogs-1988-1990.md`, `errata.md`
- **Was**: Earlier framing relied on the Winter 1986 Frankfort
  letter's "six skilled leather workers" as the sole primary
  anchor for the founding-team size.
- **Now**: O3 corroborates with the 1990 Fall catalog primary copy:
  "Fifty years ago, we began making leather bags, belts and
  billfolds in a small workshop where **six craftspeople** created
  each piece by hand" [coach-catalogs-1960-1989]. Two independent
  brand-published primary anchors (1986 + 1990) confirm the
  six-founder team size with consistent number, gender language
  updated ("craftspeople" vs "skilled leather workers"). The
  "fifty years ago" framing in 1990 is loose-rounded against the
  canonical 1941 founding date — consistent with prior anniversary
  framing looseness.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream O3 catalog deep-read

### 2026-05-02 — First hard-sided briefcase: Coach Attache Holiday 1990

- **Files**: `models/` (Coach Attache entry pending),
  `history/timeline.md`, `research/O3-catalogs-1988-1990.md`,
  `errata.md`
- **Was**: Coach Attache and hard-sided briefcase line not
  previously documented in archive.
- **Now**: 1990 Holiday catalog primary: "**THIS SEASON, COACH
  INTRODUCES ITS FIRST HARD-SIDED BRIEFCASE.** THE COACH ATTACHE'S
  WELL THOUGHT-OUT DESIGN... HOLLOWED WOOD FRAME... LINED IN
  SUEDED PIGSKIN" [coach-catalogs-1960-1989]. Coach Attache styles
  **5410 ($520) and 5405 ($474)** debut. First non-soft-construction
  briefcase in Coach catalogs. Per M3 (1995-1996), the **5410 4"
  Attache** ($632 by 1996-1997 Source Book) continues as a
  briefcase-line staple.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream O3 catalog deep-read

### 2026-05-02 — Spectator Cocoa-trim sub-line debuts Holiday 1990

- **Files**: `models/spectator-collection.md` (pending update),
  `research/O3-catalogs-1988-1990.md`, `errata.md`
- **Was**: Spectator Collection documented as Tabac trim at Fall
  1989 launch (per M2) transitioning to British Tan trim by Holiday
  1991 (per M's main file).
- **Now**: O3 documents the missing intermediate step: **Cocoa-trim
  Spectator sub-line debuts Holiday 1990** with styles **6018,
  6021, 6022** alongside the continuing Tabac mainline
  [coach-catalogs-1960-1989]. Spectator now offered in both Tabac
  and Cocoa trim variants — a sub-line within the sub-collection.
  The Tabac → British Tan trim transition therefore happened
  between Fall 1990 (Tabac confirmed in 1990 Fall) and Holiday
  1991 (British Tan confirmed). Adjacent: 1990 Fall first
  identifies **White as the newest Coach color** offered with
  Tabac trim on Spectator.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream O3 catalog deep-read

### 2026-05-02 — "Classic Collection" header first appears Holiday 1990

- **Files**: `research/O3-catalogs-1988-1990.md`, `errata.md`,
  supersedes N4 framing
- **Was**: Per N4 cross-cut, sub-collection branding was framed as
  emerging only with Lightweight Collection Early Summer 1987
  (per O2) and 1989+ named launches.
- **Now**: O3 documents the **"Classic Collection" name itself
  first appearing in 1990 Holiday catalog** with ALL CAPS header:
  "THE CLASSIC COLLECTION IS THE HEART OF WHAT COACH STANDS FOR.
  NATURALLY TANNED COWHIDE." [coach-catalogs-1960-1989]. Pre-1990
  catalogs (per N4 + O1 + O2) did NOT have a named "Classic
  Collection" header — bags were just "Coach bags." The
  sub-collection architecture **crystallizes 1990 Holiday with a
  4-tier ALL CAPS structure**: Business, Spectator, Lightweight,
  Classic Collection.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream O3 catalog deep-read

### 2026-05-02 — Lightweight Collection debut: Early Summer 1987 (NOT Spring 1989+)

- **Files**: `models/lightweight-collection.md`,
  `research/O2-catalogs-1987.md`, `history/timeline.md`, `errata.md`,
  supersedes M2 framing
- **Was**: Per M2 (1989 catalog deep-read), the Lightweight
  Collection was framed as "fully established by Spring 1989 with
  14+ styles, suggesting prior launch" — exact debut year was
  open. Earlier archive framing said "established by Spring 1989."
- **Now**: O2 primary-confirms the actual debut: **Coach
  Lightweights Collection launches in the Early Summer 1987
  catalog** with **10 new 4XXX styles** (4010 Drawstring Sac
  Large, 4015 Drawstring Sac Medium, 4020 Drawstring Sac Small,
  4025 Shoulder Pouch, 4030 Drawstring Tote, 4040 Swinger, 4050
  Shoulder Bag, 4055 Soft Satchel, 4060 Soft Satchel Large, 4065
  Light Tote) and a **dedicated 11-color palette specially
  developed for the line** (Taupe, Saddle, Buckskin, Bone, Khaki,
  Honey, Cocoa, Wine, Blue, Red, Black) [coach-catalogs-1960-1989].
  This is the **first sub-collection in Coach catalog history with
  its own distinct palette** — a major architectural move 18
  months before the 1989+ collection-diversification era. Spring
  1989's 14+ styles is the result of ~2 years of growth, not a
  debut.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream O2 catalog deep-read

### 2026-05-02 — Willis (9927) window narrowed to 1988+

- **Files**: `models/willis.md`,
  `research/O2-catalogs-1987.md`, `errata.md`
- **Was**: Per O1, Willis introduction window narrowed to 1987-1988.
- **Now**: O2 primary-confirms **Willis is absent from all five
  1987 catalogs** (Early Spring, Spring, Early Summer, Early Fall,
  Holiday). Window narrows further to **1988 or early 1989**.
  Cumulative: Willis 9927 absent from **19 catalogs across 7 years
  (1981-1987)** per N1, N2, N3, O1, O2. The 1988 Holiday + 1990
  deep-reads (O3, in progress) will pin the exact debut.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream O2 catalog deep-read

### 2026-05-02 — Catalog cadence increased to 5 issues/year by 1987

- **Files**: `history/timeline.md`,
  `research/O2-catalogs-1987.md`, `errata.md`
- **Was**: Earlier framing assumed steady catalog cadence across
  1981-1989.
- **Now**: 1981-1984 catalogs ran 2-3 issues/year (Spring/Fall ±
  Summer or Winter). By 1987, Coach is publishing **5 catalogs per
  year**: Early Spring, Spring, Early Summer, Early Fall, Holiday
  [coach-catalogs-1960-1989]. The "Early X" naming convention is
  new in 1987. The cadence increase reflects post-Sara-Lee
  operational rhythm.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream O2 catalog deep-read

### 2026-05-02 — City Bag SKU swap within 1987: 9785 → 9790

- **Files**: `models/` (City Bag entry pending), `errata.md`,
  `research/O2-catalogs-1987.md`
- **Was**: City Bag (9790) appeared in Spring 1989 (per M2);
  introduction year tentative pre-1989.
- **Now**: O2 documents same-year SKU renumbering: **City Bag
  debuts as Style 9785 in Early Spring 1987** (NEW), then
  **renumbered to 9790 in Spring 1987**. The abandoned 9785 SKU
  is **reassigned to the new "Zipper Tote"** by Early Summer 1987
  [coach-catalogs-1960-1989]. Authentication implication: a 1987
  "City Bag" with the 9785 number is correct for a brief window;
  not a fake. Similar same-year naming flux: SKU **9800** =
  "Musette Bag Large" Early Fall 1987 → "Carrier Bag" Holiday 1987.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream O2 catalog deep-read

### 2026-05-02 — Madison Satchel debut: Spring 1986 (NOT 1990s)

- **Files**: `models/madison-satchel.md`,
  `research/O1-catalogs-1986.md`, `history/timeline.md`, `errata.md`
- **Was**: Madison Satchel earlier framed as a 1990s+
  Madison-Collection-line model; introduction year tentative.
- **Now**: Spring 1986 catalog primary-confirms **Madison Satchel
  (Style 9725) as NEW at $104** on the "Additions to Our Collection"
  page [coach-catalogs-1960-1989]. The Madison Satchel as a
  Classic-line single model (9XXX prefix) is a **1986 introduction**,
  ~5 years before the Madison Collection sub-line (which uses 4XXX
  prefix and is documented in 1995-1996 Source Book per M3). The
  "Madison" name was reused across multiple products.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream O1 catalog deep-read

### 2026-05-02 — Willis (9927) debut window narrowed: 1987-1988

- **Files**: `models/willis.md`, `errata.md`,
  `research/O1-catalogs-1986.md`
- **Was**: Willis introduction window 1985-1988 (per N1-N4
  primary-confirmed absence from 1981-1984).
- **Now**: O1 confirms **Willis is absent from all four 1986
  catalogs** (Spring, Summer, Fall, Winter). Window narrows to
  **1987-1988**. The 1987 (5 catalogs) and 1988 (Holiday only in
  archive) deep-reads will pin the exact debut.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream O1 catalog deep-read

### 2026-05-02 — 45th Anniversary 1986 — first Coach president signature

- **Files**: `history/timeline.md`,
  `research/O1-catalogs-1986.md`, `errata.md`
- **Was**: Coach catalog brand voice 1981-1985 was uniformly
  unsigned/corporate; no individual leader names appeared in catalog
  copy.
- **Now**: **Winter 1986 catalog opens with a signed letter from
  Lew Frankfort, President** — the first president signature in
  the deep-read corpus [coach-catalogs-1960-1989]. The letter is
  the first 45th Anniversary marketing moment and primary-confirms
  three foundational data points:
  - **"Six skilled leather workers"** — first primary anchor for
    the 1941 founding team size
  - **"Over 250 of us"** — first primary-source 1986 Coach
    headcount
  - **"True American Classics"** branding elevation
  - **No mention of Sara Lee** — brand voice continues presenting
    Coach Leatherware Company as standalone identity 18 months
    post-acquisition
  Adjacent 1986 anniversary moves: "45 years" framing first appears
  Summer 1986 (replacing earlier "since 1941" / "forty years"
  looseness); the 45-year mark is the first explicitly-marketed
  anniversary in Coach catalogs (40 years in 1981 was treated
  silently per N4).
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream O1 catalog deep-read

### 2026-05-02 — Coach gloves Winter 1986: first non-USA Coach products

- **Files**: `authentication/country-of-origin.md` (pending update),
  `history/timeline.md`, `research/O1-catalogs-1986.md`, `errata.md`
- **Was**: Earlier archive framing treated Costa Rica handbag
  offshoring (1994) as the first Coach offshore production; "Coach
  was always made in USA" pre-1994 was a partial folklore.
- **Now**: **Coach leather gloves debut Winter 1986** —
  manufactured in **Hungary** using **European lambskin**
  [coach-catalogs-1960-1989]. **The first Coach products
  manufactured outside the USA** predate handbag offshoring by
  **8 years**. Authentication implications: a "Coach made in
  Hungary" stamp is era-correct for gloves (and possibly other
  non-handbag accessories) from Winter 1986 onward, even though
  handbags continued USA-made through 1994. Updates the folklore
  pattern about country-of-origin diagnostics.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream O1 catalog deep-read

### 2026-05-02 — Stitch count: 12 SPI (1985) → 14 SPI (Winter 1986)

- **Files**: `authentication/stitching.md` (pending update),
  `research/O1-catalogs-1986.md`, `errata.md`, supersedes M1
- **Was**: Per M1, 12 SPI was primary-anchored from 1985 catalogs
  as the canonical Coach stitch density.
- **Now**: **Winter 1986 catalog primary-revises stitch count to 14
  stitches per inch** [coach-catalogs-1960-1989]. Brand-published
  spec change between 1985 and Winter 1986. Authentication SPI
  ranges should account for the 1985→1986 boundary:
  pre-Winter-1986 examples ~12 SPI; post-Winter-1986 examples ~14
  SPI. The 1985 SPI anchor (M1) and the 1986 SPI anchor (O1) are
  both correct for their respective windows.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream O1 catalog deep-read

### 2026-05-02 — Saddle retired, Grey added Spring 1986 — palette evolution

- **Files**: `colors/index.md` (pending update),
  `history/timeline.md`, `errata.md`
- **Was**: Palette transitions documented Sage→Bone (between
  Fall-Winter 1984 and Spring 1985 per N4).
- **Now**: O1 documents the **next palette swap**: Saddle retired,
  **Grey added** between Winter 1985 and Spring 1986
  [coach-catalogs-1960-1989]. Cumulative palette transitions:
  - Fall-Winter 1984 → Spring 1985: Sage retired, Bone added
  - Winter 1985 → Spring 1986: Saddle retired, Grey added
  - 1986: Mocha persists, **Mahogany still absent**
  - Mahogany debut: 1987 or 1988 (window narrowed; absent from 1986)
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream O1 catalog deep-read

### 2026-05-02 — Brand voice "since 1941" locked-in Fall 1981 — Sara Lee inherited

- **Files**: `history/timeline.md`, `research/N1-catalogs-1981-1982.md`,
  `research/N4-cross-cut-1981-1984.md`, `errata.md`
- **Was**: Earlier framing assumed the "small family owned company
  since 1941" voice was a Sara Lee preservation choice — implying
  the voice could have been authored or refined under Sara Lee.
- **Now**: Primary catalog evidence shows the voice was **locked-in
  by Fall 1981** [coach-catalogs-1960-1989] and preserved verbatim
  across all subsequent Cahn-era catalogs (1981 Fall, 1982 S/S,
  1982 Fall, 1983 Spring, 1983 Fall, 1984 Spring, 1984 Fall-Winter)
  before being inherited by the post-Sara-Lee team in Spring 1985
  and Winter 1985. **Sara Lee inherited the voice; they did not
  author or refine it.** This reframes the brand-voice continuity
  question.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream N1 catalog deep-read

### 2026-05-02 — School Bag (9695) rename: 1984, NOT Winter 1985

- **Files**: `errata.md`, `history/timeline.md`,
  `research/N3-catalogs-1984.md`, supersedes prior M1 framing
- **Was**: Per M1 (research stream M1, 1985 catalogs deep-read), the
  "Handle Shoulder Bag" → "School Bag" rename was attributed to
  Winter 1985 (Sara-Lee-era).
- **Now**: Fall-Winter 1984 catalog already labels Style 9695 as
  **"School Bag"** at $144 [coach-catalogs-1960-1989]. The rename
  happened **between Spring 1984 and Fall-Winter 1984** —
  Cahn-era, not Sara-Lee-era. M1 framing superseded.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream N3 catalog deep-read

### 2026-05-02 — Willis (9927) introduction: post-1984, NOT "early 1980s"

- **Files**: `models/willis.md`, `errata.md`,
  `research/N1-catalogs-1981-1982.md`, `research/N3-catalogs-1984.md`
- **Was**: Willis introduction tagged "early 1980s, tentative" per
  Tier 3 community sources (yourgreatfinds, vintagecoachie,
  coachbagrehab).
- **Now**: Willis (Style 9927) is **absent from all 1981, 1982,
  1983, 1984 catalogs** [coach-catalogs-1960-1989]. The 9927 number
  is not in active use in any of these years. Willis must be
  **post-Fall 1984**. Updated framing: "post-1984, exact debut TBD
  between 1985 and 1988" — narrows the window by 4-5 years and
  contradicts the Tier 3 "early 1980s" community claim.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY) overrides
  Tier 3 community sources
- **Flagged by**: research streams N1 and N3 catalog deep-reads

### 2026-05-02 — Retail network built 1982-1984 under Cahn ownership

- **Files**: `history/timeline.md`,
  `research/N4-cross-cut-1981-1984.md`, `errata.md`
- **Was**: Sara Lee acquired Coach with "6 boutiques" per archive
  timeline; date of each store opening was undocumented.
- **Now**: Primary catalog evidence pins the buildout:
  - **1981-1982**: NO retail stores listed; mail-order-only via
    516 W 34th St NYC
  - **Spring 1983**: 3 U.S. stores listed (NYC Madison Ave,
    Wisconsin Ave DC, Olympic Hotel Seattle) + Paris reference
    without street address; "Coach Stores will soon open" in SF +
    Boston
  - **Spring 1984**: Full 6-store network (Paris Rue Jacob, NYC
    Madison, DC, Seattle, SF, Boston)
  - **Spring 1985 (M1)**: same 6 stores
  - The 6-boutique footprint Sara Lee acquired in July 1985 was
    **fully built under Cahn ownership** and stable for at least
    16 months prior. Paris (international) opened between Fall
    1983 and Spring 1984.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research streams N1, N2, N3 catalog deep-reads

### 2026-05-02 — Anti-counterfeiting messaging emerged Spring 1984 (Cahn-era)

- **Files**: `history/timeline.md`,
  `research/N3-catalogs-1984.md`, `errata.md`, supersedes prior M1
  framing
- **Was**: Per M1, "It's Not A Coach® Bag Without The Coach® Tag"
  anti-counterfeiting messaging tagged to Spring 1985.
- **Now**: Spring 1984 catalog primary-confirms the messaging
  ~16 months earlier [coach-catalogs-1960-1989]. The
  brand-protection posture is a **Cahn-era development**, not a
  Sara-Lee-era addition.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream N3 catalog deep-read

### 2026-05-02 — 9170 Classic Shoulder Bag: "the first bag we ever made"

- **Files**: `models/classic-shoulder-bag.md`, `history/timeline.md`,
  `research/N3-catalogs-1984.md`, `research/M2-catalogs-1989.md`,
  `errata.md`
- **Was**: 9170 Classic Shoulder Bag not previously documented in
  archive as a foundational silhouette.
- **Now**: Two reinforcing brand-published primary anchors:
  - **Spring 1984**: 9170 is "**the first bag we ever made**" in
    unlined-outside-seam construction [coach-catalogs-1960-1989]
  - **Spring 1989**: "**the original Coach bag**" with "After more
    than two decades, women still regard this bag — the original
    Coach bag — as an essential part of their Coach collection"
    [coach-catalogs-1960-1989]
  - Cross-validated, the 9170's introduction is firmly **pre-1969**,
    within the Cashin period (1962-1968 likely). Cashin authorship
    is `tentative` until UCLA Cashin papers can confirm.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research streams N3 and M2 cross-reading

### 2026-05-02 — Cashin NEVER named in 1981-1984 catalogs

- **Files**: `research/N4-cross-cut-1981-1984.md`,
  `models/` (Cashin-attributed silhouettes — verify framing),
  `errata.md`
- **Was**: Folklore claim that mid-1980s Coach marketing credited
  Cashin by name in catalog copy.
- **Now**: **Cashin is NOT named in any 1981, 1982, 1983, or 1984
  Coach catalog** despite her silhouettes dominating the product
  line (Dinky, Saddle Pouch, Compact Pouch, Musette, Duffle Sac,
  Companion, Stewardess, Pony Express, etc., all in catalog 7-10
  years post-Cashin). The 1981 Fall catalog uses the anonymous
  anchor "many of them were first introduced almost fifteen years
  ago" (~1966-1967, the Cashin period) without naming her. This is
  important counter-evidence to folklore that mid-1980s Coach
  credited Cashin in marketing copy.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research streams N1, N2, N3 cross-reading

### 2026-05-02 — Coach Color Palette card: predecessor was free swatches

- **Files**: `errata.md`, `colors/index.md` (pending update),
  supersedes prior M1 framing
- **Was**: Per M1, the Coach Color Palette card was a 1985 catalog
  product framed as a new offering.
- **Now**: 1981 Fall, 1982 S/S, 1982 Fall catalogs all offer "**an
  actual set of leather swatches can be had for the asking**" —
  a **free swatch service** [coach-catalogs-1960-1989]. The 1985
  paid Color Palette card was a **commercialization of an
  already-existing free service**, not a new offering.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream N1 catalog deep-read

### 2026-05-02 — 1984 fall-winter PDF duplicate; 1983 spring duplicate

- **Files**: `sources/primary/catalogs/Archived Vintage Coach Catalogues/`,
  `errata.md`
- **Was**: Archive treated 1984-fall-winter and 1984-fall-winter-2
  as potentially distinct editions; same for 1983-spring and
  1983-spring-2.
- **Now**: Both pairs are duplicates:
  - **1984-fall-winter.pdf and 1984-fall-winter-2.pdf** are
    **byte-identical** (same MD5: 155a5864cf5e8cb570eb88d59ba070bc;
    same byte count 2,154,501). Literally the same file twice.
    Stronger duplicate than the 1985 pair.
  - **1983-spring.pdf and 1983-spring-2.pdf** are content-identical
    (same edition, two physical copies scanned). The "-2" file is
    a marginally cleaner scan with "Shared with love by Gabi"
    watermark and faint pencil owner annotations. Different file
    hashes, same content.
  - Combined with the earlier 1985-summer/1985-fall content
    duplicate, the archive has **3 documented PDF duplicates** in
    the corpus.
- **Source**: `coach-catalogs-1960-1989`
- **Flagged by**: research streams N2, N3 catalog deep-reads

### 2026-05-02 — Soho Collection = renamed Lightweight Collection (not a new line)

- **Files**: `models/soho.md`, `models/lightweight-collection.md`,
  `models/soho-bag.md`, `errata.md`
- **Was**: Soho Collection treated as a new 1994 line; Lightweight
  Collection treated as a separate, earlier line; both running in
  parallel.
- **Now**: Cross-reading 1989-1996 primary catalogs reveals **Soho
  Collection (1994 per Coach.com) is the renamed Lightweight
  Collection (active 1989+)**. Same line, different name across
  catalog years:
  - Pre-Spring 1989: "Lightweight Collection" with 14+ styles, 4XXX
    prefix
  - Holiday 1991: "Lightweight Collection" with 10 styles including
    Soho Bag 4082
  - Spring 1993: "Lightweight Collection" expansion (5 new styles)
  - 1994: Coach.com's "Soho introduced" date = rename moment
  - Spring 1995 Preview: cover banner "Five New Soho Styles" —
    collection now branded as Soho in active catalog use
  - 1996-1997 Source Book: "Soho — A lightweight version of our
    glove-tanned leather"

  Style numbers carry forward unchanged across the rename: Whitney
  4115, Soho Bag 4082, Waverly 4133, Bleeker 4154, etc. The
  Coach.com "1994 Soho launch" claim is best read as the
  collection-level rename, not a per-silhouette debut.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY) + cross-read
  with `coach-vintage-soho` (Tier 1 brand-published)
- **Flagged by**: cross-reading research streams M2 (1989) and M3
  (1995-1996)

### 2026-05-02 — "Modern classics" voice surfaces Holiday 1996 — pre-Krakoff

- **Files**: `research/M3-catalogs-1995-1996.md`, `errata.md`
- **Was**: Krakoff-era brand voice ("Always modern traditions,"
  "Modern interpretation of the Coach aesthetic") treated as a
  post-1996 Krakoff signature.
- **Now**: The **"modern classics"** framing first surfaces in
  **Holiday 1996** — months **before** Krakoff's December 1996 hire.
  By 1997 Early Fall the heritage line uses "Always modern traditions";
  by 1998 the framing has spread to Tribeca ("EXTREMELY NEAT. NEW AND
  CHIC. IT'S THE ECONOMY OF ELEGANCE") and Coach Neo ("A MODERN
  INTERPRETATION OF THE COACH AESTHETIC"). The voice pivot was
  initiated by late-NYC management in 1996 and accelerated under
  Krakoff, not invented by him.
- **Source**: `coach-catalogs-1960-1989` (Tier 1 PRIMARY)
- **Flagged by**: research stream M3 catalog deep-read

---

## Open errata candidates

Claims still tagged `tentative` or `likely` that are most likely to require
correction once additional primary sources are pulled. Listed here so
readers can see what is on the watchlist.

- **Sheridan launch year** — 1992 vs 1993, currently disputed.
- **Stewardess "United Airlines uniform" claim** — Tier 3 sources only;
  no primary corroboration.
- **"P" factory letter = Costa Rica** — community attribution, not
  primary-sourced.
- **Pre-1994 serial dash positions** — `xxx-xxxx` vs `xxxx-xxx` ordering;
  Tier 3 sources only.
- **Cashin attribution for Skinny Tote, Musette, Mailbox, Dinky, Swagger**
  — 1970s timing problem given Cashin's 1974 contract end; community
  attributions outrun the evidence.

---

## How to add a future erratum

When a published claim is corrected:

1. **Do not silently overwrite.** Make the correction in the affected
   file(s) as a normal commit. The git history is half the record.
2. **Add an entry to this log** at the top of the dated section,
   newest first, using the format above:
   - Date applied (ISO).
   - Files corrected (full repo paths).
   - Was / Now (one or two sentences each).
   - Source ID(s) from `sources/registry.md` supporting the correction.
     Add the source to the registry first if it is new.
   - Flagged by (research stream, reader submission, periodic audit, or
     contributor name).
3. **If the correction touches a high-folklore zone** (`STYLE.md` §4),
   update that zone's guidance so the same error is not reintroduced.
4. **If a `confidence` tag changes**, update both the affected entry's
   frontmatter and any `facts:` block citing the corrected claim.
5. **Promote a candidate from "Open errata candidates" above** if the
   pull resolves it; remove it from the candidate list once the entry
   is corrected and logged.
