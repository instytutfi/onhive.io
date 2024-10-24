import { defineCollection } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";

import { hiveBlogLoader, postSchema } from "@/loaders/hive-loader.ts";

export const collections = {
  docs: defineCollection({ schema: docsSchema() }),
  blog: defineCollection({
    type: "content_layer",
    loader: hiveBlogLoader({
      author: "hive.coding",
      limit: 10,
      ignoreCrossPosts: true
    }),
    schema: postSchema
  })
};
