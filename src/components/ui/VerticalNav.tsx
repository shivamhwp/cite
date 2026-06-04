"use client";

import { useEffect } from "react";
import { socials } from "@/data";

interface VerticalNavProps {
  pathname: string;
}

export function VerticalNav({ pathname }: VerticalNavProps) {
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  const primaryItems = [
    { path: "/", label: "home" },
    { path: "/cinema", label: "cinema" },
    { path: "/writings", label: "writing" },
  ];

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) {
        return;
      }
      const target = event.target as HTMLElement | null;
      const isTypingTarget =
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target?.isContentEditable;
      if (isTypingTarget) {
        return;
      }

      const key = event.key.toLowerCase();
      const destination =
        key === "h"
          ? "/"
          : key === "c"
            ? "/cinema"
            : key === "w"
              ? "/writings"
              : key === "s"
                ? "/work"
                : null;

      if (!destination) {
        return;
      }
      if (window.location.pathname === destination) {
        return;
      }

      event.preventDefault();
      window.location.assign(destination);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <nav className="flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-2 pt-4">
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 sm:gap-x-3">
        {primaryItems.map((item) => {
          const active = isActive(item.path);
          return (
            <a
              key={item.path}
              href={item.path}
              className={`transition-colors ${
                active ? "text-foreground/80" : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label={item.label}
              title={item.label}
            >
              {item.label}
            </a>
          );
        })}
        <a
          href="/work"
          className={`transition-colors px-1 ${
            isActive("/work")
              ? "text-background bg-foreground "
              : "text-muted-foreground hover:text-foreground font-normal"
          }`}
        >
          work?
        </a>
      </div>
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 sm:gap-x-3">
        {socials.map((social) => {
          return (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={social.title}
              title={social.title}
            >
              {social.title}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
