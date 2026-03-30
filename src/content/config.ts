import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    pubDate: z.coerce.date(),
    urlSlug: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    layout: z.string().optional(),
    tags: z
      .union([z.array(z.string()), z.string()])
      .optional()
      .transform((value) => {
        if (!value) {
          return [];
        }

        if (Array.isArray(value)) {
          return value;
        }

        return value.split(/\s+/).filter(Boolean);
      }),
  }),
});

export const collections = { posts };
