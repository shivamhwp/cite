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
};
export type skill = {
  id: number;
  title: string;
};

export const songs = [
  {
    title: "Requiem for the Brigadier General",
    link: "https://www.youtube.com/watch?v=G6kSqPpSz1g",
  },
  {
    title: "3.0_1-one2blame.fyc",
    link: "https://www.youtube.com/watch?v=0pux7a1y8xo",
  },
  {
    title: "An Ordinary Day",
    link: "https://www.youtube.com/watch?v=dygUU9itPXw",
  },
  {
    title: "YouSeeBIGGIRL/T:T",
    link: "https://youtu.be/vy63u2hKoPE",
  },
  {
    title: "Idea 10",
    link: "https://www.youtube.com/watch?v=5OIeIaAhQOg",
  },
  {
    title: "1.4_1-squ4rewiththeuniverse.wma",
    link: "https://www.youtube.com/watch?v=n3x0GylBOM0",
  },
  {
    title: "night of the end",
    link: "https://youtu.be/AVgrV4clLTc",
  },
];

export const movies = [
  {
    title: "Attack On Titan",
  },
  {
    title: "Fullmetal Alchemist:Brotherhood",
  },
  {
    title: "Jujutsu Kaisen",
  },
  {
    title: "Demon Slayer",
  },
  {
    title: "One Punch Man",
  },
  {
    title: "Se7en",
  },
  {
    title: "Hunter x Hunter(2011)",
  },
  {
    title: "Oppenheimer",
  },
  {
    title: "Mr Robot",
  },
  {
    title: "The Prestige",
  },

  {
    title: "Whiplash",
  },
];
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
  },
  {
    id: 2,
    title: "github",
    link: "https://github.com/shivamhwp",
  },

  {
    id: 3,
    title: "linkedin",
    link: "https://linkedin.com/in/shivamhwp",
  },

  {
    id: 4,
    title: "yt",
    link: "https://www.youtube.com/@shivamhwp_",
  },
  {
    id: 5,
    title: "bsky",
    link: "https://bsky.app/profile/shivam.ing",
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
