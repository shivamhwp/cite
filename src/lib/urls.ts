import { made_projects, socials, songs } from "@/data";
import { HOME_SHORTCUT, ROUTES, SITE } from "@/site";
import { type UrlItem } from "./links";
import { formatDate, getPosts, postHref, postTags } from "./posts";

export type { UrlCategory, UrlItem } from "./links";

/** Everything on the site worth jumping to. Feeds /urls.json and the command palette. */
export async function collectUrls(): Promise<UrlItem[]> {
  const pages: UrlItem[] = [
    { title: "home", url: "/", category: "pages", shortcut: HOME_SHORTCUT },
    ...ROUTES.map((route) => ({
      title: route.label,
      url: route.href,
      category: "pages" as const,
      shortcut: route.shortcut,
    })),
    { title: "socials", url: "/socials", category: "pages" },
    { title: "rss feed", url: "/rss.xml", category: "pages" },
  ];

  const posts = (await getPosts()).map(
    (post): UrlItem => ({
      title: post.data.title,
      url: postHref(post),
      category: "writing",
      hint: formatDate(post.data.published),
      keywords: [post.id, ...postTags(post), post.data.director ?? ""],
    }),
  );

  const projects = made_projects.map(
    (project): UrlItem => ({ title: project.name, url: project.link, category: "projects" }),
  );

  const music = songs.map(
    (song): UrlItem => ({ title: song.title.trim(), url: song.link, category: "music" }),
  );

  const links: UrlItem[] = [
    ...socials.map(
      (social): UrlItem => ({ title: social.title, url: social.link, category: "socials" }),
    ),
    { title: SITE.email, url: `mailto:${SITE.email}`, category: "socials" },
  ];

  return [...pages, ...posts, ...projects, ...music, ...links];
}
