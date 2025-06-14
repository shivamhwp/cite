export type social = {
  id: number;
  title: string;
  link: string;
  icon_name?: string;
};
export type movie = {
  title: string;
  description?: string;
};

export type song = {
  title: string;
  link: string;
};

export type code_projects = {
  project_name: string;
  github: string;
  image?: string;
  live_link?: string;
  docs: string;
  description: string;
};

export const code_projects: code_projects[] = [
  {
    project_name: "git-acm",
    description: "generate meaningful commit messages locally using AI.",
    github: "https://github.com/shivamhwp/git-acm",
    docs: "https://git-acm.pages.dev",
  },
  {
    project_name: "isup",
    description: "on-device monitoring, lightweight, instant, and efficient.",
    github: "https://github.com/shivamhwp/isup",
    docs: "https://isup-docs.pages.dev",
  },
];

export const songs = [
  {
    title: "Requiem for the Brigadier General",
    link: "https://www.youtube.com/watch?v=G6kSqPpSz1g",
  },
  {
    title: "But Not For Me (Vocal Version) ",
    link: "https://www.youtube.com/watch?v=QwAwtMt8t4s",
  },
  {
    title: "Into the night",
    link: "https://youtu.be/d-ePNt_NlF4",
  },
  {
    title: "Lacrimosa",
    link: "https://youtu.be/k1-TrAvp_xs",
  },
  {
    title: "3.0_1-one2blame.fyc",
    link: "https://www.youtube.com/watch?v=0pux7a1y8xo",
  },
  {
    title: "Piano Black",
    link: "https://youtu.be/ssmYUDYtrKA",
  },
  {
    title: "Tank!",
    link: "https://youtu.be/UFFa0QoHWvE",
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
    title: "Night of the end",
    link: "https://youtu.be/AVgrV4clLTc",
  },

  {
    title: "pseudo",
    link: "https://www.youtube.com/watch?v=9XHVg4GTzPs",
  },
];

export const movies: movie[] = [
  {
    title: "Attack On Titan",
    description: "one of my favourites. heartbound.",
  },
  {
    title: "Fullmetal Alchemist:Brotherhood(2011)",
    description: "one of my favourites.",
  },
  {
    title: "Jujutsu Kaisen",
    description: "super interesting, crazy storyline.",
  },
  {
    title: "Se7en",
    description: "simple and sanguinary. ofc by david fincher.",
  },
  {
    title: "Hunter x Hunter(2011)",
    description: "one of my favourites.",
  },
  {
    title: "Whiplash",
    description: "obsession explained.",
  },
  {
    title: "Mr Robot",
    description: "you should watch this",
  },
  {
    title: "Manchester by the Sea",
    description: "",
  },
  {
    title: "The Prestige",
    description: "",
  },
  {
    title: "nymphomaniac volume 1 and 2",
    description:
      "one of the most interesting movies i've seen lately.Charlotte Lucy Gainsbourg acting was insane.",
  },
];

export const socials: social[] = [
  {
    id: 1,
    title: "x",
    link: "https://x.com/shivamhwp",
    icon_name: "Twitter",
  },
  {
    id: 2,
    title: "gh",
    link: "https://github.com/shivamhwp",
    icon_name: "Github",
  },

  // {
  //   id: 3,
  //   title: "linkedin",
  //   link: "https://www.linkedin.com/in/shivamhwp/",
  //   icon_name: "Linkedin",
  // },

  {
    id: 4,
    title: "yt",
    link: "https://www.youtube.com/@shivamhwp_",
    icon_name: "Youtube",
  },
  {
    id: 5,
    title: "cal",
    link: "https://cal.com/shivamhwp/just-chatting",
    icon_name: "call",
  },
];

export const walls = [
  {
    id: 1,
    link: "https://utfs.io/f/cd8841e4-0cd3-4c3a-b260-6c1b416f45bf-ar80q7.png",
  },
];

export const updates = [
  {
    id: 1,
    description:
      "worked with the supermemoryai team for a bit, did some ai testing, research, evals and stuff. crazy team.",
  },
];
