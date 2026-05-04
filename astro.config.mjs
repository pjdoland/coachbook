// @ts-check
import { defineConfig } from 'astro/config';
import rehypeSlug from 'rehype-slug';
import rehypeSourceCitations from './scripts/rehype-source-citations.mjs';
import rehypeModelLinks from './scripts/rehype-model-links.mjs';

const BASE = '/coachbook/';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project-page hosting: https://pjdoland.github.io/coachbook/
  site: 'https://pjdoland.github.io',
  base: BASE,
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  markdown: {
    rehypePlugins: [
      // Stable IDs on every heading. Source citations and TOC anchors
      // depend on these. The auto-link-headings plugin used to follow
      // here but added a hover ¶ to every heading; ripped out for
      // editorial calm.
      rehypeSlug,
      // Auto-link model name mentions in body text to /models/<slug>/.
      // Runs before source-citation linking so [source-id] tokens
      // inside an <a> we just inserted are still linkified by the
      // citation pass (the citation plugin walks <a> children too —
      // wait, it skips <a>; so model links wrap whole names cleanly
      // and source citations remain on plain text only).
      [rehypeModelLinks, { base: BASE }],
      [rehypeSourceCitations, { base: BASE }],
    ],
  },
});
