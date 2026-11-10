/**
 * Keeps the HTML of every page linked from the current one in memory, so the
 * router swaps to it without waiting on the network. The pages are a few
 * kilobytes each; a reload fetches them fresh.
 */
const HTML_TYPE = "text/html";
const FILE_EXTENSION = /\.[a-z0-9]+$/i;
/** The scripts an island needs before it can hydrate. */
const ISLAND_SCRIPT = /(?:component|renderer)-url="([^"]+)"/g;

const pages = new Map<string, string>();
const loading = new Set<string>();
const preloaded = new Set<string>();
const parser = new DOMParser();

const pageKey = (url: URL): string => `${url.pathname}${url.search}`;

const isPage = (url: URL): boolean =>
  url.origin === window.location.origin && !FILE_EXTENSION.test(url.pathname);

/** Fetches the page's island scripts ahead of time, so its tabs and menus work the moment it shows. */
const preloadIslands = (html: string): void => {
  for (const [, src] of html.matchAll(ISLAND_SCRIPT)) {
    if (src === undefined || preloaded.has(src)) {
      continue;
    }
    preloaded.add(src);
    const link = document.createElement("link");
    link.rel = "modulepreload";
    link.href = src;
    document.head.append(link);
  }
};

const warm = async (url: URL): Promise<void> => {
  const key = pageKey(url);
  if (pages.has(key) || loading.has(key)) {
    return;
  }
  loading.add(key);
  try {
    const response = await fetch(key, { priority: "low" });
    const isHtml = response.headers.get("content-type")?.startsWith(HTML_TYPE) ?? false;
    if (response.ok && !response.redirected && isHtml) {
      const html = await response.text();
      pages.set(key, html);
      preloadIslands(html);
    }
  } catch {
    // Offline or blocked: the router fetches the page on click, as it did before.
  } finally {
    loading.delete(key);
  }
};

const warmLinks = (): void => {
  const here = pageKey(new URL(window.location.href));
  for (const anchor of document.querySelectorAll<HTMLAnchorElement>("a[href]")) {
    const url = new URL(anchor.href);
    if (isPage(url) && pageKey(url) !== here) {
      void warm(url);
    }
  }
};

/** True when the page needs a stylesheet this one hasn't loaded, which the router's own loader waits for. */
const needsNewStyles = (next: Document): boolean => {
  const loaded = new Set(
    [...document.querySelectorAll<HTMLLinkElement>("link[rel=stylesheet]")].map(
      (link) => link.href,
    ),
  );
  return [...next.querySelectorAll<HTMLLinkElement>("head link[rel=stylesheet]")].some(
    (link) => !loaded.has(new URL(link.getAttribute("href") ?? "", window.location.href).href),
  );
};

document.addEventListener("astro:before-preparation", (event) => {
  const html = pages.get(pageKey(event.to));
  if (html === undefined || event.formData) {
    return;
  }
  const next = parser.parseFromString(html, HTML_TYPE);
  if (needsNewStyles(next)) {
    return;
  }
  for (const noscript of next.querySelectorAll("noscript")) {
    noscript.remove();
  }
  event.loader = async () => {
    event.newDocument = next;
  };
});

document.addEventListener("astro:page-load", warmLinks);
