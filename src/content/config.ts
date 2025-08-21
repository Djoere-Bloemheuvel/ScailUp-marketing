import { defineCollection, z } from 'astro:content';

// Pillar Collection - Premium hub pages
const pillarCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    subtitle: z.string().optional(),
    pillarId: z.string(),
    accentColor: z.string(), // Primary color for this pillar
    gradientFrom: z.string(), // Gradient start color
    gradientTo: z.string(), // Gradient end color
    icon: z.string(), // Icon name
    heroImage: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),
    coreExplanation: z.array(z.object({
      title: z.string(),
      description: z.string(),
      icon: z.string().optional(),
    })),
    featured: z.boolean().default(false),
    order: z.number(), // For navigation ordering
    seo: z.object({
      metaTitle: z.string().optional(),
      metaDescription: z.string().optional(),
      keywords: z.array(z.string()).optional(),
      ogImage: z.string().optional(),
    }).optional(),
  }),
});

// Articles Collection - Enhanced with pillar association
const artikelenCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    pillar: z.enum([
      'ai-automatisering',
      'custom-ai-saas',
      'ai-consultancy',
      'autonomous-agents',
      'ai-marketing-sales',
      'ai-implementation'
    ]),
    category: z.enum([
      'deep-dive',
      'how-to',
      'case-study',
      'comparison',
      'trends',
      'beginner-guide'
    ]),
    clusterType: z.enum([
      'core', // Main topic articles
      'supporting', // Detail articles
      'related' // Cross-pillar articles
    ]).default('supporting'),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']).default('intermediate'),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),
    readingTime: z.number().optional(),
    relatedArticles: z.array(z.string()).optional(), // Article slugs
    seo: z.object({
      metaTitle: z.string().optional(),
      metaDescription: z.string().optional(),
      keywords: z.array(z.string()).optional(),
      ogImage: z.string().optional(),
    }).optional(),
  }),
});

export const collections = {
  'pillars': pillarCollection,
  'artikelen': artikelenCollection,
};

export type PillarEntry = z.infer<typeof pillarCollection.schema>;
export type ArtikelEntry = z.infer<typeof artikelenCollection.schema>;