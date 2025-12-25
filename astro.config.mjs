import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
	experimental: {
		fonts: [
			{
				name: "Inter Tight",
				cssVariable: "--font-inter-tight",
				provider: fontProviders.google(),
				fallbacks: ["sans-serif"],
			},
			{
				name: "Azeret Mono",
				cssVariable: "--font-azeret-mono",
				provider: fontProviders.fontshare(),
				fallbacks: ["monospace"],
			},
			{
				name: "Melodrama",
				cssVariable: "--font-melodrama",
				provider: fontProviders.fontshare(),
				fallbacks: ["serif"],
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
