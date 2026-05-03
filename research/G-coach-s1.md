# Research stream G — Coach S-1 / IPO documentation

Compiled 2026-05-01. Goal was to pull Coach Inc.'s 2000 S-1 from SEC
EDGAR. **The SEC EDGAR site (and FindLaw mirror of associated
contracts) returned 403 to all WebFetch attempts** — the live filings
were not retrievable through the headless browser available in this
session. Captured what the WWD coverage of the filing reported, which
is a Tier 2 secondary read of the S-1 itself.

Action item for the user: open the EDGAR search by hand at
https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001116132
(Coach Inc., CIK 1116132) and download the original S-1 filing from
2000. The Business / Properties / History sections of the S-1 are
the highest-value primary source still missing from this archive.

---

## Sources

- **G1** — WWD, "COACH FILES FOR IPO IN FIRST MOVE TO PART COMPANY WITH SARA LEE": https://wwd.com/fashion-news/fashion-features/feature/article-1196740-1710719/ (Tier 2)
- **G2** — Master Separation Agreement, Sara Lee / Coach Inc. (FindLaw mirror, 403 from WebFetch): https://corporate.findlaw.com/contracts/planning/master-separation-agreement-sara-lee-corp-and-coach-inc.html (Tier 1 contract — needs browser pull)
- **G3** — Indemnification and Insurance Matters Agreement: https://corporate.findlaw.com/contracts/planning/indemnification-and-insurance-matters-agreement-sara-lee-corp.html (Tier 1, 403)
- **G4** — Tapestry investor relations Sara Lee filing: https://tapestry.gcs-web.com/static-files/f782a1d5-67be-4bd0-bfd1-0e17c0a281ed (Tier 1)
- **G5** — Coach Inc. fiscal 2003 10-K (full URL): https://www.sec.gov/Archives/edgar/data/1116132/000095012303010503/y89793e10vk.htm (Tier 1, 403 from WebFetch)
- **G6** — Sara Lee Corp company history (FundingUniverse): https://www.fundinguniverse.com/company-histories/sara-lee-corporation-history/ (Tier 2)

---

## What WWD reported about the 2000 S-1 (from G1, single Tier 2 read)

| Fact | Value | Confidence | Notes |
|------|-------|------------|-------|
| S-1 filing date | June 20, 2000 | likely | Single Tier 2 source; WWD article reports on the filing event itself |
| IPO target percentage | 19.9% or less of Coach | likely | Sara Lee's planned divestiture for the IPO |
| IPO target raise | $140 million | likely | Per WWD's reading of the filing |
| Lead underwriter | Goldman Sachs | likely | |
| Sara Lee's planned post-IPO retention | At least 80.1% | likely | With intent to divest entirely within 18 months |
| Coach 1999 sales | ~$550 million | likely | Disclosed in the S-1 per WWD |
| Coach 1985 sales (at Sara Lee acquisition) | ~$18 million | likely | WWD historical context, reading the S-1 |
| Use of proceeds | Repay portion of debt assumed during separation from Sara Lee | likely | WWD |
| Founding inspiration | "supple quality of a worn baseball glove" | likely | WWD; corroborates the Cahn baseball-glove leather story |
| 1999 product expansion | Beyond leather goods: shoes, eyewear, home and pet accessories, specialized carrying cases | likely | WWD |
| Flagship store | Madison Avenue and 57th Street | confirmed | Multiple sources, including pre-existing research/B-history.md |

---

## Cross-check disputes opened by this read

### IPO percentage
- Earlier sources reported the **actual IPO** as **17%** (FundingUniverse)
  or **19.5%** (Sara Lee history sources). WWD's S-1 filing report
  says "19.9% or less" was *planned*. The pricing/sales process
  between filing (June) and IPO (October 5) could have reduced the
  actual sold percentage. **Resolution**: filing target ≤ 19.9%;
  actual sold percentage 17–19.5% per various secondary readings;
  the precise actual figure should come from the final pricing
  prospectus (424b filing) on EDGAR. Mark `disputed` until pulled.

### IPO raise
- WWD (filing-time): $140M target.
- FundingUniverse: $118M actual ("at $16/share, 17%").
- Other source: $118M raised, Sara Lee divested 19.5%.
- **Resolution**: target $140M; actual ~$118M. Different numbers,
  same fact (target vs realized). Document both with sources.

### IPO date and price
- WWD: **filing** June 20, 2000.
- Other (search result): **IPO** Oct 5, 2000, priced $16, range $14–16,
  7.38M shares offered, opened high $21.50, closed $20.31, 5.6M
  shares traded day one.
- These are not in conflict; one is the filing event, the other is
  the offering pricing.

---

## What the S-1 (still un-pulled) almost certainly contains

These are the high-value primary facts that the actual S-1 document
would settle definitively, and which remain `tentative` until
retrieved:

1. **Original 1941 founders** — the "Business" section of the S-1
   typically narrates pre-Cahn ownership.
2. **Manufacturing geography** — properties section lists every
   factory and warehouse, with exact locations and dates (310 W
   34th, 516 W 34th, Carlstadt NJ, Miami-area, Costa Rica, Hungary,
   etc.).
3. **Reed Krakoff hire date** — likely in the Management section as
   his start date.
4. **Lillian and Miles Cahn's exact roles and dates** — historical
   discussion in the Business section.
5. **Coach Repair / Factory Restoration program** — operational
   details may appear under "Customer Service" or "Operations."
6. **Bonnie Cashin tenure** — primary citation for 1962-1974 dates.
7. **Sale to Sara Lee 1985 deal terms** — purchase price, structure.
8. **"Made in" geography by year** — manufacturing footprint as of
   2000 with year-by-year evolution likely in business narrative.

---

## Action items

1. **User: pull the S-1 manually** from EDGAR. Recommended path:
   - https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001116132&type=S-1
   - Locate June 2000 S-1 (and any S-1/A amendments and 424b pricing
     prospectus from Oct 2000)
   - Save the HTML or PDF locally; place under
     `/Users/pjdoland/Repos/coachbook/sources/primary/coach-s1-2000/`
2. Once retrieved, the S-1 becomes the canonical primary source for
   most of `research/B-history.md` claims, upgrading many `likely`
   entries to `confirmed`.
3. Same path for the FindLaw-mirrored Master Separation Agreement
   and Indemnification Agreement (G2, G3).
