import { defineCollection } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";

import { hiveBlogLoader } from "@onhive.io/astro-loader";

export const collections = {
  docs: defineCollection({ schema: docsSchema() }),
  blog: defineCollection({
    type: "content_layer",
    loader: hiveBlogLoader("hive.coding")
  })
};
