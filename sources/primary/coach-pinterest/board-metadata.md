# Coach official "From the Archives" Pinterest board — capture notes

Captured 2026-05-02 via Playwright MCP. URL: https://www.pinterest.com/coach/from-the-archives/

## Board metadata (Tier 1 brand-published)

- **88 Pins** (per page title and footer count)
- **By Coach** (official account)
- **Board age**: 14y at capture (board created circa 2012)
- **Board description**: "The Coach Archive houses more than 20,000 items, including bags, accessories and catalogs dating back to our founding in 1941."

## Capture limitations

Without a logged-in Pinterest session, only ~8 unique pins from the board are visible to scraped HTML; the remainder are gated behind the login wall. The visible pins also intermix with Pinterest's "Related interests" widget (which surfaces non-board content like life-coach blogs, Michael Kors belts, Coach cologne) — not all visible images are board members.

## Verified visible pins from the board

These pin IDs and image URLs are confirmed from `coach`'s board (alt-text references vintage Coach):

### Pin 271341946268580730
- URL: https://www.pinterest.com/pin/271341946268580730/
- Image: https://i.pinimg.com/originals/b5/fe/51/b5fe51fb84cdc33b2abc8f26963555b6.jpg
- Alt-text references: "Coach 9966", "Coach Court Bag" — period bag reference

### Pin 519884350736789524
- URL: https://www.pinterest.com/pin/519884350736789524/
- Image: https://i.pinimg.com/originals/d9/51/7d/d9517df7289b72ab6f5c583cd24e33ef.jpg
- Alt-text references: "Spring 1993 Coach Bags", "Fall 1992 Coach Bags", "Coach Sheridan Bag", "Coach Catalog", "Vintage Coach Catalog Photos"
- **Notable**: brand-published reference to 1992 and 1993 catalog imagery — relevant to the Sheridan 1992 vs 1993 disputed launch year (per `models/sheridan-stewart.md`)

### Pin 85990674130058340
- URL: https://www.pinterest.com/pin/85990674130058340/
- Image: https://i.pinimg.com/originals/10/fa/a8/10faa8407c4db9c92b98e477959d94e8.jpg
- Alt-text: "Vintage Coach pre 1995 label (and creed)"
- **Notable**: brand-published reference confirming the pre-1995 creed wordmark style as a recognizable era-anchor — corroborates `authentication/creed-formats.md`'s "LEATHERWARE through 1994" framing

### Pin 182958803586922750
- URL: https://www.pinterest.com/pin/182958803586922750/
- Image: https://i.pinimg.com/originals/62/c4/37/62c437adf83558eecf1568006cde467a.jpg
- Alt-text references: "COACH Grommet Leather Duffle Bag", "Coach Bleecker Bucket"

## Action items

- Login to Pinterest with a personal account (not Coach's) and re-scrape to retrieve all 88 pin URLs. Pinterest does not offer a public, login-free API for board content.
- Once captured, ingest each pin's source URL (most pins on a brand-curated board link to original Coach blog posts, ad scans, or catalog pages) and add to `sources/registry.md` as `coach-pinterest-<pin-id>`.
- Pin 519884350736789524 (1992/1993 catalog reference) is highest-value: an embedded image of a Coach 1992 or 1993 catalog page would primary-source the disputed Sheridan launch year.

## Source attribution

The board itself is registered as `coach-pinterest-archives` (Tier 1 brand-published). This file's per-pin findings are sub-references under that ID; the four pin IDs above can be cited as `coach-pinterest-<pin-id>` once verified individually.
