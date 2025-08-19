// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
      title: 'Resonite Modding',
			expressiveCode: {
				themes: ['catppuccin-mocha']
			},
			editLink: {
        baseUrl: 'https://github.com/ResoniteModding/docs/edit/main/',
      },
      social: [{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/vCDJK9xyvm' }, {
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/art0007i/BepisLoader'
			}],
      customCss: [
          './src/styles/global.css',
      ],
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
              items: [
                  { label: 'Introduction', slug: 'index' },
                  { label: 'Installation', slug: 'getting-started/installation' },
                  { label: 'BepisLoader', items: [
										{ label: 'Introduction', slug: 'getting-started/bepisloader/introduction' },
                  	{ label: 'What is BepisLoader?', slug: 'getting-started/bepisloader/what-is' },
										{ label: 'Setting Up BepisLoader', slug: 'getting-started/bepisloader/setup' },
									]  },
                  { label: 'Your First Mod', slug: 'getting-started/first-mod' },
                  { label: 'Troubleshooting', slug: 'getting-started/troubleshooting' },
              ],
          },
          {
              label: 'Guides',
              items: [
                  { label: 'Mod Development Basics', slug: 'guides/mod-basics' },
                  { label: 'Using BepInEx', slug: 'guides/bepinex' },
                  { label: 'Debugging Mods', slug: 'guides/debugging' },
              ],
          },
          {
              label: 'Recipes',
              items: [],
          },
          {
              label: 'Reference',
              items: [],
          },
          {
              label: 'Resources',
              items: [
                  { label: 'Tools & Utilities', slug: 'resources/tools' },
                  { label: 'Links & Community', slug: 'resources/links' },
              ],
          },
      ],
      components: {
          Head: "./src/components/Head.astro",
          PageFrame: "./src/components/PageFrame.astro",
      }
      }), svelte(), mdx()],

  vite: {
    plugins: [tailwindcss()],
  },
});
