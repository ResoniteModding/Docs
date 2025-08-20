// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
	site: 'https://modding.resonite.net',

	integrations: [
		starlight({
			title: {
				en: 'Resonite Modding'
			},
			expressiveCode: {
				themes: ['catppuccin-mocha']
			},
			editLink: {
				baseUrl: 'https://github.com/ResoniteModding/docs/edit/main/'
			},
			social: [
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/vCDJK9xyvm' },
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/art0007i/BepisLoader'
				}
			],
			customCss: ['./src/styles/global.css'],
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en'
				}
			},
			sidebar: [
				{
					label: 'Getting Started',
					translations: { en: 'Getting Started' },
					items: [
						{ translations: { en: 'Introduction' }, slug: 'index' },
						{ translations: { en: 'Installation' }, slug: 'getting-started/installation' },
						{
							label: 'BepisLoader',
							translations: { en: 'BepisLoader' },
							items: [
								{
									translations: { en: 'Introduction' },
									slug: 'getting-started/bepisloader/introduction'
								},
								{
									translations: { en: 'What is BepisLoader?' },
									slug: 'getting-started/bepisloader/what-is'
								},
								{
									translations: { en: 'Setting Up BepisLoader' },
									slug: 'getting-started/bepisloader/setup'
								}
							]
						},
						{ translations: { en: 'Your First Mod' }, slug: 'getting-started/first-mod' },
						{ translations: { en: 'Troubleshooting' }, slug: 'getting-started/troubleshooting' }
					]
				},
				{
					label: 'Guides',
					translations: { en: 'Guides' },
					items: [
						{ translations: { en: 'Mod Development Basics' }, slug: 'guides/mod-basics' },
						{ translations: { en: 'Using BepInEx' }, slug: 'guides/bepinex' },
						{ translations: { en: 'Debugging Mods' }, slug: 'guides/debugging' }
					]
				},
				{
					label: 'Recipes',
					translations: { en: 'Recipes' },
					items: []
				},
				{
					label: 'Reference',
					translations: { en: 'Reference' },
					collapsed: true,
					autogenerate: { directory: 'reference' }
				},
				{
					label: 'Resources',
					translations: { en: 'Resources' },
					items: [
						{ translations: { en: 'Tools & Utilities' }, slug: 'resources/tools' },
						{ translations: { en: 'Links & Community' }, slug: 'resources/links' }
					]
				}
			],
			components: {
				Head: './src/components/Head.astro',
				PageFrame: './src/components/PageFrame.astro',
				Footer: './src/components/Footer.astro'
			}
		}),
		svelte(),
		mdx()
	],

	vite: {
		plugins: [tailwindcss()]
	},
	adapter: cloudflare({
		imageService: 'compile',
		platformProxy: {
			enabled: true
		}
	})
});
