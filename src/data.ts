import {
  RiLinkedinFill,
  RiTwitterXFill,
  RiGithubFill,
  RiYoutubeFill,
  type RemixiconComponentType,
} from "@remixicon/react";

export type project = {
  id: number;
  title: string;
  description: string;
  link: string;
  github_link?: string;
};

export type social = {
  id: number;
  title: string;
  link: string;
  icon: RemixiconComponentType | null;
  color?: string;
};
export type skill = {
  id: number;
  title: string;
};

export const projects: project[] = [
  {
    id: 1,
    title: "twemoji",
    description: "twitter but only emojis are allowed.",
    link: "https://twemoji-t3.vercel.app",
    github_link: "https://github.com/shivamhwp/twemoji",
  },
  {
    id: 2,
    title: "omegle",
    description: "omegle clone kind of",
    link: "https://github.com/shivamhwp/omegle-webrtc",
    github_link: "https://github.com/shivamhwp/omegle-webrtc",
  },
  {
    id: 3,
    title: "rev",
    description: "image uploader",
    link: "https://rev-beta.vercel.app",
    github_link: "https://github.com/shivamhwp/rev",
  },
  {
    id: 4,
    title: "meeraki fdn",
    description: "meeraki foundation",
    link: "https://meerakifoundation.org",
  },
  {
    id: 5,
    title: "zero",
    description: "journal type sleep app",
    link: "https://zzero.vercel.app",
  },
];

export const socials: social[] = [
  {
    id: 1,
    title: "x.com",
    link: "https://twitter.com/shivamhwp",
    icon: RiTwitterXFill,
    color: "text-blue-500",
  },
  {
    id: 2,
    title: "github",
    link: "https://github.com/shivamhwp",
    icon: RiGithubFill,
    color: "text-gray-200",
  },

  {
    id: 3,
    title: "linkedin",
    link: "https://linkedin.com/in/shivamhwp",
    icon: RiLinkedinFill,
    color: "text-blue-600",
  },

  {
    id: 4,
    title: "youtube",
    link: "https://www.youtube.com/@shivamhwp_",
    icon: RiYoutubeFill,
    color: "text-red-600",
  },
  {
    id: 5,
    title: "resume",
    link: "https://github.com/shivamhwp/shivamhwp/blob/main/about/resume.md",
    icon: null,
  },
];

export const skills: skill[] = [
  {
    id: 1,
    title: "typescript",
  },

  {
    id: 2,
    title: "react",
  },

  {
    id: 3,
    title: "nextjs",
  },
  {
    id: 4,
    title: "MERN",
  },

  {
    id: 5,
    title: "tailwindcss",
  },
  {
    id: 6,
    title: "t3-stack",
  },
];

export const walls = [
  {
    id: 1,
    link: "https://utfs.io/f/cd8841e4-0cd3-4c3a-b260-6c1b416f45bf-ar80q7.png",
  },
];
