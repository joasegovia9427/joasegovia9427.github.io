import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Hero singleton
const hero = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdoc,yaml}", base: "./src/content/hero" }),
    schema: ({ image }) =>
        z.object({
            name: z.string(),
            title: z.string(),
            description: z.string(),
            avatar: image(),
            location: z.string().optional(),
            socialLinks: z.array(
                z.object({
                    url: z.string(),
                    icon: z.enum([
                        "GitHub",
                        "LinkedIn",
                        "YouTube",
                        "Email",
                        "Figma",
                    ]),
                    label: z.string(),
                })
            ),
        }),
});

// About singleton
const about = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdoc,yaml}", base: "./src/content/about" }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            photo: image().optional(),
            link: z.string().url().optional(),
        }),
});

export const collections = {
    hero,
    about,
};
