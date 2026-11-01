export const SITE = {
  url: "https://www.shivam.ing",
  name: "shivam",
  domain: "shivam.ing",
  description: "an ipv4 address",
  ogImage: "/images/opengraph-image.png",
  twitter: "@shivamhwp",
  email: "work@shivam.ing",
} as const;

export type Route = {
  href: string;
  label: string;
  shortcut: string;
};

export const ROUTES: readonly Route[] = [
  { href: "/cinema", label: "cinema", shortcut: "c" },
  { href: "/writings", label: "writing", shortcut: "w" },
  { href: "/updates", label: "updates", shortcut: "u" },
  { href: "/work", label: "work", shortcut: "s" },
];

export const HOME_SHORTCUT = "h";
