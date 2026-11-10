import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Projects live as individual Markdown files in src/content/projects/.
// To add a project: copy any file in that folder, rename it, edit the
// frontmatter below. `order` controls position; `group` controls the band.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    group: z.enum(['current', 'devops']),
    summary: z.string(),
    metric: z.string(),
    metricLabel: z.string(),
    tags: z.array(z.string()),
    repo: z.string().url().optional(),   // omit for internal / no public repo
    internalLabel: z.string().default('internal'),
  }),
});

export const collections = { projects };
