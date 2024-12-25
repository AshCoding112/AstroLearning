// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  legacy: {
    collections: true,
  },
  integrations: [tailwind(), mdx()],
});