import type { APIRoute } from "astro";
import { SITE } from "@/site";

export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL("sitemap-index.xml", site ?? SITE.url);
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap.href}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
