---
title: Launch checklist
slug: launch
status: published
confidence: log
---

# Launch checklist — private → public flip

The site is private (Cloudflare Access) until every gate below is green.
Each item is a hard gate; a single un-ticked box blocks the public flip.
This file is the runbook — work it top-to-bottom, tick boxes as gates
pass, and do not flip Access off until every gate in §1–§6 is green.

Current published model count: **18** (target: 30). See `models/`.

---

## 1. Content gates

- [ ] At least 30 model entries published (currently 18; track count here on each pass)
- [ ] Every model entry passes the pre-publish checklist (`STYLE.md` §8):
  - [ ] Every claim has `confidence:` and `sources:`
  - [ ] Every source ID resolves in `sources/registry.md`
  - [ ] Every external URL has an archive.org snapshot recorded
  - [ ] Two-source rule satisfied (or a single Tier-1 primary)
  - [ ] Cross-checked against at least one community source for contradictions; contradictions resolved or marked `disputed`
- [ ] Every reproduced third-party image has `rights:` frontmatter and a citation by source ID
- [ ] No `tentative` claims appear anywhere without a visible badge on the rendered page
- [ ] No Tier-4 listing photos used as authority for any fact (Tier 4 = market data and dated photo evidence only)
- [ ] Authentication decision tree page exists and is linked from the homepage
- [ ] At least one model entry per era: E1, E2, E3, E4, E5
- [ ] Counterfeit catalog framework page published at `authentication/counterfeits/index.md`
- [ ] `errata.md` published at repo root and rendered on the site

## 2. Build / infra gates

- [ ] `npm run build` passes with zero schema validation errors from `src/content/config.ts`
- [ ] `npm run check` passes (TypeScript + content-collection check)
- [ ] All internal links resolve (no 404s in the built `dist/`)
- [ ] `robots.txt` present and correct for the chosen launch mode (see §8)
- [ ] `sitemap.xml` present and includes every published entry
- [ ] Custom domain configured: DNS resolves, TLS cert valid, www → apex (or chosen) redirect works
- [ ] Pagefind static search index builds and returns results for sample queries (`willis`, `cashin`, `creed`, `turnlock`)
- [ ] Cloudflare Pages deploy succeeds against the production branch

## 3. Source / citation gates

- [ ] Coach 2000 S-1 prospectus pulled and registered (per `RETRIEVAL.md` Operation 1; Tier 1 entry `coach-s1-2000` added to `sources/registry.md`)
- [ ] At least 5 archive.org snapshots captured for top Tier 1/2 sources
- [ ] `sources/registry.md` has no `snapshot: TODO` for any Tier 1 source
- [ ] At least one dated catalog scan referenced in `catalogs/` (Operation 4 or 5 from `RETRIEVAL.md`)
- [ ] Every `confidence: confirmed` claim is backed by at least two sources (build-time check from `PLAN.md` §Tooling)

## 4. Legal / rights gates

- [ ] Image-rights audit complete: every image in `images/` has `rights:` set (`brand`, `fair-use-commentary`, `community`, or `original`)
- [ ] Any reproduced image without a clear rights status is removed before flip
- [ ] License visible on the site: CC BY-SA for original prose, surfaced in footer
- [ ] Brand-published images credited explicitly with `rights: brand` and the registry source ID (per `STYLE.md` §6)
- [ ] `sources/permissions.md` exists and records every community photo mirrored with explicit permission

## 5. Operational gates

- [ ] Cloudflare Access policy removed (the actual flip — do this last)
- [ ] Submission form for reader-contributed photos working, OR explicitly deferred to Phase 4 with a stub page explaining the deferral
- [ ] `errata.md` linked from the site footer
- [ ] Contact / second-opinion route working (email or form) for corrections

## 6. Soft launch vs hard launch

The flip is not binary. Three separable steps, in order, each reversible:

1. **Private** — current state. Cloudflare Access enforces single-user auth. `robots.txt` allows nothing (moot, since Access blocks crawlers).
2. **Unlisted** — Access policy removed, but `robots.txt` disallows all and `<meta name="robots" content="noindex">` is set site-wide. Anyone with a URL can read; search engines do not index. Use this to soak the site for a week or two, share with a small group of vintage-Coach community readers for fact-check feedback, and watch for breakage.
3. **Public** — `robots.txt` opens to allowed bots, `noindex` meta removed, `sitemap.xml` submitted to Google Search Console and Bing Webmaster.

Pick the mode for the flip and check the matching box:

- [ ] Flip target chosen: `private+password` | `unlisted` | `public-indexed`
- [ ] `robots.txt` configured to match the chosen target
- [ ] `noindex` meta tag set (unlisted) or removed (public-indexed) site-wide
- [ ] If public-indexed: `sitemap.xml` submitted to Google Search Console

## 7. Post-flip immediate actions

Run within 24 hours of flipping public:

- [ ] Capture archive.org snapshot of every public coachbook URL (script the sitemap → web.archive.org/save loop)
- [ ] Notify any community archivists whose links are referenced (PurseForum uploaders, coacharchive.com operator, etc.) per `sources/permissions.md`
- [ ] Update `memory/MEMORY.md` to reflect public status and the chosen launch mode
- [ ] Run a fresh `STYLE.md` §8 pre-publish audit on a random sample of 5 entries (the periodic-audit cadence starts the day after launch)
- [ ] Open a `audits/YYYY-Q<n>.md` entry for the launch audit

## 8. Reversal plan

If something breaks post-flip:

- [ ] Cloudflare Access policy can be re-enabled in <5 minutes — the flip is reversible
- [ ] Document the trigger in `errata.md` with a note pointing at the rollback
- [ ] Hold at unlisted (step 2) until the issue is resolved before re-attempting public-indexed
