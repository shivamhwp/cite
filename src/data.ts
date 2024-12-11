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
export type movie = {
  title: string;
  image?: string;
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

export const movies: movie[] = [
  {
    title: "Attack On Titan",
    image: "https://utfs.io/f/38t7p527clgqTWAzVScCZGuB4JXj70amYe8kDsr5IfyOV6oq",
  },
  {
    title: "FA:B(2011)",
    image: "https://utfs.io/f/38t7p527clgqxbUaIBOiHMLWyPSuw0YQjOE3Jp6aTBv9R2zA",
  },
  {
    title: "Jujutsu Kaisen",
    image: "https://utfs.io/f/38t7p527clgqaYili5RSSd4Q2G6RY0tJ91LjbAD3iwVThHfs",
  },
  {
    title: "Demon Slayer",
    image: "https://utfs.io/f/38t7p527clgqVEatlqP8ucaGgpRSEd10zrBoDAHP2nQM6mY4",
  },
  {
    title: "One Punch Man",
    image: "https://utfs.io/f/38t7p527clgqaLvGPqSSd4Q2G6RY0tJ91LjbAD3iwVThHfsp",
  },
  {
    title: "Se7en",
    image: "https://utfs.io/f/38t7p527clgqEwvYYfxK7iJruFcAblpzLxNM30vHj4R1XQGm",
  },
  {
    title: "Hunter x Hunter(2011)",
    image: "https://utfs.io/f/38t7p527clgqcCGEbjggLnpFWuQyrejwqNAbak791G6l3HdE",
  },
  {
    title: "Mr Robot",
    image: "https://utfs.io/f/38t7p527clgq3tzOAw27clgq2Loar4WRnpkZsw1SjHvFP9ID",
  },
  {
    title: "The Prestige",
    image: "https://utfs.io/f/38t7p527clgq7plGnEIYty0zsu2PpBGJxga1efWZASI7i4DU",
  },
  {
    title: "The Godfather",
    image: "https://utfs.io/f/38t7p527clgq94yp73KSrd604KHFMvgZiCXh5UyBeNmJtAOY",
  },
  {
    title: "Whiplash",
    image: "https://utfs.io/f/38t7p527clgq6AKXtuwa8bZ5qDz47jVFlBRsQ9uAk2Ydihvr",
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
