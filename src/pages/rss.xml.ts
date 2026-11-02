import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { excerpt, getPosts, postHref, postTags } from "@/lib/posts";
import { SITE } from "@/site";

export const GET: APIRoute = async (context) => {
  const posts = await getPosts();
  return rss({
    title: SITE.domain,
    description: `writing by ${SITE.name}.`,
    site: context.site ?? SITE.url,
    trailingSlash: false,
    items: posts.map((post) => ({
      title: post.data.title,
      link: postHref(post),
      pubDate: post.data.published,
      description: excerpt(post),
      categories: postTags(post),
    })),
    customData: "<language>en</language>",
  });
};
