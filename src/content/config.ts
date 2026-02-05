import { defineCollection, z } from "astro:content";

export const postSchema = z.object({
  title: z.string(),
  url: z.string().optional(),
  imageUrl: z.string().optional(),
  tags: z.array(z.string()),
  published: z.date(),
  updated: z.date().optional(),
  director: z.string().optional(),
});

const posts = defineCollection({
  type: "content",
  schema: postSchema,
});

export const collections = {
  posts,
};
