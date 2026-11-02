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
];

/** Sections of the home page, for the command palette. */
export const SECTIONS: readonly { id: string; label: string }[] = [{ id: "work", label: "work" }];

export const HOME_SHORTCUT = "h";
