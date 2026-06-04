import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import { made_projects, socials, songs } from "../data";

type UrlItem = {
  title: string;
  url: string;
  category: string;
};

export async function collectUrls(): Promise<UrlItem[]> {
  const items: UrlItem[] = [];

  // Add routes/pages
  items.push(
    {
      title: "Home",
      url: "/",
      category: "Pages",
    },
    {
      title: "Cinema",
      url: "/cinema",
      category: "Pages",
    },
    {
      title: "Writings",
      url: "/writings",
      category: "Pages",
    },
    {
      title: "work",
      url: "/work",
      category: "Pages",
    },
    {
      title: "Socials",
      url: "/socials",
      category: "Pages",
    },
    {
      title: "Updates",
      url: "/updates",
      category: "Pages",
    },
  );

  // Add blog posts
  const allPosts = await getCollection("posts");
  for (const post of allPosts) {
    items.push({
      title: post.data.title,
      url: `/writings/posts/${post.id}`,
      category: "Blog",
    });
  }

  // Add social links
  for (const social of socials) {
    items.push({
      title: social.title,
      url: social.link,
      category: "Social",
    });
  }

  // Add song links
  for (const song of songs) {
    items.push({
      title: song.title,
      url: song.link,
      category: "Music",
    });
  }

  // Add project links
  for (const project of made_projects) {
    items.push({
      title: project.name,
      url: project.link,
      category: "Projects",
    });
  }

  return items;
}

export const GET: APIRoute = async () => {
  const urls = await collectUrls();
  return Response.json(urls, {
    headers: { "Content-Type": "application/json" },
  });
};
