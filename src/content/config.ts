import { defineCollection } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";

import { hiveBlogLoader } from "@onhive.io/astro-loader";

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  blog: defineCollection({
    type: "content_layer",
    loader: hiveBlogLoader("hive.coding")
  })
};
