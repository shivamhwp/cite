/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./src/topnav.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Instrument Serif"],
      },
    },
    plugins: [],
  },
};
