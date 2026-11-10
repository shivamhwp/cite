import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import { remarkMarkdownClasses } from "./src/lib/markdown-remark-plugin.mjs";

export default defineConfig({
  site: "https://www.shivam.ing",
  trailingSlash: "never",
  // src/lib/instant-nav.ts keeps every linked page in memory instead.
  prefetch: false,
  fonts: [
    {
      name: "Geist",
      cssVariable: "--font-geist",
      provider: fontProviders.google(),
      weights: [400],
      styles: ["normal"],
      fallbacks: ["sans-serif"],
    },
    {
      name: "Geist Mono",
      cssVariable: "--font-geist-mono",
      provider: fontProviders.google(),
      weights: [400],
      styles: ["normal"],
      fallbacks: ["ui-monospace", "monospace"],
    },
  ],
  image: {
    domains: ["utfs.io"],
    remotePatterns: [
      {
        protocol: "https",
      },
    ],
  },

  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.endsWith("/404"),
    }),
  ],

  markdown: {
    processor: unified({
      gfm: true,
      remarkPlugins: [remarkMarkdownClasses],
    }),
    syntaxHighlight: "shiki",
  },

  output: "static",

  vite: {
    plugins: [tailwindcss()],
  },
});
