import "../.astro/types.d.ts";
/// <reference types="astro/client" />

declare global {
  interface Window {
    applySavedTheme: () => void;
    setTheme: (theme: "dark" | "light") => void;
    toggleTheme: () => void;
    hasThemeRouterSync?: boolean;
  }
}
