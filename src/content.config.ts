import { defineCollection, z } from 'astro:content';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
	i18n: defineCollection({
		loader: i18nLoader(),
		schema: i18nSchema({
			extend: z.object({
				'disclaimer.title': z.string().optional(),
				'disclaimer.independence': z.string().optional(),
				'disclaimer.goal': z.string().optional(),
				'disclaimer.openSource': z.string().optional(),
				'disclaimer.wrongPlace': z.string().optional(),
				'disclaimer.visitOfficial': z.string().optional(),
				'disclaimer.continue': z.string().optional(),
				'disclaimer.learnMore': z.string().optional(),
				'footer.independence': z.string().optional(),
				'footer.resonite': z.string().optional(),
				'footer.or': z.string().optional(),
				'footer.yellowdog': z.string().optional(),
				'footer.learnMoreText': z.string().optional(),
				'footer.buildVersion': z.string().optional(),
			}),
		}),
	}),
};
