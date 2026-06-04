"use client";

interface PostItemProps {
  href: string;
  title: string;
  date: string;
}

export function PostItem({ href, title, date }: PostItemProps) {
  return (
    <a
      href={href}
      className="block no-underline text-muted-foreground hover:text-foreground transition-colors"
    >
      <div className="flex flex-col py-1.5 sm:py-1 sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
        <span className="font-normal">{title}</span>
        <time className="whitespace-nowrap">{date}</time>
      </div>
    </a>
  );
}
