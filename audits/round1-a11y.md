---
title: "Round 1 review — Accessibility & mobile specialist"
slug: round1-a11y
status: draft
confidence: log
sources: []
persona: Accessibility & mobile specialist
---

1. **Raise body-link contrast above 4.5:1**
   `--brass #8a6a2b` on `--paper #f5efe4` measures ~4.4:1, which fails WCAG 2.2 SC 1.4.3 (Contrast Minimum) for body text — and links count as body text, not UI. Darken the default link color to `--brass-deep #6b5021` (~6.5:1) or push `--brass` to roughly `#7a5d22`. The token is defined at `src/layouts/BaseLayout.astro:57` and consumed by the `a { color: var(--brass) }` rule at line 134. Rationale tag: `Contrast`.

2. **Fix `--ink-quiet` body-text contrast failure**
   `--ink-quiet #7a6f5e` on `--paper` is ~3.7:1, which fails SC 1.4.3 for any text under 18pt regular / 14pt bold. It is currently used for `.card-meta` (`BaseLayout.astro:334`), `footer.site-footer` (line 275), `.footnote` on the wizard, `.era-card .era-count`, the `.back-to-top` link, and the `.sub` line inside wizard option buttons. Reserve `--ink-quiet` for decorative dividers only and switch all those text uses to `--ink-soft #4a4035` (~9.5:1). Rationale tag: `Contrast`.

3. **Strengthen the link-underline color**
   `--brass-soft #b89a5e` as the `text-decoration-color` measures ~2.4:1 against the paper background, failing SC 1.4.11 (Non-text Contrast, 3:1) for the only non-color link affordance besides color itself. With the brass link color so close to body ink, the underline is the primary cue that text is interactive. Set `text-decoration-color: currentColor` (or use `--brass-deep`) on `a` at `BaseLayout.astro:139`. Rationale tag: `Contrast`.

4. **Promote site-header nav links to a real landmark with an accessible name**
   `header.site-header nav` at `BaseLayout.astro:404-411` has no `aria-label`, so a screen reader announces two unnamed `navigation` landmarks (this one plus the wizard / history page TOC). Add `aria-label="Primary"` to the header `<nav>` and `aria-label="Footer"` to anything similar. Same applies to the history TOC's `aria-label="Timeline navigation"` (good) versus the unlabeled header nav. SC 1.3.1 / 2.4.6. Rationale tag: `Semantics`.

5. **Header nav links fail underline-on-hover-only contrast**
   `header.site-header nav a` at `BaseLayout.astro:264-267` strips the underline (`text-decoration: none`) and uses `--ink-soft` color, identical to surrounding header text apart from being inside a `<nav>`. SC 1.4.1 (Use of Color) requires that interactivity not be conveyed by color alone. Add a persistent visual cue: either a faint underline, an underline on focus *and* hover, or move them into a clearly card-like row. Rationale tag: `Semantics`.

6. **Wizard buttons need real focus-visible affordance, not just a border-color swap**
   `ul.wiz-options button:focus-visible` at `wizard/index.astro:144` only swaps border from `--surface-line #d8ccae` to `--brass #8a6a2b` and tints the background. The two border colors against `--paper` measure ~1.4:1 against each other, so a sighted keyboard user cannot tell which option is focused if the global `:focus-visible` outline is overridden. Confirm the global 2px brass outline at `BaseLayout.astro:381-385` actually applies (it should — these are buttons), and add `outline-offset: 3px` plus a subtle box-shadow on the focused option so it is unambiguous. SC 2.4.7 / 2.4.13. Rationale tag: `Focus`.

7. **Announce wizard step changes to screen readers**
   The wizard re-renders `#wizard.innerHTML` on every choice (`wizard/index.astro:436, 542`) and then calls `wiz.scrollIntoView` (line 524). Nothing tells AT that the question changed; VoiceOver/NVDA stay parked on the now-detached previous button. Wrap the step body in `<div role="region" aria-live="polite" aria-atomic="false">` and, after rendering, move focus to the new `<h2>` via `tabindex="-1"` + `.focus()`. Otherwise the wizard is unusable with a screen reader. SC 4.1.3 (Status Messages), SC 2.4.3 (Focus Order). Rationale tag: `Screen-reader`.

8. **Convert wizard option buttons into a labeled fieldset of radios (or keep buttons but add roving group semantics)**
   The wizard presents one logically-exclusive choice per step but renders six independent `<button type="button">`s in a `<ul>` (`wizard/index.astro:455-468`). Screen readers announce "button" six times with no group context — no "1 of 4," no "radiogroup." Either: (a) wrap the options in `<fieldset><legend>{step.title}</legend>` with `<input type="radio">` per option and a separate Next button, or (b) keep buttons but add `role="group" aria-labelledby="step-title-id"` to the `<ul>` and reflect position via `aria-posinset`/`aria-setsize`. SC 1.3.1, 4.1.2. Rationale tag: `Screen-reader`.

9. **Disabled Back button must remain perceivable**
   `.wiz-controls button[disabled] { opacity: 0.4 }` at `wizard/index.astro:183` drops effective contrast below 3:1 and removes any pointer cue. AT will still announce "dimmed" / "disabled," but the visible state should also pass SC 1.4.11 against the button background. Use a desaturated label color above 3:1 (e.g., `--ink-quiet` on `--paper-soft`) plus a dashed border instead of opacity. Rationale tag: `Contrast`.

10. **Buttons and option cards must hit the 44×44 px touch target floor**
    WCAG 2.2 SC 2.5.8 (Target Size, Minimum) requires interactive controls be at least 24×24 CSS px, and Apple/Google guidance is 44×44. The wizard option `<button>` inherits roughly 40–48 px depending on label length (`padding: 0.85rem 1rem` at line 133), but the `.wiz-controls` Back/Start buttons use `padding: 0.45rem 0.9rem` (line 169) which renders ~28 px tall — borderline-failing on a phone. The era-card `.era-count` stacked layout inside the 5-up history grid also can shrink below 44 px on narrow tablets. Set `min-height: 44px` on every `<button>` and `.card-grid a`. Rationale tag: `Touch-target`.

11. **History `back-to-top` link is a 28-px tap target with poor contrast**
    `.back-to-top a` at `history.astro:305-312` uses `color: var(--ink-quiet)` (fails text contrast — see #2), `font-size: 0.85rem`, and inline-block padding `0.3rem 0.6rem` totaling ~26 px — below SC 2.5.8's 24 px floor with no surrounding spacing buffer (it sits flush right). Bump padding to `0.6rem 0.9rem`, switch color to `--ink-soft`, and ensure 24 px clear space on every side. Rationale tag: `Touch-target`.

12. **Skip-link technique is brittle and not always perceivable**
    `.skip-link { position: absolute; left: -9999px }` at `BaseLayout.astro:388-399` is the legacy off-screen pattern; on focus it appears top-left at `0.5rem` over the `--ink` background — fine — but the link is positioned relative to `<body>` which has `max-width: 64ch` and `margin-inline: auto`, so on wide screens it appears inside the centered column rather than at the actual top-left of the viewport. Switch to `transform: translateY(-200%)` revealed via `:focus { transform: translateY(0) }`, with `position: fixed; top: 0; left: 0`, so it always lands at the viewport corner. SC 2.4.1. Rationale tag: `Keyboard`.

13. **Provide visible heading anchors on the 99 history `<h3>` events**
    `history.astro` injects 99 era-bucket links pointing at `#slug` anchors (line 79), but the `<h3>` targets themselves have no visible "link to this entry" affordance — only a `:target` background tint at `history.astro:293-298`. A keyboard or AT user who arrives via deep-link gets the tint, but cannot copy a permalink. Add a `<a href="#slug" class="heading-anchor" aria-label="Permalink to {text}">¶</a>` rendered inside each `<h3>` via a Markdown remark plugin (rehype-autolink-headings). SC 2.4.5 (Multiple Ways). Rationale tag: `Keyboard`.

14. **Era-card information order hurts screen-reader scanning**
    Each `.era-card` at `history.astro:79-89` reads: code (E1), label, range, count, blurb. A screen reader announces "E1 Pre-Cashin 1941 to 1961 5 events Founding as…" — the visually-prominent code is read first, but for AT users the label should come first. Reorder DOM so `<strong>{label}</strong>` precedes `.era-code`, and either visually re-order with grid `order:` (acceptable per SC 1.3.2) or move the code into a visually-hidden span when it's redundant with the label. Rationale tag: `Screen-reader`.

15. **Sections-toggle `<details>` removes the disclosure triangle without a replacement**
    `history.astro:204` strips `::-webkit-details-marker` and substitutes a CSS-generated `▸`/`▾` glyph in `::before`. This works for sighted users but the glyph isn't an `<img alt>` or `aria-expanded` change — `<details>` natively conveys expanded state, but the marker removal also breaks Firefox's default focus ring on the summary in some versions. Verify focus ring still appears on `summary:focus-visible` (the global `:focus-visible` rule should cascade), and add `summary { display: list-item }` back conditionally so the native marker survives if CSS fails. Rationale tag: `Keyboard`.

16. **Add `prefers-reduced-motion` guard around the wizard's smooth-scroll**
    `wiz.scrollIntoView({ behavior: 'smooth', block: 'start' })` at `wizard/index.astro:524` and the `transition: width 200ms ease` on the progress pip (line 89) ignore user motion preferences. SC 2.3.3 (Animation from Interactions, AAA but a documented vestibular trigger). Wrap with `const prefersReduced = matchMedia('(prefers-reduced-motion: reduce)').matches; wiz.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth' });` and add `@media (prefers-reduced-motion: reduce) { .wiz-progress .pip span { transition: none } a { transition: none } }` to the global stylesheet. Rationale tag: `Motion`.

17. **Wizard verdict region needs role and live announcement**
    `.wiz-verdict` (`wizard/index.astro:598`) is the payoff of the entire flow but is rendered as a plain `<div>`. Screen readers, having already missed every step transition (#7), also miss the verdict. Add `role="region" aria-labelledby="verdict-heading"`, give the `verdict-tag` an `id` and an `aria-live="polite"` wrapper, and ensure the verdict's first element receives focus. The current `<span class="verdict-tag">` contains semantic verdict info but is just a span — it should be the visually-styled `<h2>` of the region. SC 1.3.1, 4.1.3. Rationale tag: `Screen-reader`.

18. **`<dl>` two-column grid breaks visual association on zoom**
    `dl { grid-template-columns: minmax(8em, 1fr) 2fr }` at `BaseLayout.astro:198-207` collapses to single column only at `max-width: 540px`. Between 540 px and a 200% browser zoom on a phone, dt/dd pairs can wrap such that a long `dt` column pushes its `dd` to the next visual row, decoupling them. SC 1.4.10 (Reflow) requires content remain usable at 320 CSS px equivalent (which 200% zoom on a 640 px viewport simulates). Use `display: grid; grid-template-columns: max-content 1fr; column-gap: 1rem` with `dt { grid-column: 1 } dd { grid-column: 2 }` so each pair shares a row, or fall back to flex-wrap pairs. Rationale tag: `Mobile-only`.

19. **`<noscript>` fallback link to decision tree is good — but the visible "Loading…" placeholder is a lie when JS is disabled**
    `wizard/index.astro:29-32` renders `<div class="wiz-intro"><p>Loading…</p></div>` inside `#wizard`. With JS off, the noscript warning appears but the "Loading…" copy never resolves and confuses AT users (who hear "Loading" and wait). Move "Loading…" inside a `<noscript>`-inverse pattern: `<div id="wizard" hidden>…</div>` revealed by inline JS, and let `<noscript>` provide the only fallback content. Or set `aria-busy="true"` on `#wizard` initially and clear it on first render. SC 4.1.3. Rationale tag: `Screen-reader`.

20. **Confidence chips on the home page rely on color alone**
    `index.astro:93-100` and the chip styles at `BaseLayout.astro:340-367` distinguish `confirmed` / `likely` / `tentative` / `disputed` by background tint and border. The text label inside each chip ("confirmed," etc.) does pass — good — but the contrast of `data-confidence='likely'` (`color: var(--ink-soft)` on a 5%-brass tint) is essentially the same swatch as a plain `.chip` (no data attribute), so a sighted user cannot distinguish "likely" from "tentative" at a glance, only by reading the lowercase label. SC 1.4.1 (Use of Color) is satisfied because the label is text, but the visual taxonomy fails its own design intent. Differentiate by adding a small leading icon or border-style change (solid / dashed / dotted) per confidence level so the system is parseable without reading. Rationale tag: `Contrast`.
