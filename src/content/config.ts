import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      author: z.string(),
      date: z.string(),
      image: image(),
      title: z.string(),
      name: z.string(),
    }),
});

export const collections = {
  posts: postsCollection,
  //ten parametr musi się zgadzać z nazwą folderu w "content" - kolekcja postów (postCollection) ma być w tym folderze
};
