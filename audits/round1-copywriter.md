---
title: "Round 1 review — Copywriter"
slug: round1-copywriter
status: draft
confidence: log
sources: []
persona: Copywriter / editorial voice
---

1. **Cut the home-page lede from 31 words to ~18**
   Current: "A primary-source reference archive of vintage Coach Leatherware, 1941–2002 — the Cashin years through the Krakoff transition. Every claim citation-tagged; every source registered." The phrase "primary-source reference archive" stacks three modifiers on one noun and the second sentence reads as a brag. Replace with: "A reference archive of vintage Coach Leatherware, 1941–2002 — the Cashin years through the Krakoff transition. Every claim is cited; every source is named." This restores cadence, drops the self-congratulatory "registered," and lets the work speak. *Cut*

2. **Promote a single anchor sentence above the home headline**
   The H1 is the bare wordmark "coachbook" and the only context for the visitor sits in a 31-word lede. Add a short editorial standfirst between the H1 and the lede — one line, ~7 words, in a quieter weight: "Vintage Coach handbags, 1941–2002." This is the move catalog and museum sites make to give the H1 something to lean on without forcing the lede to do headline work. *Hierarchy*

3. **Rewrite the Confidence section as a definition list, not a paragraph**
   The current paragraph runs four chip definitions inline, separated by semicolons, and reads as a wall: "confirmed = primary source or two independent reputable sources; likely = single primary or multiple agreeing secondary…" A reader cannot scan it. Convert to a `<dl>` of four rows, chip on the left, definition on the right ("primary source, or two independent reputable sources"). The page already uses `dl` heavily on model spec pages; this is consistent. *Restructure*

4. **Tighten "Authenticate a bag" section heading and meta**
   The H2 reads "Authenticate a bag" but the cards beneath it (`Authentication wizard`, `Decision tree`, `All topics`) re-state the activity three times. Rename the H2 to "Authentication" and let the cards carry the verbs. Also: the "All topics" card meta reads "{N} authentication pages" — drop the redundant "authentication" since it lives under that H2. Use "{N} topics, A–Z" or "{N} entries." *Microcopy*

5. **Replace "Designers and people" with "Designers"**
   The home Browse card label "Designers and people" is the most awkward phrase on the page — "and people" is a content-model leak (it tells the reader the collection holds non-designer figures). Rename the card "Designers" and let the entry meta carry nuance ("designers, executives, archivists"). The label should describe the destination, not its taxonomy. *Microcopy*

6. **Rewrite the home footer to drop the duplicate tagline**
   Footer reads "Vintage Coach archive — primary-source reference for the 1941–2002 NYC era. / Not affiliated with Coach, Inc." The first line repeats the home-page lede almost verbatim and the meta description verbatim. Replace with something the lede *doesn't* say: "An independent reference archive. Not affiliated with Coach, Inc." Two short lines, no overlap. *Cut*

7. **Cut the Models index lede from 30 words to ~16**
   Current: "{N} silhouettes documented from the Cashin era through the Krakoff transition. Each entry carries primary-catalog citations where available, and Tier 3 community sources where not." The "Tier 3" reference is internal-jargon and undermines the editorial voice on a public-facing page. Replace with: "{N} silhouettes from the Cashin era through the Krakoff transition. Each entry carries catalog citations where available; community sources are flagged where they aren't." *Voice*

8. **Add a one-line standfirst above the Models grid noting alphabetization and chip meaning**
   A reader landing on /models/ sees a long alphabetical card grid, each card tagged `confirmed` / `likely` / `tentative` with no on-page legend. Add a quiet line beneath the lede: "Listed A–Z. Tags show citation confidence — see the home page for definitions." This is a microcopy gap, not a scope change. *Microcopy*

9. **Rewrite the Willis intro paragraph to lead with the bag, not the rank**
   Current opening: "The Willis is the flagship flap-front shoulder bag of Coach's Classic NYC era — small enough to read as a personal bag, structured enough to hold its shape for decades." "Flagship" is editorial cliché on a page that elsewhere holds a high register. Replace with: "Willis is the small flap-front shoulder bag that came to define Coach's Classic NYC silhouette — rectangular, structured, glove-tanned, made to hold its shape for decades." Drops the rank claim, leads with form, ends on durability. *Voice*

10. **Demote the D1 quote in the Willis intro**
    The third sentence of the lede paragraph cites a Tier 3 source mid-flow: "Yourgreatfinds calls it 'one of Coach's most popular and classic styles' (D1)." A community quote should not sit inside the lead paragraph of a model entry — it dilutes the editorial voice and elevates a single secondary source to headline status. Move it to a "Reception" or "Community framing" sub-section, or drop it entirely; the catalog-anchored "best-selling handbag" 1996–1997 Source Book quote already does this work in the History section, with stronger sourcing. *Cut*

11. **Replace the Willis "Modern re-issue" section heading**
    "Modern re-issue" reads like a catalog SKU label. The section is actually about how to distinguish a modern re-release from a vintage Willis — name it for the reader's question: "Re-releases vs. originals." This makes the section findable from a TOC and aligns with the page's authentication-as-service register. *Headlines*

12. **Tighten the Authentication landing lede**
    Current: "Topic-by-topic authentication reference. Combine multiple checks — no single signal proves authentic or fake." The sentence-fragment opener is fine but the second sentence buries the most important sentence on the entire site. Promote it: "No single check proves a bag authentic or fake. This is a topic-by-topic reference; combine multiple checks for any verdict." Same word count, vastly stronger lede. *Hierarchy*

13. **Rewrite the primary CTA on Authentication landing**
    Button text reads "Start the wizard →". "Start" is generic SaaS-CTA language and "the wizard" sounds tooled. Try: "Walk through the questions →" or "Begin the walkthrough →". The wizard page itself uses "Walk through the authentication flow one question at a time" — the CTA should echo that register. *Microcopy*

14. **Rewrite the Wizard landing lede to drop the meta-explanation**
    Current: "Walk through the authentication flow one question at a time. The wizard tracks era-consistency across the answers and flags mismatches. Verdicts cite the relevant authentication topics for full evidence — this is a navigation tool, not a final answer." Three sentences, two of which describe the tool's mechanics. Trim to two: "Walk through the questions one at a time. This is a navigation tool, not a final verdict — every answer is cross-checked against era consistency, and the result links back to the underlying topics." Same content, fewer joins, clearer disclaimer. *Cut*

15. **Standardize the Wizard step-question voice**
    Step titles slip register: Step 1 is a full question ("Is there a leather creed patch?"), Step 5 is a sentence fragment with em-dash ("Hardware — magnet test"), Step 6 is one word ("Construction"). Pick one register. Recommended: full questions throughout — "Does the hardware pass the magnet test?", "What does the construction tell you?" The wizard is a question flow; every step should *sound* like a question. *Voice*

16. **Tighten Wizard option labels — they're carrying too much explanation**
    Several options read as paragraphs in disguise, e.g. the Step 4 "Letter-digit-letter" option's `sub` is "1994 onward. Single-digit-year ambiguity (1996 vs 2006) — never publish a year from the code alone." That last clause is a STYLE-guide rule, not an answer hint. Move publishing rules out of option microcopy and into a footnote on the verdict screen. The option `sub` should answer "what era does this point to?" in one short clause, nothing more. *Microcopy*

17. **Rewrite the "no-creed" verdict tag**
    The verdict tag reads "No-creed era flow" — "flow" is internal-tool language; readers won't parse it. Rename the tag: "Cashin-era pattern (no creed)." Then the summary sentence beneath it ("Bags without a creed are typically Cashin-era…") doesn't have to redo the work the tag already did. *Headlines*

18. **Replace "Era inconsistency detected" verdict label with editorial language**
    "Detected" is software-UI register; the rest of the site reads as written prose. Try: "The eras don't line up." Or, more formal: "Mismatched era signals." Either preserves the meaning while keeping the register. *Tone*

19. **Cut the History page lede from 33 words to ~20**
    Current: "A primary-source-anchored chronology, 1941–2002. Each entry is confidence-tagged and citation-linked. Jump to a specific era below; the timeline reads top-to-bottom but each event stands alone." Three sentences, two of which describe the document's machinery rather than its substance. Replace with: "A chronology of Coach from its 1941 Manhattan founding through the 2001 Signature C launch. Read top-to-bottom, or jump to an era." Citation discipline is visible on every entry; the lede doesn't need to announce it. *Cut*

20. **Tighten the Catalogs lede and remove "free-online"**
    Current: "Coach catalogs are the most valuable primary source for dating models. The free-online catalog landscape is fragmented; this directory tracks what's known, with stubs for catalog years not yet retrieved." "Free-online" is a project-internal constraint, not a public-facing concept; readers don't know or care. Replace with: "Coach catalogs are the most valuable primary source for dating models. This directory tracks the catalogs we have located, with stubs for the years still open." *Voice*

21. **Replace the `stub` chip label with "not yet retrieved"**
    On /catalogs/, entries that are placeholders display a `stub` chip. "Stub" is wiki-jargon. The reader needs to know "we know this catalog exists but haven't gotten our hands on it" — the right chip is "open" or "not yet retrieved." This also matches the language proposed in #20 above and aligns with the site's `confidence` chip vocabulary (confirmed / likely / tentative / disputed). *Microcopy*

22. **Replace the cryptic Reference card meta lines**
    Home page Reference cards use one-word metas ("Scope and method," "Editorial conventions," "Source registry," "Corrections log," "Reference," "Reference"). The last two are literally the word "Reference," which is the H2 above them — pure noise. Give each card a meta that distinguishes it: PLAN → "Project scope and method," STYLE → "Editorial conventions," Bibliography → "Source registry," Errata → "Corrections, dated," Market → "Pricing and resale notes," Care → "Care and restoration." Six cards, six distinct metas. *Microcopy*
