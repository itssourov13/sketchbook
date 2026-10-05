import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    year: z.coerce.number(),
    role: z.string(),
    type: z.string(),
    featured: z.boolean().default(false),
    status: z.enum(['published', 'draft']).default('published'),
    stack: z.array(z.string()).default([]),
    image: z.string().optional(),
    accent: z.string().optional(),
  }),
});

const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/journal' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    status: z.enum(['published', 'draft']).default('published'),
    cover: z.string().optional(),
    readingTime: z.string().optional(),
  }),
});

export const collections = { projects, journal };
