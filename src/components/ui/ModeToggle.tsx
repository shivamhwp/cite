"use client";

import { useEffect, useState } from "react";

export function ModeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    const shouldBeDark = stored !== "light";
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList[newIsDark ? "add" : "remove"]("dark");
    localStorage.setItem("theme", newIsDark ? "dark" : "light");
  };

  if (!mounted) {
    return null;
  }

  return (
    <button
      className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "light mode" : "dark mode"}
    >
      {isDark ? "light" : "dark"}
    </button>
  );
}
