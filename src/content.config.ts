import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

export const postSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  url: z.string().optional(),
  imageUrl: z.string().optional(),
  tags: z.array(z.string()).default([]),
  published: z.date(),
  updated: z.date().optional(),
  director: z.string().optional(),
  draft: z.boolean().default(false),
});

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: postSchema,
});

export const collections = {
  posts,
};
