// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project-page hosting: https://pjdoland.github.io/coachbook/
  site: 'https://pjdoland.github.io',
  base: '/coachbook/',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
