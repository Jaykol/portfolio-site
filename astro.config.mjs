// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://portfolio.jaykol.workers.dev',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
});
