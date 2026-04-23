// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://satugizi.id',
	integrations: [
		mdx(),
		sitemap({
			serialize(item) {
				if (item.url.includes('/login') || item.url.includes('/register') || item.url.includes('/demo')) {
					return undefined;
				}
				if (/\/blog\/.+/.test(new URL(item.url).pathname)) {
					item.priority = 0.7;
					item.changefreq = 'monthly';
				} else if (item.url.endsWith('/blog/')) {
					item.priority = 0.8;
					item.changefreq = 'weekly';
				} else if (item.url.endsWith('/about/')) {
					item.priority = 0.5;
					item.changefreq = 'monthly';
				} else if (new URL(item.url).pathname === '/') {
					item.priority = 1.0;
					item.changefreq = 'weekly';
				}
				return item;
			},
		}),
		react(),
	],
	vite: {
		plugins: [tailwindcss()],
	},
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Plus Jakarta Sans',
			cssVariable: '--font-heading',
			fallbacks: ['sans-serif'],
			weights: [400, 500, 600, 700, 800],
		},
		{
			provider: fontProviders.google(),
			name: 'Inter',
			cssVariable: '--font-body',
			fallbacks: ['sans-serif'],
			weights: [400, 500, 600],
		},
		{
			provider: fontProviders.google(),
			name: 'JetBrains Mono',
			cssVariable: '--font-mono',
			fallbacks: ['monospace'],
			weights: [400, 500],
		},
	],
});
