import { strapiLoader } from "@sensinum/astro-strapi-loader";
import { defineCollection } from "astro:content";

if (!import.meta.env.STRAPI_URL) {
  throw new Error('Unconfigured Environment Variable: "STRAPI_URL"');
}

const stories = defineCollection({
  loader: strapiLoader("stories", {
    url: import.meta.env.STRAPI_URL,
    idGenerator: (data) => data.slug as string,
  }),
});

export const collections = {
  stories,
};
