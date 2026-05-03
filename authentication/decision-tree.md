---
title: Authentication decision tree
slug: decision-tree
status: published
confidence: tentative
sources:
  - coachbagrehab-dating
  - vintagecoachie
  - vintagecoachbags-authenticity
  - thriftyrunner-authenticating
  - valentinasvault-creed
  - bagforum-creed-history
  - lovetoknow-coach-serials
  - essexfashionhouse-serials
  - shopgoodwill-serials
  - purseforum-authenticate-coach
  - purseforum-vintage-date-codes
  - purseforum-costa-rica
  - vintagefashionguild-cashin
  - coach-10k-fiscal-2003
---

## Lead

This is the printable one-page flow for "I have a bag and want to know if
it is real." Each step branches to the relevant detailed page in
`/authentication/` for full evidence and caveats. **No single check is
sufficient**; era-consistent answers across creed, country, serial,
hardware, and construction are required before a bag can :qbe called
authentic.

## Step 1 — Is there a leather creed patch?

See [`creed-formats.md`](./creed-formats.md) for the full era-by-era
breakdown.

- **No creed, but a small metal interior tag** → likely E2a (early 1960s).
  Continue with no-creed authentication via leather, hardware, and
  construction; creed-based steps below do not apply.
- **No creed, no metal tag, just a leather stamp inside** → likely E2b
  through early E2c (late 1960s through early 1970s). Same caveat — skip
  creed-based steps and rely on hardware, leather, and lining.
- **Yes, a leather creed with a serial** → continue to Step 2.

## Step 2 — Does the creed read "COACH LEATHERWARE"?

See [`creed-formats.md`](./creed-formats.md) §"Key textual anchor".

- **Yes, "COACH" with small-caps "LEATHERWARE" stamped beneath** → pre-1994
  (E3 or E4 era). Continue to Step 3.
- **No, just "COACH" (LEATHERWARE absent)** → 1994 or later (E5 or modern).
  Continue to Step 3.

## Step 3 — What does the country-of-origin marking say?

See [`country-of-origin.md`](./country-of-origin.md) for the full
progression and the 2003 10-K-confirmed sourcing list.

- **"Made in New York City, U.S.A."** → 1970s through circa 1980 (early E3).
  Should pair with LEATHERWARE wording.
- **"Made in United States" / "Made in U.S.A." with LEATHERWARE present**
  → 1980 through 1994 (late E3 into E4).
- **"Made in Costa Rica" / "Hungary" / "Turkey" / "Dominican Republic" /
  "Mexico"** → 1994 through early 2000s (E5). Should pair with the
  LEATHERWARE-absent creed.
- **"Made in Italy"** → exotic-skin or Madison / Gramercy line; Italy is
  line-specific, not era-specific.
- **"Made in Puerto Rico, U.S.A."** → through April 2002 (Coach's Lares
  facility, the last in-house plant, ceased production April 2002 per
  `coach-10k-fiscal-2003`).
- **"Handcrafted in China"** → 2000s onward; post-vintage for this archive.
- **Era-inconsistent combination** (e.g., LEATHERWARE wording with "Made in
  China," or "Made in New York City" with an offshore origin) → fake or
  replacement creed. See `country-of-origin.md` §"Era-inconsistency = fake".

Continue to Step 4.

## Step 4 — What is the serial format?

See [`serial-numbers.md`](./serial-numbers.md) for the full decoder and
the single-digit-year ambiguity discussion.

- **All digits, e.g. `xxx-xxxx` (1970s) or `xxxx-xxx` (1980s)** → pre-1994.
  Should pair with LEATHERWARE wording and US origin.
- **Letter-digit-letter-dash-digits, e.g. `B6D-9927`** → 1994 onward. The
  year position is single-digit (1994–2003) or double-digit (2004+).
  - **Single-digit-year ambiguity flag**: `B6` resolves to **1996 or 2006**
    depending on decade. Resolve via creed wording (LEATHERWARE absent for
    both readings, but transitional 1994–1996 pieces sometimes retain it),
    country of origin, hardware, and lining. Never publish a year reading
    from the code alone.
- **No serial at all** → era-context dependent. Pre-1980 bags, small
  accessories, and some 1990s pebbled-leather models legitimately shipped
  without serials. Absence is not by itself a fake tell; era expectations
  come first.

Continue to Step 5.

## Step 5 — Hardware

See [`hardware.md`](./hardware.md) for the full discussion of brass,
turnlock construction, and the dogleash clip.

- **Magnet test**: brass is non-magnetic. **Magnet sticks → likely fake or
  plated-steel replacement hardware.** This is the single fastest
  authentication check.
- **Weight and color**: solid brass is heavy for its size and develops a
  warm honey-to-amber patina at handled spots. Light weight, silver/grey
  underlayer where the surface has worn, or uniform "factory-new" plating
  on a 1980s bag are fake tells.
- **"COACH" stamping**: appears on later turnlocks and dogleash clips.
  **Absence on Cashin-era (E2) or early E3 pieces is expected**, not a
  tell. Stamped-out (rather than cast) turnlock bars and casting seams on
  the dogleash body are stronger fake tells than stamping presence or
  absence.

Continue to Step 6.

## Step 6 — Construction

See [`leather.md`](./leather.md) for material and edge treatment, and
[`lining.md`](./lining.md) and [`zippers.md`](./zippers.md) for further
diagnostics.

- **Edges**: raw or burnished on vintage Coach. **Glossy painted edges on
  a bag claiming pre-1995 manufacture are a strong fake tell.**
- **Smell**: glove-tanned leather has a distinct neatsfoot/leather odor.
  Acetone, strong plastic, or chemical-solvent smells are fake signals.
- **Lining**: unlined raw-suede interiors are correct for many NYC-era
  bags (Court, Willis, etc.); heat-cut polyester pockets on a pre-1995 bag
  are a fake tell. See `lining.md`.
- **Zipper maker**: should be era-consistent with the creed. YKK on an E2
  or early-E3 creed, or Talon on an offshore E5 creed, is a mismatch worth
  investigating. See `zippers.md`.

Continue to Step 7.

## Step 7 — Aggregate the red flags

- **0 red flags + era-consistent across all checks** → likely authentic.
- **1 red flag in a single dimension** (e.g., a wrong-era hangtag alone, or
  a lone replacement zipper) → possible replacement component, not a fake
  on this signal alone.
- **2 or more red flags in independent dimensions** → fake or Frankenbag.
  Do not buy without significant additional verification.

### Replacement-component caveat

Coach Repair (consolidated at the **Jacksonville, Florida facility from
July 1999** per `coach-10k-fiscal-2003`) replaced creeds, hardware,
hangtags, zippers, and other components during legitimate restoration
work through the program's lifetime. **A "wrong era" component is not
automatically a fake** — it may be an authentic bag that went through
Coach Repair. The caveat applies in isolation; once two independent
dimensions disagree, the replacement explanation no longer covers the
evidence.

## When in doubt — community authentication

If the seven-step flow above does not resolve the bag, post the canonical
photo set to PurseForum's "Authenticate This COACH" thread
(`purseforum-authenticate-coach`). The photo set required for any
second-opinion request is listed in
[`counterfeits/index.md`](./counterfeits/index.md): full bag (front, back,
both sides); creed close-up with a ruler in frame; turnlock front and
back; zipper pull and tape stamp; lining and any interior tags;
country-of-origin stamp; hangtag both sides; base and feet.

## Sources

All IDs resolve in `sources/registry.md`. Tier 1 unless noted otherwise.

- `coach-10k-fiscal-2003` — Tier 1. Coach, Inc. 10-K for fiscal year ended
  June 28, 2003. Source for the Lares (Puerto Rico) April 2002 closure and
  the July 1999 Jacksonville repair-operation consolidation.
- `vintagefashionguild-cashin` — Tier 2. Vintage Fashion Guild Cashin
  label entry; turnlock provenance.
- `coachbagrehab-dating`, `vintagecoachie`, `vintagecoachbags-authenticity`,
  `thriftyrunner-authenticating`, `valentinasvault-creed`,
  `bagforum-creed-history` — Tier 3. Creed wording, edge treatment,
  hardware, and smell tells.
- `lovetoknow-coach-serials`, `essexfashionhouse-serials`,
  `shopgoodwill-serials` — Tier 3. Pre-1994 dash-position sub-formats and
  post-1994 decoder.
- `purseforum-authenticate-coach`, `purseforum-vintage-date-codes` — Tier
  3. Community authentication thread and date-code mechanics.
- `purseforum-costa-rica` — Tier 3. Source for `P` = Costa Rica factory
  letter.
