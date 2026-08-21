import { strapiLoader } from '@sensinum/astro-strapi-loader';
import { defineCollection } from 'astro:content';

const story = defineCollection({
  loader: strapiLoader('stories', {
    url: import.meta.env.STRAPI_URL,
    idGenerator: (data) => data.slug as string
  })
});

export const collections = {
  story,
};