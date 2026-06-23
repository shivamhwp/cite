import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import { remarkMarkdownClasses } from "./src/lib/markdown-remark-plugin.mjs";

export default defineConfig({
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

  integrations: [react()],

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
