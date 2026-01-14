import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
	experimental: {
		fonts: [
			{
				name: "JetBrains Mono",
				cssVariable: "--font-jetbrains-mono",
				provider: fontProviders.fontshare(),
				fallbacks: ["monospace"],
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
	},

	output: "static",

	vite: {
		plugins: [tailwindcss()],
	},
});
