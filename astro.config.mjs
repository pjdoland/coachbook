// @ts-check
import { defineConfig } from 'astro/config';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
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
      // Slug → autolink ordering matters: slug must run first so the
      // autolink plugin has stable `id` attributes to point at.
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          properties: {
            className: ['heading-anchor'],
            ariaLabel: 'Permalink to this entry',
          },
          // The pilcrow is announced as "paragraph mark" by VoiceOver;
          // the aria-label above replaces the announcement with the
          // intent. Sighted users see ¶ as a small affordance.
          content: { type: 'text', value: '¶' },
        },
      ],
      // Linkify [source-id] tokens whose IDs resolve in sources/registry.md.
      // Runs after slug/autolink so heading nodes are already finalized
      // and skipped via the SKIP_TAGS set.
      [rehypeSourceCitations, { base: BASE }],
    ],
  },
});
