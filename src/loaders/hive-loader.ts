import { z } from "astro:content";
import type { Loader } from "astro/loaders";

const HIVE_API = "https://api.hive.blog";

export type BlogLoaderParams = {
  author: string;
  limit: number;
  ignoreCrossPosts?: boolean;
};

export const postSchema = z.object({
  post_id: z.string(),
  author: z.string(),
  permlink: z.string(),
  category: z.string(),
  community_title: z.string().optional(),
  title: z.string(),
  body: z.string(),
  json_metadata: z.object({
    tags: z.array(z.string()),
    users: z.array(z.string()),
    image: z.array(z.string()),
    links: z.array(z.string()),
    app: z.string(),
    format: z.string(),
    description: z.string()
  }),
  created: z.string(),
  updated: z.string(),
  author_reputation: z.number(),
  url: z.string(),
  pending_payout_value: z.string()
});

export type Post = z.infer<typeof postSchema>;

/**
 * condenser_api.get_comment_discussions_by_payout
 */
export function hiveTagLoader(): Loader {
  return {
    name: "hive-tag-loader",
    load: async function () {}
  };
}

/**
 * bridge.get_account_posts
 */
export function hiveBlogLoader(params: BlogLoaderParams): Loader {
  return {
    name: "hive-blog-loader",
    load: async function (this: Loader, { store, logger }) {
      logger.debug(`Fetching blog posts [params: ${JSON.stringify(params)}]`);

      const response = await fetch(HIVE_API, {
        method: "POST",
        body: JSON.stringify({
          jsonrpc: "2.0",
          method: "bridge.get_account_posts",
          params: {
            sort: "posts",
            account: params.author,
            limit: params.limit
          },
          id: 1
        })
      });

      const data = await response.json();
      store.clear();
      data.result.forEach((post: Post) => {
        if (
          params.ignoreCrossPosts &&
          post.json_metadata.tags?.includes("cross-post")
        ) {
          return;
        }
        store.set({
          id: post.post_id,
          data: post
        });
      });
    },
    schema: z.array(postSchema)
  };
}
