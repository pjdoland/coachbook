# Source registry

Every fact in this archive cites a source by its stable ID. This file
is the canonical mapping. New sources are added in alphabetical-by-ID
order within each tier. URLs that 404 are not removed — they get an
archive.org snapshot URL added and `status: archived-only`.

Schema for each entry:
```
### <id>
- url: <canonical URL>
- snapshot: <web.archive.org URL or "TODO: capture">
- type: <catalog | book | article | finding-aid | forum | patent | filing | wiki | dealer-blog | brand-page | etc>
- tier: 1 | 2 | 3 | 4
- title: <full title>
- author/operator: <if known>
- accessed: YYYY-MM-DD
- rights: <public-domain | fair-use-commentary | brand | community | unknown>
- notes: <short description>
```

---

## Tier 1 — Primary sources

### coach-10k-fiscal-2003
- url: https://www.sec.gov/Archives/edgar/data/1116132/000095012303010503/y89793e10vk.htm
- local: /Users/pjdoland/Downloads/COACH, INC..html
- snapshot: TODO
- type: sec-filing-10k
- tier: 1
- title: Coach, Inc. Annual Report on Form 10-K, fiscal year ended June 28, 2003
- accessed: 2026-05-01
- rights: public-domain
- notes: **First Tier 1 primary source in this archive.** User-supplied local copy. Primary citation for: 1941 founding, July 1985 Sara Lee acquisition, October 2000 IPO with 17.0M shares, April 2001 Sara Lee final divestiture, December 1996 Krakoff hire, July 1985 Frankfort president, July 1999 Jacksonville consolidation, April 2002 Lares Puerto Rico shutdown. Manufacturing geography 2003: China, Costa Rica, Mexico, India, Italy, Spain, Hungary, Turkey.

### sec-coach-cik
- url: https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001116132&type=&dateb=&owner=include&count=40
- snapshot: TODO
- type: filing-index
- tier: 1
- title: SEC EDGAR — Coach Inc. (CIK 1116132) all filings
- accessed: 2026-05-01
- rights: public-domain
- notes: Master index for Coach Inc. SEC filings. Original 2000 S-1 prospectus is the highest-value primary source for pre-IPO company history.

### uspto-tsdr
- url: https://tsdr.uspto.gov/
- snapshot: TODO
- type: trademark-database
- tier: 1
- title: USPTO Trademark Status & Document Retrieval
- accessed: 2026-05-01
- rights: public-domain
- notes: Search "COACH" / "COACH LEATHERWARE" / "CASHIN CARRY" for registration history, drawings, ownership chain.

### uspto-patents
- url: https://www.uspto.gov/patents/search
- snapshot: TODO
- type: patent-database
- tier: 1
- title: USPTO Patent Search
- accessed: 2026-05-01
- rights: public-domain
- notes: Search Coach-assigned hardware patents (turnlock, dogleash clip).

### ucla-cashin-papers
- url: https://oac.cdlib.org/findaid/ark:/13030/kt9z09q97x/
- snapshot: TODO
- type: finding-aid
- tier: 1
- title: Bonnie Cashin Collection of Fashion, Theater, and Film Costume Design, 1913–2000
- author/operator: UCLA Library Special Collections
- accessed: 2026-05-01
- rights: institutional
- notes: Primary archive of Cashin's papers — gift of the estate, July 2003. Finding aid prepared by Kelly Besser, 2021. ~7,003 items; portions digitized. NOT at LACMA (common error).

### ucla-cashin-pdf
- url: https://unitproj.library.ucla.edu/cataloging/procedures/CashinMap.pdf
- snapshot: TODO
- type: finding-aid
- tier: 1
- title: Cashin Collection box list (PDF)
- accessed: 2026-05-01

### bonnie-cashin-archive-org
- url: https://www.bonniecashinarchive.org
- snapshot: TODO
- type: archive-portal
- tier: 1
- title: Bonnie Cashin Archive
- author/operator: Stephanie Lake (Cashin's biographer/archivist)
- accessed: 2026-05-01
- notes: Operator-curated; closest to a primary online archive of Cashin material.

### nypl-cashin-designs
- url: https://nyplorg-data-archives.s3.amazonaws.com/uploads/collection/pdf_finding_aid/Guide_to_the_Bonnie_Cashin_Designs.pdf
- snapshot: TODO
- type: finding-aid
- tier: 1
- title: Guide to the Bonnie Cashin Designs (NYPL)
- accessed: 2026-05-01

### newschool-cashin-sills
- url: https://findingaids.archives.newschool.edu/repositories/3/resources/75
- snapshot: TODO
- type: finding-aid
- tier: 1
- title: Bonnie Cashin, Philip Sills & Company publicity photographs
- author/operator: The New School Archives & Special Collections
- accessed: 2026-05-01

### asu-fidm-cashin
- url: https://asufidmmuseum.asu.edu/learn/articles/bonnie-cashin
- snapshot: TODO
- type: museum-article
- tier: 1
- title: Bonnie Cashin (ASU FIDM Museum)
- accessed: 2026-05-01

### henryford-cashin
- url: https://www.thehenryford.org/explore/blog/bonnie-cashin-innovative-and-influential
- snapshot: TODO
- type: museum-article
- tier: 1
- title: Bonnie Cashin: Innovative and Influential (The Henry Ford)
- accessed: 2026-05-01

### licf-cashin-fund
- url: https://licf.org/wp-content/uploads/2018/03/Cashinfund-1.pdf
- snapshot: TODO
- type: foundation-doc
- tier: 1
- title: Bonnie Cashin Fund (Long Island Community Foundation)
- accessed: 2026-05-01

### coach-pinterest-archives
- url: https://www.pinterest.com/coach/from-the-archives/
- snapshot: TODO
- type: brand-curated-images
- tier: 1
- title: From the Archives (Coach official Pinterest)
- accessed: 2026-05-01
- rights: brand
- notes: 88 official Coach pins of historical bags, ads, catalog spreads.

### coach-originals
- url: https://www.coach.com/shop/new/featured/the-coach-originals
- snapshot: TODO
- type: brand-page
- tier: 1
- title: The Coach Originals (re-release line)
- accessed: 2026-05-01

### coach-vintage-soho
- url: https://www.coach.com/products/vintage-soho-bag/CU909.html
- type: brand-page
- tier: 1
- accessed: 2026-05-01
- notes: Brand-published "first introduced 1994" date for Soho.

### coach-vintage-sheridan-stewart
- url: https://www.coach.com/products/vintage-sheridan-stewart-bag/CDE04.html
- type: brand-page
- tier: 1
- accessed: 2026-05-01
- notes: Brand-published "first introduced 1993" date for Sheridan Stewart.

### coach-vintage-bleecker
- url: https://www.coach.com/products/vintage-bleecker-satchel/CK664.html
- type: brand-page
- tier: 1
- accessed: 2026-05-01
- notes: Brand-published "first introduced 2000" date for Bleecker Satchel.

---

### coach-catalogs-1960-1989
- url: https://drive.google.com/drive/folders/1wcK21b2R_plh3PyLXrTvWENYsOd6wMcu (user-supplied folder)
- local: /Users/pjdoland/Repos/coachbook/sources/primary/catalogs/Archived Vintage Coach Catalogues/
- snapshot: TODO
- type: catalog-archive
- tier: 1
- title: Archived Vintage Coach Catalogues — 107 PDFs spanning 1960 through 2020 (full collection downloaded)
- accessed: 2026-05-02
- rights: user-supplied; treat as third-party Coach-published material under fair-use commentary
- notes: **First Tier 1 primary catalog source.** Earliest is 1960 Coach Wallets — pre-Cahn purchase; documents pre-Cashin models (Mark 111, Playboy, All American, Traveler, Hard Top, Private Secretary), pre-1961 style-number format `22-25XXX-NNN`, COACH LEATHERWARE wordmark already in commercial use 1960, horse-and-carriage logo confirmed pre-1961, "over two decades" 1960 framing softens 1941 founding date. 33 catalogs span 1975–1989 inclusive. Per-catalog findings logged in `research/L-catalogs-1960-1989.md`.

### uspto-tm-coach-leatherware
- url: https://tsdr.uspto.gov/#caseNumber=73345984&caseType=SERIAL_NO&searchType=statusSearch
- local-screenshot: /Users/pjdoland/Repos/coachbook/sources/primary/uspto-tsdr/coach-leatherware-73345984.png
- snapshot: TODO
- type: trademark-record
- tier: 1
- title: COACH LEATHERWARE — Reg 1242098 (Serial 73345984)
- accessed: 2026-05-02
- notes: Filed 1982-01-18, registered 1983-06-14, **First Use in Commerce: September 1973** (IC 018 handbags + IC 025 belts), Cancelled 2016-03-18 for non-renewal of Section 8 declaration. Owner: Coach Services, Inc. (516 W 34th St NYC, Maryland corp). Mark drawing code (3) Words plus design. Primary anchor for the LEATHERWARE wordmark era boundary — first commercial use in handbag class September 1973.

### uspto-patent-turnlock-3201162
- url: https://patents.google.com/patent/US3201162A
- local-pdf: /Users/pjdoland/Repos/coachbook/sources/primary/uspto-patents/US3201162-turnlock.pdf
- local-screenshot: /Users/pjdoland/Repos/coachbook/sources/primary/uspto-patents/turnlock-US3201162A.png
- snapshot: TODO
- type: patent
- tier: 1
- title: US3201162A — "Turn lock assembly"
- inventor: Paynor Melvin
- assignee: Fulford Manufacturing Co
- accessed: 2026-05-02
- notes: **The brass turnlock patent.** Filed/Priority **April 6, 1964**, granted August 17, 1965, expired by anticipated lifetime 1982. Inventor Paynor Melvin; assignee **Fulford Manufacturing Co** — NOT Coach and NOT Cashin. The 1964 priority date matches Vintage Fashion Guild's "Cashin introduced 1964" claim — confirming Cashin sourced just-patented Fulford hardware for Coach handbags rather than designing the hardware herself. Primary correction: Cashin popularized but did NOT invent the turnlock.

### coach-s1-2000
- url: https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001116132&type=S-1&dateb=&owner=include&count=40
- local: /Users/pjdoland/Desktop/2000_s1/s-1.txt (and amendments in same directory)
- snapshot: TODO
- type: sec-filing-s1
- tier: 1
- title: Coach, Inc. Form S-1 Registration Statement (filed June 20, 2000)
- filing_accession: 0000912057-00-028905
- accessed: 2026-05-02
- rights: public-domain
- notes: **Second Tier 1 primary source in this archive, after the 2003 10-K.** User-supplied local copy. Highest-value document for the IPO-era operational picture. Primary citation for: Frankfort Coach President July 1985 – September 1991 (with 1991-1995 gap during Sara Lee corporate roles); Frankfort Chairman/CEO from November 1995; "Coach Leatherware Company" as the named predecessor entity Sara Lee acquired in 1985; Medley FL 107,000 sq ft manufacturing facility (the long-rumored 1988 "Miami-area" plant — not in 2003 10-K); Lares PR 66,000 sq ft manufacturing; Florence Italy 16,000 sq ft product development; June 2000 properties total six facilities; 1985 acquisition-year sales $19.0M; FY1997 peak sales $540.4M; first sales declines 1998-1999; first direct mail catalog by 1980s; Coach Inc. incorporated June 1, 2000 (Maryland). 1941 founders still unnamed in this primary; Cashin not mentioned by name (Item 1 is product-and-strategy focused, not historical-narrative focused).

### coach-fb-1962-cashin
- url: https://www.facebook.com/coach/posts/-1962-enter-bonnie-cashin-our-first-lead-designer-and-a-very-quotable-one-at-tha/10158069868246693/
- snapshot: TODO
- type: brand-social-post
- tier: 1
- title: "1962. Enter Bonnie Cashin, our first lead designer..." (Coach official Facebook post)
- accessed: 2026-05-02
- rights: brand
- notes: Brand-published primary confirmation that Cashin's Coach engagement dates to **1962**. Resolves the 1962-vs-1961 dispute opened by Maharam in favor of 1962 as canonical (with Maharam's 1961 likely reflecting contract-negotiation period, not engagement start). Should be paired with `coach-vintage-soho`-style brand-page citations as Tier 1 brand authority.

### risd-cashin-1962
- url: https://www.artsy.net/artwork/bonnie-cashin-cashin-carry-for-coach
- snapshot: TODO
- type: museum-collection-record
- tier: 1
- title: Bonnie Cashin, "Cashin Carry for Coach" (1962) — RISD Museum collection record (via Artsy)
- accessed: 2026-05-02
- notes: RISD Museum holds a Cashin Carry tote dated 1962. Tier 1 institutional dating confirms the Cashin Carry's 1962 introduction year. Adds RISD to the list of museums with Cashin Coach material (alongside UCLA Library Special Collections, FIT, Met Costume Institute, ASU FIDM, Henry Ford).


## Tier 2 — Reputable secondary

### fundinguniverse-coach
- url: https://www.fundinguniverse.com/company-histories/coach-inc-history/
- snapshot: TODO
- type: company-history-reference
- tier: 2
- title: History of Coach, Inc.
- author/operator: International Directory of Company Histories (republished by FundingUniverse)
- accessed: 2026-05-01
- notes: Most thorough free public corporate history before paywalled WWD / NYTimes archives.

### encyclopedia-com-coach-inc
- url: https://www.encyclopedia.com/economics/economics-magazines/coach-inc
- type: encyclopedia
- tier: 2
- accessed: 2026-05-01

### encyclopedia-com-coach-leatherware
- url: https://www.encyclopedia.com/books/politics-and-business-magazines/coach-leatherware
- type: encyclopedia
- tier: 2
- accessed: 2026-05-01

### encyclopedia-com-cashin
- url: https://www.encyclopedia.com/people/literature-and-arts/fashion-biographies/bonnie-cashin
- type: encyclopedia
- tier: 2
- accessed: 2026-05-01

### wwd-coach-early-years
- url: https://wwd.com/fashion-news/designer-luxury/coach-the-early-years-5220127/
- type: trade-press-article
- tier: 2
- title: Coach: The Early Years
- accessed: 2026-05-01


### wwd-lillian-cahn-obituary
- url: https://wwd.com/accessories-news/leather-goods/lillian-cahn-cofounder-of-coach-dies-at-89-6838763/
- snapshot: TODO
- type: trade-press-obituary
- tier: 2
- title: "Lillian Cahn, Cofounder of Coach, Dies at 89" (WWD)
- accessed: 2026-05-02
- notes: Tier 2 trade-press obituary published March 2013. Confirms: Lillian Cahn (1923–2013), born Sátoraljaújhely, Hungary; Cahns joined Gail Leather Products **as contractors** in 1946 (NOT as employees as some prior sources framed); Cahns purchased factory 1961 in leveraged buyout; sold Coach to Sara Lee July 1985 ~$30M; Lillian helped hire Cashin "in 1961" — supporting the Maharam 1961 framing as the contract date with first collection shipping Fall 1962. Direct quote from Lillian (2000): "I was always dreaming after Bonnie's clothes in the Town & Country shop at Lord & Taylor. I couldn't afford them, but I loved them." Cahn children: Susan, Julie, David. Coach Farm Gallatinville NY founded 1983, sold ~2008 (five years before Lillian's 2013 death).


### maharam-cashin
- url: https://www.maharam.com/stories/ping_bonnie-cashin
- snapshot: TODO
- type: design-essay
- tier: 2
- title: Bonnie Cashin (Maharam Story essay)
- accessed: 2026-05-02
- notes: Tier 2 design-publication essay. Distinct facts not in earlier sources: Cashin Coach tenure given as **1961–1974** (vs the 1962–1974 widely cited elsewhere — disputed); designed for **35+ houses including Hermès, Ballantyne, and Aquascutum** beyond the Sills/Meyers/Crescendoe-Superb/HBA/D. Klein documented in vintagefashionguild-cashin; designed **first-ever flight attendants' uniforms for American Airlines** (relevant to Stewardess bag UAL-claim verification — the AA uniform connection makes the broader airline-uniform-designer credential plausible). Quotes Cashin: "I like to design clothes for a woman who plays a particular role in life, not simply to design clothes that follow a certain trend." No turnlock-introduction date given.

### vintagefashionguild-cashin
- url: https://vintagefashionguild.org/resources/item/label/cashin-bonnie/
- snapshot: TODO
- type: reference-site-label-entry
- tier: 2
- title: Cashin, Bonnie — Vintage Fashion Guild Label Resource
- accessed: 2026-05-01
- notes: Source for the **1964 turnlock introduction** date and the non-exclusive use across Cashin's collections (Coach, Sills, Meyers, Crescendoe-Superb, HBA, D. Klein). Vintage Fashion Guild is a long-running curated reference; treat as Tier 2.

### lake-cashin-2016
- url: <Google Books snippet view via ISBN>
- type: book
- tier: 2
- title: Bonnie Cashin: Chic Is Where You Find It
- author/operator: Stephanie Lake (Rizzoli, 2016)
- notes: Most authoritative Cashin biography. Free access via library lending or Google Books snippet view.

---

## Tier 3 — Community archives & references

### coacharchive-com
- url: https://www.coacharchive.com/
- snapshot: TODO
- type: dedicated-reference-site
- tier: 3
- title: Vintage Coach Library
- accessed: 2026-05-01
- notes: 344 styles documented; covers 1980s–early-2000s "golden era." Affiliate-funded. Largest external structured reference located.

### vintagecoachdatabase
- url: https://www.vintagecoachdatabase.com/
- type: searchable-database
- tier: 3
- accessed: 2026-05-01

### vintagecoachie
- url: https://www.vintagecoachie.com/
- subpages:
  - https://www.vintagecoachie.com/style-guide
  - https://www.vintagecoachie.com/style-guide/coach-leatherware
- type: collector-blog
- tier: 3
- accessed: 2026-05-01

### vintagecoachbags-authenticity
- url: http://vintagecoachbags.com/index.php/authenticity-guide/
- type: dealer-authentication-guide
- tier: 3
- accessed: 2026-05-01

### coachbagrehab-dating
- url: http://coachbagrehab.blogspot.com/2012/04/guide-to-dates-of-vintage-coach-bags.html
- type: collector-blog
- tier: 3
- accessed: 2026-05-01
- notes: Most specific Tier 3 source on serial-number format change at 1994.

### coachbagrehab-style-numbers
- url: http://coachbagrehab.blogspot.com/2012/05/coach-style-numbers-and-photos.html
- type: collector-blog
- tier: 3
- accessed: 2026-05-01
- notes: Page renders poorly via WebFetch; revisit in browser.

### yourgreatfinds-collectors-guide
- url: https://yourgreatfinds.net/blogs/news/collectors-guide-to-vintage-coach-bags
- type: dealer-blog
- tier: 3
- accessed: 2026-05-01
- notes: Most exhaustive single free list of vintage Coach styles with style numbers (~80 models named).

### essexfashionhouse-serials
- url: https://essexfashionhouse.com/blogs/news/the-ultimate-guide-to-coach-serial-numbers
- type: dealer-blog
- tier: 3
- accessed: 2026-05-01

### lovetoknow-coach-serials
- url: https://www.lovetoknow.com/life/style/coach-purse-serial-numbers
- type: editorial-howto
- tier: 3
- accessed: 2026-05-01

### shopgoodwill-serials
- url: https://blog.shopgoodwill.com/english/coach-purse-serial-number-guide
- type: reseller-blog
- tier: 3
- accessed: 2026-05-01

### thriftyrunner-authenticating
- url: https://thriftyrunner.blogspot.com/2016/01/authenticating-coach.html
- type: collector-blog
- tier: 3
- accessed: 2026-05-01

### valentinasvault-creed
- url: http://valentinasvault.blogspot.com/2013/09/the-mystery-revealedthe-coach-creed.html
- type: collector-blog
- tier: 3
- accessed: 2026-05-01

### bagforum-creed-history
- url: http://www.thebagforum.com/coach-bags/2816-authentic-vs-fake-history-coach-creed-serial-s.html
- type: forum-thread
- tier: 3
- accessed: 2026-05-01

### purseforum-vintage-coach
- url: https://forum.purseblog.com/threads/vintage-coach.122565/
- type: forum-thread
- tier: 3
- accessed: 2026-05-01
- notes: General vintage Coach megathread.

### purseforum-authenticate-coach
- url: https://forum.purseblog.com/threads/authenticate-this-coach-see-first-post-for-format.889527/
- type: forum-thread
- tier: 3
- accessed: 2026-05-01
- notes: Active authentication thread; >500-post members authenticate.

### purseforum-vintage-date-codes
- url: https://forum.purseblog.com/threads/vintage-coach-date-codes.1048132/
- type: forum-thread
- tier: 3
- accessed: 2026-05-01
- notes: Most-cited single thread on date code mechanics.

### purseforum-vintage-catalogs
- url: https://forum.purseblog.com/threads/vintage-coach-catalogs.1045341/
- type: forum-thread
- tier: 3
- accessed: 2026-05-01
- notes: Member-uploaded catalog scans. Returns 403 to headless WebFetch; browser only.

### purseforum-coach-rehab-rescue
- url: https://forum.purseblog.com/threads/coach-rehab-and-rescue-club.833400/
- type: forum-thread
- tier: 3
- accessed: 2026-05-01

### purseforum-costa-rica
- url: https://forum.purseblog.com/threads/what-years-were-coach-made-in-costa-rica.333490/
- type: forum-thread
- tier: 3
- accessed: 2026-05-01
- notes: "P" factory letter = Costa Rica reference.

### purseforum-made-in-usa
- url: https://forum.purseblog.com/threads/did-coach-ever-make-bags-in-made-in-usa-or-was-it-always-china.281987/
- type: forum-thread
- tier: 3
- accessed: 2026-05-01

### pinterest-ilexberry-catalog-pages
- url: https://www.pinterest.com/ilexberry/vintage-coach-catalogue-pages/
- type: pinterest-board
- tier: 3
- accessed: 2026-05-01
- notes: ~300 pinned catalog pages from various sources; verify per-pin origins.

### pinterest-shershegoes-styles
- url: https://www.pinterest.com/shershegoes/vintage-coach-bag-styles/
- type: pinterest-board
- tier: 3
- accessed: 2026-05-01

---

## Tier 3 — leads only (use as starting points, never as sole authority)

### wikipedia-cashin
- url: https://en.wikipedia.org/wiki/Bonnie_Cashin
- type: wiki
- tier: 3
- accessed: 2026-05-01

### wikipedia-miles-cahn
- url: https://en.wikipedia.org/wiki/Miles_Cahn
- type: wiki
- tier: 3
- accessed: 2026-05-01

### wikipedia-coach-ny
- url: https://en.wikipedia.org/wiki/Coach_New_York
- type: wiki
- tier: 3
- accessed: 2026-05-01

---

## Tier 4 — listing-photo evidence (never authority for facts)

### ebay-vintage-coach
- url: https://www.ebay.com/b/Coach-Vintage-Bags-Handbags-Cases/74962/bn_8223573
- type: marketplace-category
- tier: 4
- accessed: 2026-05-01

### etsy-vintage-coach
- url: https://www.etsy.com/market/vintage_coach_soho
- type: marketplace-category
- tier: 4
- accessed: 2026-05-01

---

## Verification queue

Before any of these is cited in a `models/` or `authentication/` entry:
1. Live-fetch URL, confirm 200.
2. Capture archive.org snapshot if not already done.
3. Update `snapshot:` field above.
4. Add `status: live` or `status: archived-only` field.

This will be done in batch after Phase 1 scaffolding stabilizes.
