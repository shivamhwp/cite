import { type CollectionEntry, getCollection } from "astro:content";

export type Post = CollectionEntry<"posts">;

const WORDS_PER_MINUTE = 200;
const EXCERPT_LENGTH = 160;
const HTML_TAG = /<[^>]*>/g;
const MARKDOWN_SYNTAX = /[#*_`>~[\]()!|-]+/g;
const WHITESPACE = /\s+/g;

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

export const formatDate = (date: Date): string => dateFormatter.format(date);

export const postHref = (post: Post): string => `/writings/posts/${post.id}`;

export const tagHref = (tag: string): string => `/writings/tags/${tag}`;

export const sortDate = (post: Post): Date => post.data.updated ?? post.data.published;

const TAG_SEPARATOR = /\s+/g;

export const postTags = (post: Post): string[] => [
  ...new Set(
    post.data.tags
      .map((tag) => tag.trim().toLowerCase().replace(TAG_SEPARATOR, "-"))
      .filter((tag) => tag.length > 0),
  ),
];

const plainText = (post: Post): string =>
  (post.body ?? "")
    .replace(HTML_TAG, " ")
    .replace(MARKDOWN_SYNTAX, " ")
    .replace(WHITESPACE, " ")
    .trim();

export const excerpt = (post: Post): string => {
  if (post.data.description) {
    return post.data.description;
  }
  const text = plainText(post);
  if (text.length <= EXCERPT_LENGTH) {
    return text;
  }
  const cut = text.slice(0, EXCERPT_LENGTH);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
};

export const readingMinutes = (post: Post): number => {
  const words = plainText(post).split(" ").filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
};

/** Published posts, newest first by last update. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection("posts", (post) => !post.data.draft);
  return posts.sort((a, b) => sortDate(b).getTime() - sortDate(a).getTime());
}

export async function getTags(): Promise<Map<string, Post[]>> {
  const tags = new Map<string, Post[]>();
  for (const post of await getPosts()) {
    for (const tag of postTags(post)) {
      const tagged = tags.get(tag);
      if (tagged) {
        tagged.push(post);
      } else {
        tags.set(tag, [post]);
      }
    }
  }
  return new Map([...tags].sort(([a], [b]) => a.localeCompare(b)));
}
