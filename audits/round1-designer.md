---
title: "Round 1 review — Typography & layout designer"
slug: round1-designer
status: draft
confidence: log
sources: []
persona: Typography / layout / whitespace designer
---

1. **Enable old-style figures and contextual ligatures on the serif**
   *Rationale: Typography.* Cormorant Garamond ships with old-style figures and discretionary ligatures that are inert under the current `font-feature-settings: 'kern' 1, 'liga' 1`. Add `h1, h2, h3, h4, h5, h6 { font-feature-settings: 'kern' 1, 'liga' 1, 'dlig' 1, 'onum' 1; }` in `BaseLayout.astro` so dates and serial numbers in headings (1941, 1962–1974) render with the proportional, baseline-mingling figures appropriate to a 1980s catalog register. Pair with `font-variant-numeric: oldstyle-nums proportional-nums;` for cleaner support across browsers.

2. **Stop loading the italic Cormorant weight you never use**
   *Rationale: Typography.* The Google Fonts URL requests `0,400;0,500;0,600;1,400` but the global stylesheet has zero `font-style: italic` on Cormorant — only the Inter blockquote uses italic, and that falls back to faux-Inter italic. Either drop `1,400` from the Google Fonts request to shave ~25 KB and one fetch, or actually use Cormorant italic for `blockquote` and `em` inside `.history-body p` so pulled quotations carry the serif voice instead of Inter's mechanical slant.

3. **Tighten heading leading and add display-optical sizing**
   *Rationale: Typography.* `h1` clamps to 2.75rem with `line-height: 1.15`, which on a 44px display heading still reads slightly airy for Cormorant's tall ascenders. Drop to `line-height: 1.05` for `h1`, `1.12` for `h2`, and add `font-variation-settings` or `text-wrap: balance;` to `h1, h2` so two-line headings break optically. Also lower `letter-spacing` on `h1` from `0.005em` to `-0.005em` — Cormorant at display sizes wants slight tracking compression.

4. **Establish a true modular scale instead of three independent clamps**
   *Rationale: Hierarchy.* Current sizes are 2rem→2.75rem (h1), 1.4→1.75 (h2), 1.15→1.35 (h3), 1rem body — the desktop ratios are 2.75/1.75/1.35/1 = 1.57/1.30/1.35, which is uneven. Adopt a 1.250 (major third) scale anchored at 1rem body: h3 = 1.25rem, h2 = 1.563rem, h1 = 1.953rem (mobile) clamping to 2.441rem desktop. The visual rhythm becomes predictable and the page feels composed rather than tuned-by-eye.

5. **Switch body to a serif on long-read pages**
   *Rationale: Print-feel.* The brand register you're cultivating (Coach 1981–1994 catalog) is overwhelmingly serif body copy. Inter is correct for nav, dt labels, chips, and wizard controls, but the lede paragraphs and `.history-body` prose would carry far more editorial weight in Cormorant Garamond at 1.0625rem with `line-height: 1.55`. Scope it: add `.lede, article > p, .history-body p { font-family: 'Cormorant Garamond', Georgia, serif; }` and keep Inter for `dl`, controls, meta, and chrome.

6. **Raise body line-height on mobile and lower it on desktop**
   *Rationale: Rhythm.* The current rule inverts good practice: `line-height: 1.6` mobile, `1.65` desktop. On narrow phone columns (max ~64ch but typically 30-35ch in practice), looser leading helps; on a 64ch desktop block, 1.65 makes paragraphs float. Set `body { line-height: 1.7; }` and `@media (min-width: 720px) { body { line-height: 1.55; } }`. Reading rhythm tightens at width.

7. **Constrain the body measure to 62ch and indent dl beyond it**
   *Rationale: Density.* `max-width: 64ch` sits at the upper bound of comfortable measure for sans-serif at 16px (Bringhurst's 45–75ch). The `dl` blocks on model pages already feel cramped because their two-column grid (`minmax(8em, 1fr) 2fr`) lives inside the 64ch frame. Either drop body to `60ch` or bleed the `dl` to `max-width: 72ch` via negative margin (`margin-inline: -4ch;` at ≥720px) so spec lists breathe wider than prose.

8. **Add a visible baseline grid via vertical rhythm units**
   *Rationale: Rhythm.* Spacing currently mixes `em`, `rem`, and ad-hoc values (`1.75em 0 0.5em` on headings, `1.5rem 0` on tables, `1rem` everywhere else). Define `--rhythm: 1.5rem;` in `:root` and reset all vertical margins to multiples (`0.5`, `1`, `1.5`, `2`, `3` × rhythm). Applied to `h1` (2× top), `h2` (1.5× top), `h3` (1× top), `p + p` (0.5×), and `dl` (1× both), the page acquires the silent grid that 1980s catalogs achieved with metal furniture.

9. **Soften the paper background and warm the ink**
   *Rationale: Color.* `--paper: #f5efe4` against `--ink: #1f1a14` is a ~13.7:1 contrast — fine for accessibility, but cold for a "bone-tinted matte stock" target. Push paper warmer to `#f3ebd9` and shift ink to `#231d14` (warmer brown-black, ~12.4:1) so the page reads less "off-white printer paper" and more "uncoated 80lb cover." Test the Cormorant on the new pair — black ink on cream wants more brown than gray.

10. **Replace pure-brass underlines with a thinner, two-tone link treatment**
    *Rationale: Color.* `text-decoration-thickness: 1px` with `text-decoration-color: var(--brass-soft)` is a fine attempt, but at 16px Inter the underline competes with the brass body color for attention. Drop thickness to `from-font` or `0.5px` (browsers will floor to 1px on low-DPI but render thinner on retina), set `text-underline-offset: 0.22em`, and switch the resting color to `var(--ink-soft)` with brass only on `:hover`/`:focus-visible`. Citation-dense paragraphs will calm down by ~40%.

11. **Give `dl` spec lists a typographic rule, not a box**
    *Rationale: Print-feel.* The current `dl` styling — top and bottom borders plus a `--surface` fill — reads as a UI panel, not an editorial spec block. Strip the background, keep only a 1px `--brass-soft` rule top and bottom, drop padding to `0.75rem 0`, and set `dt` in Cormorant small-caps via `font-variant: small-caps; letter-spacing: 0.06em; font-size: 0.85rem;`. The result reads like a museum object label rather than an admin dashboard row.

12. **Add tabular-nums to all year/serial contexts**
    *Rationale: Typography.* `dt` carries `font-variant-numeric: tabular-nums` but `dd`, `.era-range`, `.era-count`, history `h3` (year-led), and chip dates do not. The 99-event timeline especially reads jittery because year prefixes shift width. Add `.history-body h3, .era-range, .era-count, dd, .card-meta { font-variant-numeric: tabular-nums; }` so 1962, 1974, 1985 align column-true.

13. **Reduce card-grid gap and align cards to a stricter rhythm**
    *Rationale: Whitespace.* `.card-grid { gap: 0.75rem; }` with `padding: 0.95rem 1rem` per card on a 3-up desktop layout produces visually cramped horizontal gutters relative to the inner padding. Either bump gap to `1rem` and inner padding to `1.1rem 1.25rem`, or shrink padding to match — the gutter and the content inset should be in approximate parity (the "frame width = matte width" museum convention).

14. **Replace the wizard's progress pip with a stepped indicator**
    *Rationale: Hierarchy.* The single brass-filled pip + text "Step 3 of 6" reads as a download bar rather than a wayfinding element. Render six discrete pips (flex children with `gap: 0.25rem`), filling completed steps in `--brass`, the current step in `--bridle`, and remaining in `--surface-line`. The user gains spatial memory of "where am I in the flow" — a hallmark of well-designed multi-step forms.

15. **Differentiate primary CTA from neutral choices in the wizard**
    *Rationale: Color.* Every `.wiz-options button` and `.wiz-controls button` shares the same `--paper` background with a brass-on-hover treatment. There is no visual primary action — back, restart, and the six choice buttons all weigh the same. Style `.wiz-controls .restart` (or whichever is destructive) with a quieter `color: var(--ink-quiet); border: none;` text-button, and reserve `border: 1px solid var(--bridle); background: var(--bridle); color: var(--paper);` for the eventual "View full verdict" or primary continue action.

16. **Establish quieter h3 treatment in the history timeline**
    *Rationale: Density.* `.history-body h3` carries a 3px brass left border and a continuous 1px gutter rule for the body — over 99 events that's 99 brass strokes stacking down the page, which dominates the eye more than the events themselves. Drop the border to `2px solid var(--brass-soft)` and set `h3` font-weight to 600 in Cormorant. The brass should be a quiet citation tick, not a recurring brand mark.

17. **Add scroll-margin-top equal to the sticky header height**
    *Rationale: Mobile.* `scroll-margin-top: 1rem` on `.history-body h2/h3` is too small if any sticky header arrives later, and on iOS Safari the URL bar adds 50-60px when collapsing. Set `scroll-margin-top: clamp(1rem, 8vh, 4rem);` so anchor jumps from the era cards land cleanly with the heading visible — currently the heading kisses the top edge.

18. **Set `:root { color-scheme: light; }` and tune the `::selection` color**
    *Rationale: Color.* No `color-scheme` declaration means the browser's form controls (the wizard's native buttons in some UAs, scrollbars on Windows) drift toward neutral gray rather than picking up the warm palette. Add `color-scheme: light;` and `::selection { background: rgba(138, 106, 43, 0.25); color: var(--ink); }` so highlight selections stay in the brass-on-paper world.

19. **Tighten the noscript / footnote / lede typographic family**
    *Rationale: Hierarchy.* `.lede` (1.05–1.08rem), `.footnote` (0.88rem), `.step-hint` (0.95rem), `.wiz-trail` (0.85rem), and `.card-meta` (0.85rem) currently exist as five hand-tuned sizes between 0.85 and 1.08rem. Collapse to three roles — `--text-lede: 1.0625rem`, `--text-meta: 0.875rem`, `--text-micro: 0.78rem` — and apply consistently. The page acquires fewer "voices" and the hierarchy becomes legible.

20. **Add a serif drop-cap to the lede on home and section landings**
    *Rationale: Print-feel.* The home page and section indices (`/models/`, `/catalogs/`, `/history/`) all open with a `.lede` paragraph. A single drop-cap — `.lede::first-letter { font-family: 'Cormorant Garamond', serif; font-size: 3.4em; line-height: 0.85; float: left; padding: 0.05em 0.08em 0 0; color: var(--brass-deep); font-weight: 500; }` — anchors the page in catalog-editorial register without any other ornamentation. Combined with rec #5 (serif body), the home reads like a chapter opener rather than a sitemap.

21. **Replace `border-radius: 3px/4px` with `2px` or zero throughout**
    *Rationale: Print-feel.* Cards (3px), `dl` (none), wizard panel (4px), code (2px), pre (4px), chip (999px), buttons (3px) — six distinct corner radii suggest a UI kit, not a printed reference. Print artifacts have hairline corners; pick `2px` for surfaces (cards, wizard, pre, code, controls), keep `999px` only on the chip pill, and remove the `3px`/`4px` mix. The page will feel more letterpress, less Bootstrap.
