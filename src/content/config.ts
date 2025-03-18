import { defineCollection, reference, z } from "astro:content";


const blogCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        image: z.string().transform((str) => new URL(str, import.meta.url).pathname),


        //Relación
        //author: z.string(),
        author: reference("author"),

        //Relación
        tags: z.array(z.string()),

        // Boolean
        isDraft: z.boolean().default(false)
    }),
});

const authorCollection = defineCollection({
    type: "data",
    schema: ({ image }) =>
        z.object({
            name: z.string(),
            avatar: image(),
            twitter: z.string(),
            linkedIn: z.string(),
            github: z.string(),
            bio: z.string(),
            subtitle: z.string()
        }),
});

export const collections = {
    blog: blogCollection,
    author: authorCollection,
};


