# Manual retrieval operations

Several of the highest-value primary sources for this archive cannot be
pulled by the automated session running against this repo. SEC EDGAR,
FindLaw's contract mirror, USPTO's TSDR and Patent Center, and
PurseForum all return 403s or require interactive form submissions when
hit by a headless browser (Cloudflare anti-bot, anti-scraping). The same
URLs are unproblematic in a real browser logged in as a human.

This document is the operating manual for those manual pulls. Each
operation lists the URL, the steps, where to file the result, and which
research / published files to update once the source is in hand. Work
operations in the priority order at the bottom — Operation 1 has the
highest leverage; Operation 6 is cleanup.

After every operation, follow the wrap-up steps in the
[After each operation](#after-each-operation) section. Do not skip the
archive.org snapshot capture — URLs rot, and the registry's
`snapshot:` field is the long-term anchor.

---

## Operation 1: Pull the Coach 2000 S-1 prospectus from SEC EDGAR

The 2000 S-1 is the single highest-value primary source still missing
from the archive. EDGAR returned 403 to every WebFetch attempt in this
session; per `research/G-coach-s1.md` the user must pull it manually.
The "Business" / "Properties" / "History" sections of an S-1 narrate
the company's pre-IPO story in primary form and will corroborate or
correct most of `research/B-history.md`.

Steps:

1. Navigate to
   <https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001116132&type=S-1>
   (Coach Inc., CIK 1116132).
2. Locate the original S-1 filing dated **June 20, 2000** (per WWD
   coverage in `research/G-coach-s1.md`).
3. Open the filing index. The S-1 document itself is the largest `.htm`
   file in the index — open it.
4. Save Page As → HTML to
   `/Users/pjdoland/Repos/coachbook/sources/primary/coach-s1-2000.html`.
   If the filing is split across multiple `.htm` exhibits, save each
   under
   `/Users/pjdoland/Repos/coachbook/sources/primary/coach-s1-2000/<exhibit>.html`.
5. Also pull:
   - any **S-1/A amendments** filed between June 2000 and the IPO,
   - the final **424b prospectus** filed at the October 2000 IPO
     pricing (this is the document that records the actual sold
     percentage and final price, resolving the `disputed` IPO percentage
     in `research/G-coach-s1.md`).
   File all under the same path.
6. While at FindLaw, also pull (same Cloudflare 403 issue):
   - <https://corporate.findlaw.com/contracts/planning/master-separation-agreement-sara-lee-corp-and-coach-inc.html>
     → save to
     `/Users/pjdoland/Repos/coachbook/sources/primary/sara-lee-master-separation.html`
   - <https://corporate.findlaw.com/contracts/planning/indemnification-and-insurance-matters-agreement-sara-lee-corp.html>
     → save to
     `/Users/pjdoland/Repos/coachbook/sources/primary/sara-lee-indemnification.html`
7. Update `sources/registry.md`: add a new Tier 1 entry `coach-s1-2000`
   pointing at both the local file path and the canonical SEC URL.
   Add Tier 1 entries for the FindLaw contracts. Capture archive.org
   snapshots for every canonical URL.
8. Review the S-1 "Business" section and update the following research
   files, promoting facts from `tentative` / `likely` → `confirmed`
   wherever the prospectus corroborates them:
   - `research/B-history.md` — 1941 founders, Cashin tenure dates,
     Sara Lee 1985 deal terms, 1985 sales figure, 1999 sales figure,
     IPO target / actual percentages and pricing, Frankfort role
     timing.
   - `research/E-authentication.md` — manufacturing geography section
     (Properties section of the S-1 lists every factory and warehouse
     with locations and dates: 310 W 34th, 516 W 34th, Carlstadt NJ,
     Miami-area, Costa Rica, Dominican Republic, Hungary, etc.).
   - `research/D-models.md` — any model names mentioned in the
     prospectus's product narrative.

---

## Operation 2: USPTO trademark search (TSDR)

TSDR records date-anchor the creed-wording era boundaries (`COACH
LEATHERWARE` first-use vs `COACH` first-use) and, if `CASHIN CARRY` is
registered, settle the 1962 launch date precisely. Per
`research/H-uspto.md`, TSDR's interactive search forms are not feasible
from headless browsing.

Steps:

1. Navigate to <https://tsdr.uspto.gov/>.
2. Switch to Word and/or Design Mark Search.
3. Run these queries one at a time:
   - **`COACH`** (wordmark) — capture serial number, registration
     number, filing date, registration date, first-use-in-commerce
     date, owner-chain history (assignments).
   - **`COACH LEATHERWARE`** — same fields. Likely an earlier mark
     than the bare `COACH`.
   - **`CASHIN CARRY`** or **`CASHIN-CARRY`** — same fields. If
     registered, the first-use-in-commerce date settles the Fall 1962
     launch precisely.
4. For each result, click the **Documents** tab and save the
   registration certificate, drawing, and any specimens of use.
5. Save under
   `/Users/pjdoland/Repos/coachbook/sources/primary/uspto-tm-<wordmark-slug>/`
   — for example
   `/Users/pjdoland/Repos/coachbook/sources/primary/uspto-tm-coach-leatherware/`.
6. Update `sources/registry.md` with a new Tier 1 entry per mark
   (`uspto-tm-coach`, `uspto-tm-coach-leatherware`,
   `uspto-tm-cashin-carry`), each pointing at the local files and the
   canonical TSDR record URL. Capture archive.org snapshots.
7. The TSDR records date-anchor creed-wording eras — update
   `creed-formats/` accordingly. The first-use-in-commerce date for
   `COACH LEATHERWARE` is the lower bound on the early-creed era; the
   `COACH` mark first-use bounds the later-creed era.

---

## Operation 3: USPTO patent search

`research/H-uspto.md` notes that Cashin introduced the brass turnlock in
**1964** (per Vintage Fashion Guild), and that a design or utility
patent likely exists assigned to Cashin, Sills, Coach Leatherware, or
Gail Leather Products. Locating the patent upgrades the 1964 turnlock
fact from `likely` to `confirmed` and answers the open question of who
owned the IP.

Steps:

1. Navigate to <https://patents.google.com/>. Google Patents has the
   best-indexed UI for old USPTO records and is the recommended entry
   point in `research/H-uspto.md`.
2. Run these queries:
   - **Inventor**: `Bonnie Cashin`
   - **Assignee**: `Coach Leatherware`, `Gail Leather Products`,
     `Coach Inc` (run each separately).
   - **Keywords**: `"turn lock" handbag`, `"toggle closure" purse`,
     `"twist lock" bag`.
3. Specifically look for a 1960s design or utility patent on the brass
   turnlock. Cashin introduced the turnlock in 1964; the patent
   filing would likely date 1963–1965.
4. Also look for a 1970s–80s patent on the **dogleash clip** variant
   Coach uses, and any **design patents** for specific bag silhouettes
   (USPC 150 — Purses, wallets, and protective covers).
5. For each patent located, save the patent PDF under
   `/Users/pjdoland/Repos/coachbook/sources/primary/uspto-patent-<number>/`
   (e.g. `uspto-patent-D198765/`) along with any prosecution-history
   documents available via Google Patents → "USPTO" link.
6. Update `sources/registry.md` with a new Tier 1 entry per patent
   (`uspto-patent-<number>`). Capture archive.org snapshots of the
   Google Patents page and the USPTO record.
7. Update affected files:
   - `designers/bonnie-cashin.md` — change turnlock introduction from
     "Cashin tenure" to specifically 1964; add the assignee chain.
   - `models/cashin-carry.md` — note that the very first Cashin Carry
     totes (Fall 1962, Spring 1963) likely had different hardware
     than the post-1964 turnlock.
   - `authentication/serial-numbers.md` (and any hardware page) — cite
     the patent as the canonical primary for the turnlock geometry.
   - `research/B-history.md` — add a 1964 turnlock-introduction event.
   - `research/H-uspto.md` — close the open verification item.

---

## Operation 4: PurseForum vintage Coach catalogs thread

`research/F-catalogs.md` flags this thread as the canonical community
location for member-uploaded catalog scans. Direct WebFetch returns
403 (Cloudflare); a real browser is fine. Catalog scans anchor
per-model introduction dates more precisely than any other community
source.

Steps:

1. Navigate to
   <https://forum.purseblog.com/threads/vintage-coach-catalogs.1045341/>.
   (This URL returns 403 to headless WebFetch — fine in a real browser.)
2. Page through the thread end-to-end. For every member-uploaded catalog
   scan, note:
   - Year and season (Spring / Fall / Holiday).
   - Uploader username.
   - Post number and URL.
3. **Do NOT mirror without permission.** Two acceptable patterns:
   - **Link out only** — record the post URL in our `catalogs/` entry,
     do not copy the image. Default for unfamiliar uploaders.
   - **DM the uploader** for explicit reuse permission, then if granted,
     right-click image → Save Image As to
     `/Users/pjdoland/Repos/coachbook/images/catalogs/<year>-<season>/<original-filename>`,
     and record the permission in `sources/permissions.md`.
4. For each catalog year confirmed in the thread, add a stub
   `/Users/pjdoland/Repos/coachbook/catalogs/<year>-<season>.md`
   with frontmatter per the schema in `PLAN.md` §"Data model" and
   `STYLE.md` §5 (catalogs require `year`, `season`, `publisher`,
   `images`, `rights`).
5. Update `research/F-catalogs.md` to mark each year/season covered;
   strike from the "Catalogs known to exist (era anchors, no scan in
   hand)" list as scans are located.
6. Update `sources/registry.md` with per-post source entries
   (`purseforum-catalogs-thread-1045341-post-<n>`). Capture
   archive.org snapshots of each thread page (multiple pages — the
   thread is long).

---

## Operation 5: Coach official "From the Archives" Pinterest

The Coach official Pinterest board is brand-published Tier 1 and
includes ~88 pins of historical bags, ads, and catalog spreads. Per
`research/F-catalogs.md` (F2), this is the single best brand-published
free archive.

Steps:

1. Navigate to
   <https://www.pinterest.com/coach/from-the-archives/>.
2. For each of the ~88 pins, capture:
   - Pin URL (the `pinterest.com/pin/<id>/` link).
   - Image source URL (right-click → Copy image address).
   - Caption / description text.
   - Year, if dated in the caption.
3. These are brand-published; treat as Tier 1. Right-click → Save Image
   As to
   `/Users/pjdoland/Repos/coachbook/images/coach-archives-pinterest/<pin-id>.jpg`
   (preserve the Pinterest pin ID in the filename for back-traceability).
4. Brand imagery falls under fair-use commentary for this archive;
   still credit explicitly with `rights: brand` and `source:
   coach-pinterest-archives` in any frontmatter that uses the image
   (per `STYLE.md` §6).
5. For every pin with a dated caption, create or update the matching
   `catalogs/<year>-<season>.md` or `models/<slug>.md` entry with the
   image and citation.
6. Update `sources/registry.md`: the `coach-pinterest-archives` entry
   already exists — add a `snapshot:` archive.org URL once the board
   is captured.

---

## Operation 6: coacharchive.com (Vintage Coach Library) systematic review

`research/F-catalogs.md` (F1) and `sources/registry.md`
(`coacharchive-com`) call this the largest external structured
reference: 344 styles documented. It is **Tier 3** — a self-published
operator-curated site — so it cannot be sole authority for any fact.
Its role is cross-validation against the model canon.

Steps:

1. Navigate to <https://www.coacharchive.com/>.
2. Browse all model entries. The site claims 344 documented styles,
   covering the late-1970s through early-2000s "golden era."
3. For each model, compare against `research/D-models.md` and any
   existing `models/<slug>.md`:
   - **Our entry exists**: cross-check facts. Where coacharchive.com
     agrees with our entry, add it as an additional source citation
     (do not promote `tentative` to `confirmed` from a single Tier 3
     citation). Where it disagrees, document as `disputed` with both
     positions cited.
   - **Our entry does not exist**: add the model to
     `research/D-models.md` as a candidate for a new entry, with
     coacharchive.com as the sole current citation and confidence
     `tentative`.
4. **Verification rule (per `STYLE.md` §3 promotion rule)**: any unique
   claim from coacharchive.com — i.e., a fact that no other source
   we've found corroborates — stays `tentative` until an independent
   source corroborates it. Do not promote on coacharchive.com alone.
5. Capture archive.org snapshots of each model page consulted; update
   the `coacharchive-com` registry entry with a `snapshot:` URL.

---

## Operation 7: UCLA Cashin papers research access

The UCLA Bonnie Cashin Collection is the highest-value primary archive
for resolving the Cashin attribution problem documented in
`designers/bonnie-cashin.md` and `research/C-cashin.md` §5. The papers
include Cashin's Coach contract, design illustrations, and catalog
material. Access requires email outreach to UCLA Library Special
Collections — there is no public-web equivalent.

Steps:

1. Navigate to
   <https://oac.cdlib.org/findaid/ark:/13030/kt9z09q97x/>
   (the published finding aid; entry `ucla-cashin-papers` in
   `sources/registry.md`).
2. Cross-reference with the box list at
   <https://unitproj.library.ucla.edu/cataloging/procedures/CashinMap.pdf>
   (`ucla-cashin-pdf` in the registry).
3. Identify boxes / folders containing:
   - Cashin's **Coach contract** (probably in the "contractual
     paperwork" series). Resolves the tenure-dates question
     definitively (currently `likely` 1962–1974).
   - **1962–1974 Coach catalogs and press materials** — anchors model
     introduction dates for Cashin-era silhouettes.
   - Cashin's **design illustrations for Coach** — the canonical
     designer-attribution evidence for the four early-1960s
     silhouettes (shopping bag tote, bucket bag, shoulder bag,
     convertible clutch — see `research/H-uspto.md`).
4. Email UCLA Library Special Collections (contact details in the
   finding aid). Free image scans for non-commercial research with
   attribution are commonly granted (per `PLAN.md` §"Sourcing
   strategy" item 6). Request:
   - Reproduction of the Coach contract pages.
   - Digital images of any Coach catalog pages 1962–1974.
   - A list, with attribution, of every Cashin-designed Coach
     silhouette documented in her papers.
5. File received scans under
   `/Users/pjdoland/Repos/coachbook/sources/primary/ucla-cashin/<box>-<folder>/`.
6. Update `sources/registry.md` with per-folder entries
   (`ucla-cashin-box-<n>-folder-<n>`).
7. Update affected files:
   - `designers/bonnie-cashin.md` — promote tenure dates to
     `confirmed`; add the contract scope as the canonical scope of
     Cashin's Coach work.
   - `research/C-cashin.md` — close the open verification items in §5.
   - `models/cashin-carry.md` and any other Cashin-attributed models
     — promote attribution to `confirmed` where the contract or
     illustrations corroborate.

---

## After each operation

Run all of these before moving to the next operation. Skipping any of
them defeats the citation discipline that makes this archive worth
building.

1. **Update `sources/registry.md`** with new entries per the schema at
   the top of that file. Use stable kebab-case IDs. Tier 1 for
   primary records (SEC, USPTO, UCLA scans, brand-published material);
   Tier 3 for community archives (PurseForum, coacharchive.com).
2. **Update the affected research files** (`research/B`, `C`, `D`,
   `E`, `F`, `G`, `H`). Strike open verification items as they close;
   add new ones as the source surfaces them.
3. **Promote affected facts** in published entries (`designers/`,
   `models/`, `authentication/`, `creed-formats/`) from `tentative`
   / `likely` → `confirmed` where primary corroboration is now in
   hand. Follow the promotion rule in `STYLE.md` §3: do not promote
   on community-source volume alone.
4. **Log corrections** in `errata.md` (create the file if not present
   — `PLAN.md` §"Errata and corrections" specifies the format: date,
   entry, what was wrong, what it now says, who flagged it). Do not
   silently overwrite — git history plus the errata log preserve the
   record.
5. **Capture archive.org snapshots** for every URL cited. Use
   <https://web.archive.org/save/> with the canonical URL and record
   the resulting snapshot URL in the `snapshot:` field of the
   registry entry. URLs rot; the snapshot is the long-term anchor.
6. **Re-run the pre-publish checklist** (`STYLE.md` §8) for any
   entries that were touched.

---

## Priority order

Work the operations in this order. The ordering is by leverage —
Operation 1 corroborates the most existing claims at once; Operation 7
resolves the single biggest open attribution problem; the rest fill
out specifics.

1. **Operation 1 — SEC EDGAR S-1.** Single highest-value pull;
   corroborates the most existing claims in `research/B-history.md`
   and the manufacturing geography in `research/E-authentication.md`.
2. **Operation 7 — UCLA Cashin papers.** Settles the over-attribution
   problem (`designers/bonnie-cashin.md`, `research/C-cashin.md` §5).
   Email-driven, so kick this off early — turnaround is days to weeks.
3. **Operation 4 — PurseForum vintage catalogs.** Anchors per-model
   introduction dates across the canon.
4. **Operation 2 — USPTO TSDR.** Anchors creed-wording era boundaries.
5. **Operation 3 — USPTO patent.** Anchors the 1964 turnlock fact and
   resolves the assignee chain.
6. **Operation 5 — Coach official Pinterest.** Fills out catalog and
   ad references with brand-published imagery.
7. **Operation 6 — coacharchive.com.** Cross-validation pass; lowest
   leverage because it's Tier 3, but largest single external
   reference.
