# Research stream H — USPTO Coach trademark and patent search

Compiled 2026-05-01. Goal: locate USPTO records for Coach Leatherware
hardware patents (turnlock, dogleash) and the COACH / COACH
LEATHERWARE / CASHIN CARRY trademark history.

**Status: partial.** Direct USPTO database queries via WebSearch
returned only the USPTO landing pages, not specific Coach records.
Live USPTO database queries via WebFetch were not attempted because
USPTO's TSDR and Patent Center require interactive form submissions
not feasible from the headless browser. **Action item: user runs the
queries directly at the URLs below** and feeds results back.

---

## Sources

- **H1** — USPTO TSDR (Trademark Status & Document Retrieval): https://tsdr.uspto.gov/
- **H2** — USPTO Patent Search: https://www.uspto.gov/patents/search
- **H3** — Google Patents (often the best-indexed search interface for old USPTO records): https://patents.google.com/
- **H4** — Wayward Collection / vintage dealer note on Cashin turnlock introduction: https://waywardcollection.com/sold-out-59/1960s-bonnie-cashin-coach-leather-kisslock-tote (Tier 3 dealer)
- **H5** — Vintage Fashion Guild, Bonnie Cashin label entry: https://vintagefashionguild.org/resources/item/label/cashin-bonnie/ (Tier 2 reference)

---

## Major new fact discovered (independent of USPTO data)

From WebSearch result citing Vintage Fashion Guild / Cashin label
references:

> "In 1964, Cashin introduced a brass turn lock/toggle fastening that
> was featured on her designs produced by the Cahns as well as on all
> garment and accessory collections produced by a range of
> manufacturers in the US and abroad, including Philip Sills, Meyers,
> Crescendoe-Superb, HBA, and D. Klein."

**Implications:**
1. **The turnlock is 1964, not 1962.** The Cashin Carry tote launched
   Fall 1962 (Cashin's inaugural Coach collection); the turnlock
   came two years later. This corrects the loose timeline that
   conflates "Cashin arrives 1962" with "turnlock arrives 1962."
2. **The turnlock was not Coach-exclusive.** Cashin used the same
   fastener across her collections for Sills, Meyers, Crescendoe-
   Superb, HBA, and D. Klein. Coach is the manufacturer most
   associated with it because of longevity and brand visibility,
   not exclusivity.
3. **A patent (design or utility) likely exists** under Cashin's
   name or assigned to Coach Leatherware / Gail Leather Products
   for the turnlock — this is an open USPTO research item.

**Confidence**: `likely` from H5 (Vintage Fashion Guild + the dealer
context). Upgrades to `confirmed` if a USPTO patent record or a
1964 catalog/press piece is located.

**Updates required across the archive:**
- `designers/bonnie-cashin.md` — change turnlock introduction from
  generic "Coach tenure" to specifically 1964; add the
  "non-exclusive" note.
- `models/cashin-carry.md` — note that the very first Cashin Carry
  totes (Fall 1962, Spring 1963) likely had different hardware than
  the post-1964 turnlock.
- `research/C-cashin.md` — refine the design-vocabulary table.
- `research/B-history.md` — add 1964 turnlock-introduction event.

---

## Cashin's other early-1960s Coach designs (from same source)

Per H5 / Vintage Fashion Guild:

> "her classic designs for Gail's Coach division during the early
> 1960s included the shopping bag tote, the bucket bag, shoulder
> bag and a clutch-style purse with a removable shoulder strap"

These are four early-1960s Cashin Coach silhouettes. Cross-reference
to known model names:
- **Shopping bag tote** = the Cashin Carry tote (most likely).
- **Bucket bag** = ancestor to later Coach bucket bags.
- **Shoulder bag** = generic; might map to several later silhouettes.
- **Clutch-style purse with removable shoulder strap** = ancestor to
  the convertible-clutch silhouette listed in research/D-models.md.

This is potentially a `confirmed`-level designer-attribution anchor
for those four silhouettes. Cross-check against UCLA Cashin papers
finding aid (`ucla-cashin-papers`) — the Cashin contract should
specify scope.

---

## USPTO queries to run (manual)

### Trademark Status & Document Retrieval (TSDR)

URL: https://tsdr.uspto.gov/

Search each:
- "COACH" (wordmark) — registration date is the canonical first
  commercial use anchor for the Coach brand.
- "COACH LEATHERWARE" — likely earlier than the bare "COACH" mark.
- "CASHIN CARRY" or "CASHIN-CARRY" — if registered, would settle
  the 1962 launch date precisely.

For each match, capture:
- Serial number, registration number
- Filing date, registration date, first-use date
- Owner/assignee chain
- Drawing/specimen
- Status (live, dead, abandoned)

### Patent search

URL: https://www.uspto.gov/patents/search OR https://patents.google.com/

Queries:
- Inventor: "Bonnie Cashin"
- Assignee: "Coach Leatherware" / "Gail Leather Products" / "Coach Inc"
- Classification: USPC 150 (Purses, wallets, and protective covers)
  for design patents
- Keywords: "turn lock" + "handbag", "toggle closure" + "purse"

Specific candidates likely to exist:
1. A 1960s design patent on the turnlock (Cashin or Coach assignee).
2. A design patent on the dogleash clip variant Coach uses.
3. Trademark for the "COACH LEATHERWARE" wordmark with creed-style
   typeface.

---

## Open verification items

1. Run TSDR queries; record serial numbers and first-use dates.
2. Run patent search; identify the turnlock patent (if any).
3. Confirm whether Cashin's turnlock was patented, and to whom
   assigned (Cashin personally, Sills, Coach, or Gail Leather).
4. Determine when the "COACH LEATHERWARE" wordmark was first
   registered vs first used in commerce — the TSDR record will
   anchor the early-creed wording era boundary.
5. Verify the four early-1960s Cashin Coach designs (shopping tote,
   bucket, shoulder, convertible clutch) against UCLA Cashin papers
   (model attribution).
