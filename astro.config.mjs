// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';
import paraglide from '@inlang/paraglide-astro';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ['en', 'de', 'nl'],
    defaultLocale: 'en',
  },

  output: 'server',

  integrations: [
    tailwind(),
    svelte(),
    paraglide({
      // recommended settings
      project: './project.inlang',
      outdir: './src/paraglide', //where your files should be
    }),
  ],

  adapter: cloudflare(),
});