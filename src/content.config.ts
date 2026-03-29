import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

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
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: postSchema,
});

export const collections = {
  posts,
};
