// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import starlightThemeRapide from 'starlight-theme-rapide';
import starlightDocSearch from '@astrojs/starlight-docsearch';
import { loadEnv } from 'vite';
const { DOCSEARCH_APP_ID, DOCSEARCH_INDEX_NAME, DOCSEARCH_SEARCH_API_KEY } = loadEnv(
	// @ts-ignore
	process.env.NODE_ENV,
	process.cwd(),
	''
);

// https://astro.build/config
export default defineConfig({
	site: 'https://modding.resonite.net',
	integrations: [
		starlight({
			prerender: true,
			lastUpdated: true,
			favicon: './assets/favicon.svg',
			title: {
				en: 'Resonite Modding',
			},
			logo: {
				src: './public/assets/favicon.svg',
				alt: 'Resonite Modding Logo',
			},
			editLink: {
				baseUrl: 'https://github.com/ResoniteModding/docs/edit/main/',
			},
			social: [
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/vCDJK9xyvm' },
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/ResoniteModding',
				},
			],
			customCss: ['./src/styles/theme.css'],
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
			},
			sidebar: [
				{
					label: 'Getting Started',
					translations: { en: 'Getting Started' },
					autogenerate: { directory: 'getting-started' },
				},
				{
					label: 'Creating a Mod',
					translations: { en: 'Creating a Mod' },
					autogenerate: { directory: 'creating-a-mod' },
				},
				{
					label: 'Guides',
					translations: { en: 'Guides' },
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Recipes',
					translations: { en: 'Recipes' },
					autogenerate: { directory: 'recipes' },
				},
				{
					label: 'Reference',
					translations: { en: 'Reference' },
					collapsed: true,
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Resources',
					translations: { en: 'Resources' },
					autogenerate: { directory: 'resources' },
				},
			],
			components: {
				Footer: './src/components/Footer.astro',
			},
			plugins: [
				starlightDocSearch({
					appId: DOCSEARCH_APP_ID,
					apiKey: DOCSEARCH_SEARCH_API_KEY,
					indexName: DOCSEARCH_INDEX_NAME,
				}),
				starlightThemeRapide(),
			],
			head: [
				{
					tag: 'meta',
					attrs: {
						name: 'color-scheme',
						content: 'light dark',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'algolia-site-verification',
						content: '9F288AE41B8C128D',
					},
				},
			],
		}),
		svelte(),
		mdx(),
	],
});
