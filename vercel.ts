import type { VercelConfig } from "@vercel/config/v1";

export const config: VercelConfig = {
  bunVersion: "1.x",
  redirects: [
    {
      source: "/youtube",
      destination: "https://youtube.com/@shivamhwp_",
    },
    {
      source: "/github",
      destination: "https://github.com/shivamhwp",
    },
    {
      source: "/twitter",
      destination: "https://x.com/shivamhwp",
    },
    {
      source: "/ai",
      destination: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
  ],
};
