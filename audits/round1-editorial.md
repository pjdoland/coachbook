---
title: "Round 1 review — Editorial director"
slug: round1-editorial
status: draft
confidence: log
sources: []
persona: Editorial director / publication architect
---

1. **Give the home page a thesis, not a directory.**
   The current lede ("A primary-source reference archive… Every claim citation-tagged; every source registered.") describes the methodology but not the publication. Replace with two short paragraphs: what the vintage Coach story actually is (a Manhattan workshop that became, briefly, the most disciplined leather-goods house in America) and why this archive exists (the community runs on folklore; this is the corrective). Methodology becomes a footnote, not the front door. Location: `/Users/pjdoland/Repos/coachbook/src/pages/index.astro` (lines 23–27).
   Tag: `Narrative`

2. **Lead with an "If you only read three things" panel.**
   A 75-model, 12-authentication-topic, 99-event-timeline archive begs for an editor's curated path. Add a top-of-home section ("Start here") that hand-picks three pieces — e.g., the Cashin designer entry, the creed-formats page, the Willis model — with a one-sentence editorial tease for each. The current "Authenticate a bag" / "Browse" cards are utilities; this is where the publication's voice can speak. Location: `/Users/pjdoland/Repos/coachbook/src/pages/index.astro` (insert before the "Authenticate a bag" section).
   Tag: `Onboarding`

3. **Reframe the home page as departments, not categories.**
   The current sections — "Authenticate a bag," "Browse," "Confidence," "Reference" — mix utility, methodology, and content. A reader reading cover-to-cover sees no hierarchy. Restructure into editorial departments: "The Story" (history, designers), "The Bags" (models, colors, catalogs), "Authenticate" (wizard, decision tree, topics), "About this archive" (PLAN/STYLE/errata/bibliography). Each gets a one-sentence dek. Location: `/Users/pjdoland/Repos/coachbook/src/pages/index.astro`.
   Tag: `Hierarchy`

4. **Promote the era cards from history navigation to a publication-wide spine.**
   The five-up era card grid on the history page is the strongest piece of editorial design on the site — it's the only place E1–E5 feel like chapters rather than database codes. Lift this same component to the home page as the primary "way in": each card a chapter cover, each linking not just to the timeline but also to era-scoped views of models, colors, and authentication topics. The era is the spine of this publication; treat it as such everywhere. Location: `/Users/pjdoland/Repos/coachbook/src/pages/history.astro` (extract era-card pattern); add to `index.astro`.
   Tag: `Narrative`

5. **Write five short era-introduction essays and surface them on every era page.**
   The "Era summary" block in `history/timeline.md` (lines 38–82) is good prose but buried in a 1,242-line page. Lift each era's two-paragraph summary into a standalone short essay (`/history/eras/cashin/`, `/history/eras/early-nyc/`, etc.) used as the chapter intro on the timeline, prepended to the relevant model-index filtered views, and linked from era-tagged model pages ("Read the Cashin-era introduction"). This is the connective tissue between database and narrative.
   Tag: `Missing-piece`

6. **Add a featured-piece slot that rotates.**
   Reference sites that reward deep reading have a "this week" or "currently featured" slot. Even on a static, low-cadence archive, a single hand-curated featured entry — "This month: the 1996–1997 Source Book and what it tells us about the late Willis" — signals editorial attention. It also gives a reason to come back. Location: home page, between thesis and departments. Update by editing one frontmatter field on a featured entry plus a single home-page tag.
   Tag: `Coherence`

7. **Cross-link the Willis (and every model) into the surrounding narrative.**
   The Willis page is methodologically excellent and editorially isolated. It sits inside the Classic NYC era but doesn't link to the era introduction, the timeline events that bracket it (1985 Sara Lee, 1996 Krakoff), the creed-format page that explains its serial scheme, or the Cashin entry that explains why Willis is *not* a Cashin design. Add a "Read in context" sidebar at the end of every model page: era intro, two adjacent timeline events, primary authentication topic, related designers. Location: `/Users/pjdoland/Repos/coachbook/src/pages/models/[slug].astro`.
   Tag: `Cross-linking`

8. **Make the models index navigable by era and by silhouette, not just A–Z.**
   `models/index.astro` lines 5–9 sort alphabetically. Anderson next to Avenue next to Baxter is a database; it is not how anyone shops, collects, or reads. Add toggleable views: by era (with the era-card spine from #4), by closure (turnlock / zip / drawstring), by status (in-archive flagship vs. long-tail). Keep alphabetical as a fallback. Location: `/Users/pjdoland/Repos/coachbook/src/pages/models/index.astro`.
   Tag: `Hierarchy`

9. **Give the models index a curatorial intro that names the canon.**
   Seventy-five entries with no narrative framing reads as inventory. Replace the current one-sentence lede with an editor's note: "Of the seventy-five models documented here, six define the vintage Coach silhouette vocabulary — Cashin Carry, Court, Stewardess, Willis, Sheridan, Madison. The remaining sixty-nine extend, miniaturize, or revise those." Then visually mark the canonical six in the grid. Location: `/Users/pjdoland/Repos/coachbook/src/pages/models/index.astro` (lines 13–19) and the grid markup.
   Tag: `Onboarding`

10. **Tighten the home-page Confidence section into a colophon footer note.**
    The Confidence chip explainer (lines 89–102 of `index.astro`) is methodology that lives, deservedly, on every page already (chip styling in `BaseLayout.astro`). On the home page it pre-empts the content. Move it to a one-line "About the chips" link in the footer or to a dedicated `/about/method/` page. The home page should sell readers on the publication first; method second. Location: `/Users/pjdoland/Repos/coachbook/src/pages/index.astro` (lines 89–102).
   Tag: `Hierarchy`

11. **Build a proper masthead and colophon.**
    The footer currently reads "Vintage Coach archive — primary-source reference for the 1941–2002 NYC era. / Not affiliated with Coach, Inc." That's a disclaimer, not a colophon. Add an `/about/` page covering: who is writing this and from what vantage; the editorial standard (two-source rule, four confidence tiers); the source-tier definitions; the scope decisions (why 2002 is the cutoff, why E5 is contrast-only); how to flag corrections. Cite `PLAN.md` and `STYLE.md` from there. The home page links to the raw markdown on GitHub — that's developer-facing, not reader-facing. Location: new `/Users/pjdoland/Repos/coachbook/src/pages/about/index.astro`; update footer in `BaseLayout.astro`.
   Tag: `Missing-piece`

12. **Reframe the authentication landing page around what the reader has in their hand.**
    The current authentication index reads "Topic-by-topic authentication reference. Combine multiple checks…" then dumps an alphabetized topic list. Lead instead with the reader's situation: "You have a bag. You don't know if it's real. Start here." Then offer three explicit on-ramps — the wizard (5 minutes), the decision tree (printable single page), and the era-keyed matrix (deep reference). The matrix is the publication's signature artifact; build the index around it rather than around the alphabetized topic list. Location: `/Users/pjdoland/Repos/coachbook/src/pages/authentication/index.astro` (lines 14–40).
    Tag: `Voice-consistency`

13. **Ship the era-by-feature authentication matrix as an actual table, not a topic list.**
    PLAN.md §"Era-keyed authentication matrix" (lines 73–98) is the editorial centerpiece — twelve features × five eras, each cell a reference. The current `/authentication/` page lists topic pages alphabetically and never renders the matrix. Build it: a table with eras as columns and features as rows, each cell linking to the relevant detailed page. This is the page that distinguishes coachbook from every other vintage-Coach blog. Location: new component within `/Users/pjdoland/Repos/coachbook/src/pages/authentication/index.astro`.
    Tag: `Missing-piece`

14. **Soften the wizard's tone at the threshold.**
    The wizard intro reads "Walk through the authentication flow one question at a time. The wizard tracks era-consistency across the answers and flags mismatches. Verdicts cite the relevant authentication topics for full evidence — this is a navigation tool, not a final answer." That's three sentences of caveat before the reader has done anything. Open instead with the promise — "Five questions, two minutes, an era-consistent verdict you can act on" — then keep the disclaimer as a sub-line. The disclaimer is correct; its placement undercuts the very feature it introduces. Location: `/Users/pjdoland/Repos/coachbook/src/pages/wizard/index.astro` (lines 11–17).
    Tag: `Voice-consistency`

15. **Bring the editorial discipline of the timeline events to the model-page Description sections.**
    The timeline's event entries — date headline, one paragraph of prose, confidence and sources as structured metadata — are tight and scannable. Model pages by contrast open with a long descriptive paragraph (Willis: "The Willis is the flagship flap-front shoulder bag of Coach's Classic NYC era — small enough to read as a personal bag…") that mixes editorial framing, dimensions, hardware notes, and authentication tells. Standardize: every model opens with one editor's-voice paragraph (≤ 60 words), then a structured spec block, then "History," "Variants," "Authentication," "Read in context." The Willis is too good to bury. Location: `/Users/pjdoland/Repos/coachbook/models/willis.md` and the broader model-content convention.
    Tag: `Pacing`

16. **Resolve the prose voice between cataloged metadata and editorial commentary.**
    STYLE.md §1 demands "concise, factual, no purple prose" and bans "iconic," "timeless," "coveted." The Willis page complies but the home page lede invokes "The Cashin years through the Krakoff transition," and the era card blurbs lean editorial ("the original Coach silhouettes," "peak heritage rhetoric"). These editorial flourishes are *good*, and the publication needs them — but STYLE.md currently disallows them. Either expand the style guide to distinguish editor's-voice (home page, era intros, featured pieces) from reference-voice (model entries, authentication pages), or pull the existing flourishes back. Inconsistency is the problem, not which side wins. Location: `/Users/pjdoland/Repos/coachbook/STYLE.md` §1; `/Users/pjdoland/Repos/coachbook/src/pages/history.astro` lines 30–34.
    Tag: `Voice-consistency`

17. **Add a "Disputes" department as a first-class destination.**
    Disputes are buried at the bottom of `history/timeline.md` (line 1188) and per-claim inside model frontmatter. They are also the most intellectually interesting content on the site — a Sheridan launched 1992 vs. 1993, "Manhattan Leather Bags" debunked, the single-digit-year ambiguity. Promote them: a `/disputes/` index page that lists every disputed claim with both positions and the archive's resolution. Editorially this signals confidence (we know what we don't know); narratively it gives the deep reader a destination; SEO-wise it captures the exact phrases people search. Location: new `/Users/pjdoland/Repos/coachbook/src/pages/disputes/index.astro`; aggregate from frontmatter `confidence: disputed` entries.
    Tag: `Missing-piece`

18. **Rewrite the timeline's lead to set up the whole publication, not just the timeline.**
    The current lead ("This timeline tracks Coach from its 1941 founding…") is functional. Because the timeline is the publication's longest narrative arc, this lead does double duty as the historical backbone for everything else. Open with the through-line — for example, "Coach's vintage period (1941–2002) is the story of a small Manhattan workshop becoming, almost by accident, America's most disciplined leather-goods house — and then, deliberately, becoming something else." Then the methodology sentence. The reader who lands here from a model page deserves the why, not just the what. Location: `/Users/pjdoland/Repos/coachbook/history/timeline.md` lines 28–34.
    Tag: `Narrative`

19. **Add inter-era transition prose, not just era headers.**
    The timeline jumps between era-summary paragraphs and dated event entries. What's missing is the editorial transition — one paragraph at the seam between Cashin and Classic NYC explaining what changed when she left; one between Classic NYC and Transition explaining what Sara Lee bought and what Krakoff was hired to undo. These are the four hinges in the whole vintage-Coach story. They are absent. Location: `/Users/pjdoland/Repos/coachbook/history/timeline.md`, between era-summary and timeline sections, and at era boundaries within the timeline.
    Tag: `Pacing`

20. **Build a proper bibliography page on-site, not a GitHub link.**
    The home page links `Bibliography` to `https://github.com/pjdoland/coachbook/blob/main/bibliography.md` — that's an editorial admission that the publication ends at the markdown tree. For a reference site, the bibliography is a destination, not an appendix. Render it on-site at `/bibliography/`: grouped by tier (primary documents, trade press, museum collections, community sources), with each entry annotated in the editor's voice ("Stephanie Lake's 2016 monograph remains the only scholarly Cashin biography; we cite it for biographical fact but not for Coach-specific design attribution, where it leans on community sources"). Same treatment for `errata.md` and `market.md`. Location: new `/Users/pjdoland/Repos/coachbook/src/pages/bibliography/index.astro`, `errata/index.astro`, `market/index.astro`; update home-page links in `index.astro` (lines 107–114).
    Tag: `Coherence`
