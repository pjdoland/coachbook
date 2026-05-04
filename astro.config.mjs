// @ts-check
import { defineConfig } from 'astro/config';
import rehypeSlug from 'rehype-slug';
import rehypeSourceCitations from './scripts/rehype-source-citations.mjs';

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
      [rehypeSourceCitations, { base: BASE }],
    ],
  },
});
