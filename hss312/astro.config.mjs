// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://shiro-el.github.io',
	base: '/hss312',
	outDir: './docs',
	integrations: [mdx(), sitemap()],
});
