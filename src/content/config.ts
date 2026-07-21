import { z, defineCollection } from 'astro:content';

const beritaCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.enum(['Berita', 'Agenda', 'Artikel', 'Pengumuman']),
    thumbnail: z.string().optional(),
    excerpt: z.string(),
    author: z.string().default('Admin Desa'),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  'berita': beritaCollection,
};
