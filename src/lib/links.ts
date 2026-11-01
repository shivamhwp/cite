// Client-safe: no astro:content imports, so islands can use it.
export type UrlCategory = "pages" | "writing" | "projects" | "music" | "socials";

export type UrlItem = {
  title: string;
  url: string;
  category: UrlCategory;
  hint?: string;
  shortcut?: string;
  /** Extra search terms, e.g. a post's slug and tags. */
  keywords?: string[];
};

export const isExternal = (url: string): boolean => /^https?:\/\//.test(url);
