import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import { remarkMarkdownClasses } from "./src/lib/markdown-remark-plugin.mjs";

export default defineConfig({
  experimental: {
    fonts: [
      {
        name: "Poppins",
        cssVariable: "--font-poppins",
        provider: fontProviders.fontshare(),
        fallbacks: ["ui-sans-serif", "sans-serif", "system-ui"],
      },
      {
        name: "JetBrains Mono",
        cssVariable: "--font-jetbrains-mono",
        provider: fontProviders.fontshare(),
        fallbacks: ["ui-monospace", "monospace"],
      },
    ],
  },
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
    syntaxHighlight: "shiki",
    gfm: true,
    remarkPlugins: [remarkMarkdownClasses],
  },

  output: "static",

  vite: {
    plugins: [tailwindcss()],
  },
});
