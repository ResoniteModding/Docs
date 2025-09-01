import { defineCollection, z } from 'astro:content';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';
import { docSearchI18nSchema } from '@astrojs/starlight-docsearch/schema';

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
	i18n: defineCollection({
		loader: i18nLoader(),
		schema: i18nSchema({
			extend: docSearchI18nSchema().merge(
				z.object({
					'disclaimer.title': z.string().optional(),
					'disclaimer.independence.prefix': z.string().optional(),
					'disclaimer.independence.type': z.string().optional(),
					'disclaimer.independence.suffix': z.string().optional(),
					'disclaimer.goal': z.string().optional(),
					'disclaimer.openSource.prefix': z.string().optional(),
					'disclaimer.openSource.type': z.string().optional(),
					'disclaimer.openSource.suffix': z.string().optional(),
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
				})
			),
		}),
	}),
};
