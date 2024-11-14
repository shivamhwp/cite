import { defineCollection, reference, z } from "astro:content";

export const postSchema = z.object({
  title: z.string(),
  url: z.string().optional(),
  imageUrl: z.string().optional(),
  tags: z.array(z.string()),
  published: z.date(),
});

const posts = defineCollection({
  type: "content",
  schema: postSchema,
});

export const collections = {
  posts,
};
