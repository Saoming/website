import { defineCollection, z } from "astro:content";

import { glob, file } from "astro/loaders";

const posts = defineCollection({
	loader: glob({ pattern: "*.md", base: "./posts" }),
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		description: z.string(),
		added: z.union([z.string(), z.date()]),
		updated: z.union([z.string(), z.date()]).optional(),
		tags: z.array(z.string()),
	}),
});

const projects = defineCollection({
	loader: file("projects/projects.json", { parser: (text) => JSON.parse(text).projects }),
	schema: z.object({
		id: z.number(),
		title: z.string(),
		slug: z.string(),
		description: z.string(),
		categories: z.array(z.string()),
		coverImage: z.string(),
		projectImages: z.array(z.string()),
	}),
});

export const collections = { posts, projects };