---
title: "Round 2 votes — Accessibility & mobile specialist"
slug: round2-votes-a11y
status: draft
confidence: log
sources: []
persona: Accessibility & mobile specialist
---

| id | vote | reason |
|---|---|---|
| ux-1 | yes | Filter input + era pills aid keyboard users navigating 94 cards; ensure input has a visible label and pills are real buttons with aria-pressed. |
| ux-2 | yes | Single primary CTA reduces decision load on small screens and is clearer for screen-reader linearization. |
| ux-3 | yes | Putting the high-intent action in persistent nav helps mobile users; keep it as a real link/button with discernible text and adequate tap target (44x44). |
| ux-4 | yes | Breadcrumbs are a recognized a11y pattern (WCAG 2.4.8); use nav[aria-label="Breadcrumb"] and aria-current="page" on the last item. |
| ux-5 | yes | Era grouping aids cognitive load and screen-reader scanning via region landmarks; keep an A–Z toggle so users with different mental models retain choice. |
| ux-6 | yes | Putting the trail above the question reduces vertical thumb-scrolling on mobile and surfaces context earlier in DOM order for AT users. |
| ux-7 | yes | Critical for inclusive UX — users with low vision or worn creeds should not be forced into false-precision answers. |
| ux-8 | yes | Exposing reasoning improves transparency and helps screen-reader users understand the verdict; ensure the panel uses semantic list markup. |
| ux-9 | yes | Sticky strip helps mobile re-orientation; keep height minimal (avoid eating viewport), ensure focus visible, and respect prefers-reduced-motion if animated. |
| ux-10 | yes | Real h2 boundaries improve screen-reader heading navigation (rotor) — currently the timeline is one long flat region. |
| ux-11 | yes | Linked human-readable citations are far better for screen readers than opaque code tokens; ensure link text is descriptive, not the bare ID. |
| ux-12 | yes | Related-models block adds keyboard-navigable escape routes from dead-end pages. |
| ux-13 | yes | Cross-links increase escape paths; ensure CTAs have descriptive text ("Authenticate a Willis" not "Click here"). |
| ux-14 | yes | Moving the legend out of prime real estate is fine for a11y so long as the legend remains reachable from each chip (consider aria-describedby or a tooltip with keyboard support). |
| ux-15 | yes | Demoting contributor-doc links keeps focus order on visitor tasks; helpful for screen-reader users. |
| ux-16 | yes | Images aid recognition for many users, but every image must carry meaningful alt text; decorative-only fallback is unacceptable here since images are content. |
| ux-17 | yes | Reducing entry-point ambiguity reduces cognitive load for everyone, especially users with cognitive disabilities. |
| ux-18 | yes | A tagline gives screen-reader users immediate context on deep pages; hiding under 540px is fine if it remains in the accessible name elsewhere (e.g., title or skip-link). |
| ux-19 | yes | Decade grouping gives more H2 landmarks for AT navigation; reverse-chronological matches user intent. |
| ux-20 | yes | A persistent corrections link is itself an accessibility win (feedback channel); ensure link text is "Report a correction," not an icon-only button. |
| designer-1 | yes | Old-style figures are a typographic preference, not an a11y concern; tabular-nums elsewhere (rec 12) handles alignment needs. |
| designer-2 | yes | Smaller font payload speeds mobile load on slow networks — a real a11y/perf win. |
| designer-3 | no | Dropping h1 line-height to 1.05 risks descender/ascender collisions and reduces readability for users with low vision; WCAG 1.4.12 recommends >=1.5 for body, and headings should not go below ~1.1. Keep generous leading. |
| designer-4 | yes | Predictable modular scale aids users who rely on text resizing and zoom; ensure all sizes still scale via rem. |
| designer-5 | yes | Serif body on long-read pages is fine for sighted users; ensure font loads with font-display: swap and that the serif has adequate x-height at 1.0625rem. Keep Inter for chrome where its ink trap helps small sizes. |
| designer-6 | no | Inverting the rule reduces line-height on desktop to 1.55 — borderline against WCAG 1.4.12 (1.5x recommended for body). Keep desktop at >=1.6. |
| designer-7 | yes | 60ch is well within Bringhurst's range and eases line-tracking for dyslexic readers; bleeding dl wider is fine since it's structured data, not prose. |
| designer-8 | yes | Vertical rhythm aids scannability and is neutral-to-positive for a11y. |
| designer-9 | no | Need to verify the new pair (#231d14 on #f3ebd9) maintains >=4.5:1 (likely fine at ~12.4:1 as claimed) — vote yes if verified, but flag: any future "ink-quiet" or hover state must also be re-checked against the warmer paper. Conditional yes; recompute all derived contrast pairs. |
| designer-10 | no | Dropping underline thickness to 0.5px / from-font and removing brass color until hover degrades link affordance for low-vision users and fails WCAG 1.4.1 (color alone) if underline becomes too thin to perceive. Keep a minimum 1px underline and a non-color cue at rest. |
| designer-11 | yes | Stripping the panel chrome is fine; small-caps at 0.85rem must still meet contrast and shouldn't drop dt below ~14px effective size. |
| designer-12 | yes | Tabular nums improve scanning for everyone, especially users with dyscalculia. |
| designer-13 | yes | Whitespace tuning is a11y-neutral; ensure tap targets on cards remain >=44px on mobile. |
| designer-14 | yes | Discrete pip indicator is more accessible than a single bar; expose as a real progress element or list with aria-current="step" and visible step labels. Don't rely on color alone — use shape/fill differences. |
| designer-15 | yes | Establishing a clear primary action improves keyboard tab-order signaling; ensure the styled primary still has visible focus state and >=3:1 contrast against adjacent surfaces. |
| designer-16 | yes | Reducing visual noise across 99 events helps low-vision and cognitive-load users. |
| designer-17 | yes | Critical mobile fix — iOS Safari URL-bar collapse genuinely strands anchor targets. |
| designer-18 | yes | color-scheme: light prevents form controls drifting; ::selection contrast must still meet 3:1 between selection bg and text. |
| designer-19 | yes | Fewer micro-sizes reduces cognitive overhead; ensure 0.78rem micro-text is reserved for non-essential meta and never falls below ~12.5px effective. |
| designer-20 | no | Drop-cap with float: left breaks reading order for screen readers in some implementations and is awkward at small viewports; ::first-letter is mostly safe but the suggested 3.4em size will collide on narrow phones. If kept, scope to >=720px and test with VoiceOver/NVDA. |
| designer-21 | yes | Corner-radius normalization is a11y-neutral. |
| copywriter-1 | yes | Shorter lede aids readers with cognitive disabilities and ESL users. |
| copywriter-2 | yes | A standfirst gives the H1 context — useful for screen-reader users landing cold. |
| copywriter-3 | yes | dl is more semantic than a run-on paragraph; helps screen-reader chip lookup. |
| copywriter-4 | yes | Reducing redundancy declutters AT output. |
| copywriter-5 | yes | Cleaner label is easier to parse aurally. |
| copywriter-6 | yes | Eliminating duplicate copy reduces AT verbosity. |
| copywriter-7 | yes | Removing internal jargon ("Tier 3") aids comprehension for general readers. |
| copywriter-8 | yes | An on-page hint reduces dependence on memorizing the home-page legend. |
| copywriter-9 | yes | Voice change is a11y-neutral; rewrite is fine. |
| copywriter-10 | yes | Demoting D1 inline reduces cognitive interruption mid-paragraph. |
| copywriter-11 | yes | Clearer section heading aids screen-reader heading navigation. |
| copywriter-12 | yes | Promoting the safety message is an a11y/usability win — disclaimers should not be buried. |
| copywriter-13 | yes | "Walk through the questions" is plain language; better for low-literacy users. |
| copywriter-14 | yes | Tightening reduces cognitive load. |
| copywriter-15 | yes | Consistent question-form register helps screen-reader users predict step structure. |
| copywriter-16 | yes | Shorter option microcopy is easier to scan and reduces tap-target overflow on mobile. |
| copywriter-17 | yes | "Pattern" is plainer than "flow"; better aural comprehension. |
| copywriter-18 | yes | Plain-language verdict labels are more accessible than UI jargon. |
| copywriter-19 | yes | Tighter lede aids comprehension. |
| copywriter-20 | yes | Removing project jargon helps general readers. |
| copywriter-21 | yes | Plain-language chip labels are more accessible than wiki-jargon. |
| copywriter-22 | yes | Distinct meta lines aid screen-reader scanning of card lists. |
| librarian-1 | yes | First-class source pages create stable anchor targets and improve link affordance. |
| librarian-2 | yes | Hyperlinking inline cites is essential for keyboard users; ensure link text is descriptive (not bare ID) and tooltips are keyboard-accessible. |
| librarian-3 | yes | Build-time validation is a11y-neutral but prevents broken links, which is an a11y win. |
| librarian-4 | yes | One citation grammar reduces cognitive load and improves AT predictability. |
| librarian-5 | yes | Anchor-per-entry errata pages are far more accessible than a raw markdown blob. |
| librarian-6 | yes | Reconciling the chip enum is essential — every chip must have data-confidence so that color is not the only signal (WCAG 1.4.1). |
| librarian-7 | yes | Showing both era forms aids comprehension; ensure the parenthetical E-code is exposed to AT (not hidden via aria-hidden). |
| librarian-8 | yes | A11y-neutral data-integrity fix; correct tier classification benefits readers. |
| librarian-9 | yes | A11y-neutral; archival snapshots aid users who hit dead links. |
| librarian-10 | yes | A11y-neutral provenance fix. |
| librarian-11 | yes | Per-claim chips with linked sources improve transparency for all readers; ensure each chip is not color-only. |
| librarian-12 | yes | Same as 11. |
| librarian-13 | yes | Surfacing structured data benefits screen-reader users who currently get only prose. |
| librarian-14 | yes | A glossary of stream codes helps comprehension; ensure tooltips have keyboard equivalents (focus + visible expansion or details/summary). |
| librarian-15 | yes | Three-click provenance is an accessibility win for all users including AT. |
| librarian-16 | yes | A11y-neutral vocabulary discipline. |
| librarian-17 | yes | A11y-neutral data-validation fix. |
| librarian-18 | yes | A11y-neutral schema cleanup. |
| librarian-19 | yes | Tier histogram benefits readers including AT users; render as text not just visual bars, or include text equivalents. |
| librarian-20 | yes | A11y-neutral; machine-readable feeds are themselves an accessibility surface (e.g., feed readers). |
| librarian-21 | yes | A11y-neutral provenance fix. |
| collector-1 | yes | Photos are critical for sighted users — but every image MUST carry substantive alt text describing the diagnostic feature, not "creed photo." Without alt text this hurts blind users. Vote conditional on alt-text discipline. |
| collector-2 | yes | Reordering wizard is an a11y-neutral domain decision. |
| collector-3 | yes | Clearer microcopy aids comprehension. |
| collector-4 | yes | "I cannot read it" branch is an inclusive design must — same as ux-7. |
| collector-5 | yes | More accurate verdict language helps users make better decisions. |
| collector-6 | yes | A11y-neutral logic improvement. |
| collector-7 | yes | A11y-neutral content depth improvement. |
| collector-8 | yes | Photo recommendation conditional on alt text describing the visual diagnostic in words (so blind users still get the tell). |
| collector-9 | yes | Side-by-side comparison images need detailed alt text or a long-description (figure + figcaption + aria-describedby) so the kerning tell is verbalized. |
| collector-10 | yes | Tolerance for transitional bags is an inclusive design improvement. |
| collector-11 | yes | A11y-neutral worked example improves comprehension for all readers. |
| collector-12 | yes | A11y-neutral content-coverage gap. |
| collector-13 | yes | A11y-neutral content-coverage gap. |
| collector-14 | yes | Leading with the correction is also an a11y win — users with attention/cognitive disabilities benefit from the answer up front. |
| collector-15 | yes | Practical UV guidance aids comprehension; if images added, alt-text discipline applies. |
| collector-16 | yes | A11y-neutral domain content. |
| collector-17 | yes | Image grid conditional on alt text and figcaption per image. |
| collector-18 | yes | Disambiguator step reduces false verdicts — an inclusive-design win. |
| collector-19 | yes | Single canonical page reduces duplication; AT users avoid hearing the same paragraph repeatedly. |
| collector-20 | yes | Print-friendly checklist is itself an accessibility format (works offline, screen-reader friendly when semantic). Ensure print stylesheet preserves contrast. |
| collector-21 | yes | A11y-neutral domain content. |
| editorial-1 | yes | A thesis-led home reads better aurally than a directory; clearer for AT users. |
| editorial-2 | yes | Curated path benefits cognitive-load users; ensure it's a real list with descriptive link text. |
| editorial-3 | yes | Department structure with deks gives more landmarks for AT navigation. |
| editorial-4 | yes | Era cards as a spine: ensure each card is a real link with descriptive accessible name (not just an icon), and the grid is a list not a div soup. |
| editorial-5 | yes | Era essays add narrative; ensure they're linked from era-tagged pages with clear "Read the Cashin-era introduction" link text. |
| editorial-6 | no | Rotating featured slot creates a maintenance/staleness hazard, and if implemented as a carousel it's a known a11y antipattern. Static featured slot is fine; reject any auto-rotating implementation. |
| editorial-7 | yes | Cross-linking sidebars expand escape routes for keyboard/AT users. |
| editorial-8 | yes | Multiple navigable views match diverse mental models — a cognitive-accessibility win. Ensure toggles are real buttons with aria-pressed. |
| editorial-9 | yes | Curatorial framing aids comprehension; visual marking of canonical six must not rely on color alone. |
| editorial-10 | yes | Same a11y reasoning as ux-14 — moving methodology out of prime space is fine if reachable. |
| editorial-11 | yes | A real /about page is more accessible than markdown links to GitHub; benefits AT and low-bandwidth users. |
| editorial-12 | yes | Reframing around the reader's situation is a plain-language a11y win. |
| editorial-13 | yes | A real table is far more accessible than an alphabetized list; use proper th, scope, and caption. |
| editorial-14 | yes | Promise-first framing helps users with cognitive load decide whether to invest 2 minutes. |
| editorial-15 | yes | Standardized model-page structure improves AT predictability and heading-rotor navigation. |
| editorial-16 | yes | Resolving voice-rule inconsistency is a11y-neutral but reduces editorial drift. |
| editorial-17 | yes | Disputes index adds another navigable destination; ensure aggregate page has clear h1 and per-dispute h2s. |
| editorial-18 | yes | Through-line lead aids comprehension. |
| editorial-19 | yes | Transition prose aids comprehension at era seams. |
| editorial-20 | yes | On-site bibliography is more accessible than a GitHub markdown link; ensure annotated entries use semantic dl or list markup. |
