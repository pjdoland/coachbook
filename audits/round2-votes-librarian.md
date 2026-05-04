---
title: "Round 2 votes — Reference librarian"
slug: round2-votes-librarian
status: draft
confidence: log
sources: []
persona: Reference librarian
---

Voting through a citation-discipline / research-mode lens. "Yes" where the change improves source visibility, finding aids, accuracy of attribution, or the user's ability to verify a claim. "No" where the change introduces unsourced editorializing, reorders content for marketing rather than research utility, or asks the archive to publish claims it cannot stand behind.

| id | vote | reason |
|---|---|---|
| ux-1 | yes | Filter/search on a 94-card index is core finding-aid functionality. |
| ux-2 | no | Wizard is a derived tool; promoting it above the methodological lede misrepresents the archive's primary purpose as a reference. |
| ux-3 | no | Demoting Models and History to "browse" while the wizard becomes the headline action subordinates the reference to a triage utility. |
| ux-4 | yes | Breadcrumbs are standard finding-aid wayfinding; entry from search engines is the dominant arrival pattern. |
| ux-5 | yes | Era-grouping matches how the corpus is actually organized (frontmatter already carries era); A–Z toggle preserves the alphabetical access point. |
| ux-6 | yes | Prior-answers visibility is research-trail discipline; users should be able to audit their own input. |
| ux-7 | yes | "I cannot tell" is honest under-determination — exactly the answer a citation-disciplined tool should accept. |
| ux-8 | yes | Surfacing which answer triggered which flag converts a black-box verdict into auditable reasoning. |
| ux-9 | yes | Sticky era strip on a long timeline is standard chronology-navigation aid. |
| ux-10 | yes | Era H2s in the body match the TOC's mental model and provide stable deep-link targets. |
| ux-11 | yes | This is the highest-priority change in the entire audit set — opaque source IDs defeat the archive's whole citation premise. Resolve to human-readable linked citations. |
| ux-12 | yes | The `related` array is already in frontmatter and unrendered; surfacing it costs nothing and is core reference-network behavior. |
| ux-13 | yes | Cross-linking topic pages to exemplar models is standard subject-heading practice. |
| ux-14 | no | The confidence chip vocabulary is the editorial backbone; a casual reader needs to know what `confirmed` vs `tentative` means *before* they hit a detail page, not after. Keep on home. |
| ux-15 | no | PLAN, STYLE, Bibliography, and Errata are the source-of-truth documents for an archive's claims; demoting them to a footer "About" link weakens citation visibility. They are reader-facing for any researcher. |
| ux-16 | no | The archive must respect free-online-only constraint and copyright; speculative thumbnails risk uncited image use. Image policy needs a separate pass before adding a schema field. |
| ux-17 | yes | Three near-synonymous entry points is a finding-aid problem; clearer disambiguation helps. |
| ux-18 | yes | A coined-word brand without a tagline is opaque on deep-link entry. "Vintage Coach reference, 1941–2002" is descriptive and accurate. |
| ux-19 | no | Catalogs are primary sources; chronological ascending order matches archival convention. Decade headings are fine but reversing the sort prioritizes recency over historical sequence. |
| ux-20 | yes | A correction loop on every page is essential for an errata-disciplined archive. |
| designer-1 | yes | Old-style figures and proper numeric features improve legibility of the dates and serial numbers that dominate this archive. |
| designer-2 | yes | Don't load fonts you don't use; saves a fetch. Neutral. |
| designer-3 | yes | Typographic refinement; no citation impact. |
| designer-4 | yes | Predictable scale aids long-form reading. Neutral. |
| designer-5 | yes | Serif body on long-read pages matches the catalog register and is good for the 99-event timeline. |
| designer-6 | yes | Standard rhythm correction. Neutral. |
| designer-7 | yes | Constraining measure improves readability of long entries. |
| designer-8 | yes | Vertical rhythm grid; pure typography. Neutral. |
| designer-9 | yes | Warmer paper and ink fits the catalog target. Neutral. |
| designer-10 | yes | Citation-dense paragraphs (which dominate this archive) calm down with a thinner underline; this directly serves the reference-page reading experience. |
| designer-11 | yes | "Museum object label" register over "admin dashboard" matches the archive's editorial stance. |
| designer-12 | yes | Tabular nums on years/serials is essential for a chronology-heavy archive — column-true alignment of dates is research-grade typography. |
| designer-13 | yes | Visual rhythm only. Neutral. |
| designer-14 | yes | Wayfinding improvement in the wizard. |
| designer-15 | yes | Disambiguating destructive vs primary actions is good UI hygiene. |
| designer-16 | yes | 99 brass strokes do dominate; a calmer treatment serves the 99-event chronology. |
| designer-17 | yes | Anchor-jump landing is broken on mobile; this fixes it for deep-link-via-anchor research workflow. |
| designer-18 | yes | Color-scheme and selection color hygiene. Neutral. |
| designer-19 | yes | Collapsing five hand-tuned sizes to three roles aids hierarchy. Neutral. |
| designer-20 | no | Drop-caps are an editorial flourish unsuited to a reference archive's plain-prose register; they are also a known accessibility hazard for screen readers without careful handling. |
| designer-21 | yes | Consistent corner radius reads as a designed publication, not a UI kit. Neutral. |
| copywriter-1 | yes | Tighter lede is fine; "every claim is cited; every source is named" preserves the citation-discipline message. |
| copywriter-2 | yes | A short standfirst gives the H1 context without overpromising. |
| copywriter-3 | yes | Definition list for confidence chips is the right structure — they ARE definitions. |
| copywriter-4 | yes | Removes redundancy without losing meaning. |
| copywriter-5 | no | "Designers" alone misrepresents the section if it contains executives, archivists, and other figures. The honesty of "Designers and people" matches archival cataloging integrity. Better to fix the taxonomy than hide it behind a tidier label. |
| copywriter-6 | yes | Footer should not duplicate the lede verbatim. |
| copywriter-7 | no | Removing "Tier 3" from public-facing copy weakens the source-tier visibility that is the archive's distinguishing feature. The reader SHOULD see tier vocabulary; that's how the system works. Rephrase yes, but don't bury the tier system. |
| copywriter-8 | yes | A standfirst pointing at the chip legend is straightforward microcopy. |
| copywriter-9 | yes | "Flagship" is editorial puffery; the rewrite is more sourced and concrete. |
| copywriter-10 | yes | A Tier 3 community quote should not headline a model entry's lede; demoting it to a "Reception" subsection is correct citation hierarchy. |
| copywriter-11 | yes | "Re-releases vs. originals" is more findable and more accurate to the section's content. |
| copywriter-12 | yes | The "no single check proves" sentence is the most important caveat on the site; promoting it is correct. |
| copywriter-13 | yes | Microcopy. Neutral. |
| copywriter-14 | yes | Tightening but keeping the disclaimer is fine. |
| copywriter-15 | yes | Consistent question register across wizard steps is editorial discipline. |
| copywriter-16 | no | Moving "never publish a year from the code alone" out of the option microcopy and into a footnote is the wrong direction — that warning is exactly where a user is about to make the error. STYLE-guide rules embedded at the decision point ARE the publication's voice. |
| copywriter-17 | yes | "Cashin-era pattern (no creed)" is more accurate and reader-facing than internal "flow" language. |
| copywriter-18 | yes | "Mismatched era signals" is editorial register; "detected" is software language. |
| copywriter-19 | yes | Tighter History lede; methodology stays visible on every entry. |
| copywriter-20 | yes | "Free-online" is project-internal jargon; reader-facing copy doesn't need it. |
| copywriter-21 | yes | "Not yet retrieved" is honest cataloging language; "stub" is wiki-jargon. Improves source-status legibility. |
| copywriter-22 | yes | Distinct meta lines per Reference card. Neutral. |
| collector-1 | no | Adding photos pulled from PurseForum or Coach Originals without rights creates a citation/copyright problem the archive's editorial stance cannot defend. The need is real, but the proposed sourcing path is not free-of-rights. Defer until rights-clear images are obtainable. |
| collector-2 | yes | Domain expert says the field-practical first check is hardware/magnet, and the site's own counterfeits/index.md "quick triage" already orders it that way. Aligning the wizard to existing internal documentation is good. |
| collector-3 | yes | Domain-expert correction of an over-narrow rubric; expanding the wizard sub-text or routing to a dedicated page improves accuracy. |
| collector-4 | yes | Same as ux-7 — "cannot read" is honest under-determination; forcing a guess corrupts the era-consistency check. |
| collector-5 | yes | Domain-expert correction of a verdict that the Frankenbags page itself supports. Aligning the wizard to the archive's own counterfeit documentation is correct. |
| collector-6 | yes | Adding a documented era-impossibility combination to the inconsistency detector aligns the tool with the source page's prose. |
| collector-7 | no | This is a request for additional research and primary-source claims (Cashin-era cross-licensing tells, Sills/Meyers/Crescendoe-Superb diagnostics) that the archive currently flags as `tentative` from a single Tier 3 source. Don't promote tentative material to authoritative-tell status without sources. Keep the Tier 3 flag visible and the punt to PurseForum honest. |
| collector-8 | no | Same image-rights issue as collector-1; the prose claim stands on its source. Defer photo until rights-clear. |
| collector-9 | no | Same image-rights issue. The kerning claim is sourced; comparison images would require rights-cleared authentic and counterfeit creeds, which is a separate research project. |
| collector-10 | yes | Adding a documented "transitional 1993–1996 tolerance" to the wizard logic, when the source page already mentions it, is consistent with the archive's own claims. |
| collector-11 | yes | A worked walkthrough of cross-checks for the 1996/2006 ambiguity is teaching-by-example; the existing `serial-numbers.md` already documents the disambiguators. |
| collector-12 | yes | Filling an orphan-reference gap (Station Bag is referenced as a slug but missing) is finding-aid hygiene. |
| collector-13 | yes | Coverage gaps on Ergo and City Bag 4130 are real model-canon gaps; filling them is reference work. |
| collector-14 | yes | Surfacing a folklore correction at the lede of `stitching.md` matches the archive's stated mission — "the community runs on folklore; this is the corrective." |
| collector-15 | no | Adding glue-fluorescence spectroscopy claims and authentic-vs-counterfeit UV image sets is well beyond free-online-source feasibility and risks publishing under-sourced material. Downgrading the recommendation to "optional with caveats" is the right path. |
| collector-16 | no | Publishing per-model price ranges from eBay/Etsy completed sales requires ongoing data collection, citation discipline, and date-stamping the archive currently has no infrastructure to maintain. The market.md refusal is editorially defensible and should stand. |
| collector-17 | no | Same image-rights issue as collector-1. The prose claim is sourced; until rights-clear hangtag photos exist, the recommendation cannot proceed. |
| collector-18 | yes | The E2c vs 1990s-pebbled-SLG conflation is a real wizard-flow bug; the disambiguator is sourced from existing prose. |
| collector-19 | yes | Promoting the Coach Repair / Jacksonville July 1999 caveat to its own citable page eliminates duplication and creates a single sourceable destination — exactly what a reference library does. |
| collector-20 | yes | A printable canonical-photo-set checklist is a citation-of-evidence aid; sellers and authenticators benefit from a stable artifact. |
| collector-21 | no | Tying color rarity to authentication evidentiary bars introduces editorial market-judgment claims (which colors are rare enough to warrant suspicion) that need sourced rarity data the archive does not currently publish. Without sourcing, this is folklore. |
| a11y-1 | yes | WCAG contrast failure on body links; mandatory fix. |
| a11y-2 | yes | Multiple text uses of a token that fails 4.5:1 — straight WCAG fix. |
| a11y-3 | yes | Underline contrast is the primary non-color link cue; 3:1 is required. |
| a11y-4 | yes | Named landmarks help screen-reader navigation through the archive. |
| a11y-5 | yes | Color-alone affordance fix; SC 1.4.1. |
| a11y-6 | yes | Focus-visible affordance for keyboard wizard users. |
| a11y-7 | yes | Wizard is unusable with a screen reader without live-region announcements. Mandatory. |
| a11y-8 | yes | Group semantics on the wizard radio-equivalent options. Either option is valid. |
| a11y-9 | yes | Disabled-state contrast hygiene. |
| a11y-10 | yes | 44px touch target floor; standard mobile/WCAG. |
| a11y-11 | yes | Same touch-target and contrast issue on history's back-to-top. |
| a11y-12 | yes | Skip-link should land at viewport corner, not inside the centered column. Standard accessibility pattern. |
| a11y-13 | yes | Heading anchor permalinks are a research-grade citation feature — they let a reader copy a stable URL to a specific timeline event. Strongly aligned with archive purpose. |
| a11y-14 | yes | DOM order for screen-reader scanning; visual order can be preserved with grid `order`. |
| a11y-15 | yes | Verify focus ring on summary; defensive accessibility. |
| a11y-16 | yes | `prefers-reduced-motion` is a documented vestibular-trigger guard. |
| a11y-17 | yes | Verdict region is the payoff and must be announced to screen readers. |
| a11y-18 | yes | Reflow at 200% zoom is required by SC 1.4.10; dl association must survive. |
| a11y-19 | yes | "Loading…" with JS off is misleading to AT users; clean fallback pattern. |
| a11y-20 | yes | Confidence chips communicating only via subtle tint defeats the chip's visual taxonomy; adding a non-color differentiator (border style, leading icon) helps everyone read tiers at a glance. |
| editorial-1 | no | Replacing the methodology-forward lede with a "Manhattan workshop became briefly the most disciplined leather-goods house in America" thesis is editorial puffery — exactly the kind of unsourced rank-claim STYLE.md bans. The current lede correctly leads with what the archive IS, not with a romantic narrative the archive cannot fully cite. |
| editorial-2 | no | "If you only read three things" hand-curated paths are editor's-pick territory. The current home-page directory is honest about what's in the archive; selecting three pieces with editorial teases imports a magazine-feature register at odds with citation discipline. |
| editorial-3 | yes | "The Story / The Bags / Authenticate / About this archive" departments are clearer information architecture than the current mixed "utility / methodology / content" sections. |
| editorial-4 | yes | The era spine is the genuine organizing principle of the corpus and lifting the era-card pattern site-wide is structural, not editorial-puffery. |
| editorial-5 | no | "Five short era-introduction essays" is net-new editorial prose at a register the archive currently keeps minimal. The era-summary content already exists in `history/timeline.md`; lifting and relocating it is fine, but writing new essay-form intros for every era is the kind of editor's-voice expansion that needs a STYLE.md decision first (see editorial-16). |
| editorial-6 | no | A "this month: featured piece" rotation slot creates an editorial-cadence obligation the static archive cannot sustain, and the rotation itself is not citable content — it's marketing. Skip. |
| editorial-7 | yes | "Read in context" sidebar (era intro, adjacent timeline events, primary authentication topic) is exactly cross-reference catalog behavior — duplicates ux-12 and ux-13 in spirit, and is purely structural. |
| editorial-8 | yes | Multiple access points (era, silhouette, status) with A–Z fallback is standard finding-aid work. |
| editorial-9 | no | "Six models define the silhouette vocabulary; the remaining sixty-nine extend, miniaturize, or revise those" is an unsourced canonical-six claim. STYLE.md would catch this. Until the canon-six designation is sourceable, the curatorial intro should not assert it. |
| editorial-10 | no | Same as ux-14 — the confidence chip vocabulary is the editorial backbone and should remain visible on home, not buried in a colophon. |
| editorial-11 | yes | A proper /about/ page covering masthead, editorial standard, source-tier definitions, and corrections process is foundational reference-archive infrastructure. The current GitHub-link approach is developer-facing; an on-site About is reader-facing. |
| editorial-12 | yes | "You have a bag. You don't know if it's real. Start here." is honest task-orientation. |
| editorial-13 | yes | The era-by-feature matrix is documented in PLAN.md as the editorial centerpiece and is the highest-leverage missing artifact on the site. Build it. |
| editorial-14 | no | Opening with a promise ("Five questions, two minutes, an actionable verdict") oversells a tool the archive itself frames as "a navigation tool, not a final answer." The current cautious lede is honest; reordering to lead with the promise undercuts the disclaimer. |
| editorial-15 | yes | Standardizing model-page structure (lede ≤60 words, spec block, History, Variants, Authentication, Read in context) is structural editorial discipline that aids both readers and contributors. |
| editorial-16 | yes | Resolving the prose-voice inconsistency between editor's-voice and reference-voice is exactly the kind of style-guide pass an archive needs; either expand STYLE.md or pull the flourishes back, but the inconsistency must be resolved. |
| editorial-17 | yes | A `/disputes/` index aggregating `confidence: disputed` entries is finding-aid gold — disputes ARE the most intellectually interesting content on a citation-disciplined archive, and aggregation lets readers find the open questions. Strong yes. |
| editorial-18 | no | "America's most disciplined leather-goods house" is unsourced rank-claim editorializing. The current functional lead is fine; the proposed rewrite imports magazine-feature voice at odds with the archive's stance. |
| editorial-19 | no | "Inter-era transition prose" at the seams of the timeline is net-new editorial commentary that needs sourcing the archive may not have for every transition. The current timeline structure (era-summary + dated events) is already disciplined; adding hinge essays risks editorializing the chronology. Defer until each transition has citable evidence for the editorial claims being made. |
| editorial-20 | yes | An on-site bibliography page (grouped by tier, with editor's-voice annotations on each source's reliability) is the single most important reference-archive feature missing. The home page linking to a GitHub markdown file is exactly the editorial admission editorial-20 calls out. Build it. Same applies to errata and market. |
