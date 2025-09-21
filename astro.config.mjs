import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
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
	},

  output: "static",

  vite: {
    plugins: [tailwindcss()],
  },
});