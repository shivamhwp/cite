import { navigate } from "astro:transitions/client";
import { Description, Title } from "@radix-ui/react-dialog";
import { Command } from "cmdk";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { isExternal, type UrlCategory, type UrlItem } from "@/lib/links";
import { SITE } from "@/site";

const CATEGORY_ORDER: readonly UrlCategory[] = ["pages", "writing", "projects", "music", "socials"];
const COPY_FEEDBACK_MS = 1200;

const SEARCH_TERM_SPLIT = /\s+/;
const PREFIX_MATCH_SCORE = 1;
const SUBSTRING_MATCH_SCORE = 0.5;

/** Every search word must appear in the item's keywords; prefix matches rank first. */
const filterItems = (_value: string, search: string, keywords: string[] = []): number => {
  const haystack = keywords.join(" ").toLowerCase();
  const terms = search.toLowerCase().split(SEARCH_TERM_SPLIT).filter(Boolean);
  if (!terms.every((term) => haystack.includes(term))) {
    return 0;
  }
  const [first = ""] = terms;
  return haystack.startsWith(first) || haystack.includes(` ${first}`)
    ? PREFIX_MATCH_SCORE
    : SUBSTRING_MATCH_SCORE;
};

const isTypingTarget = (target: EventTarget | null): boolean =>
  target instanceof HTMLInputElement ||
  target instanceof HTMLTextAreaElement ||
  target instanceof HTMLSelectElement ||
  (target instanceof HTMLElement && target.isContentEditable);

/** True when following the url replaces the current page, so focus has nowhere to return. */
const leavesPage = (url: string): boolean =>
  !isExternal(url) && !url.startsWith("mailto:") && window.location.pathname !== url;

const focusedElement = (): HTMLElement | null => {
  const active = document.activeElement;
  return active instanceof HTMLElement && active !== document.body ? active : null;
};

const go = (url: string) => {
  if (isExternal(url)) {
    window.open(url, "_blank", "noopener,noreferrer");
    return;
  }
  if (url.startsWith("mailto:") || url.endsWith(".xml")) {
    window.location.href = url;
    return;
  }
  if (window.location.pathname !== url) {
    void navigate(url);
  }
};

interface CommandPaletteProps {
  items: UrlItem[];
}

export function CommandPalette({ items }: CommandPaletteProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  // The dialog portals into this node, inside the persisted island, so a router swap
  // (including browser back) can't remove it from under an open dialog.
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const copiedTimer = useRef<number | undefined>(undefined);

  const changeOpen = useCallback((next: boolean) => {
    if (next) {
      returnFocus.current = focusedElement();
    }
    setOpen(next);
  }, []);

  const groups = useMemo(
    () =>
      CATEGORY_ORDER.map((category) => ({
        category,
        items: items.filter((item) => item.category === category),
      })).filter((group) => group.items.length > 0),
    [items],
  );

  const shortcuts = useMemo(
    () =>
      new Map(items.flatMap((item) => (item.shortcut ? [[item.shortcut, item.url] as const] : []))),
    [items],
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.isComposing || event.repeat) {
        return;
      }
      const key = event.key.toLowerCase();

      if (key === "k" && (event.metaKey || event.ctrlKey) && !event.altKey) {
        event.preventDefault();
        changeOpen(!open);
        return;
      }

      const hasModifier = event.metaKey || event.ctrlKey || event.altKey;
      if (hasModifier || open || isTypingTarget(event.target)) {
        return;
      }

      // Some layouts need Shift to type "/", so it skips the Shift check below.
      if (key === "/") {
        event.preventDefault();
        changeOpen(true);
        return;
      }

      if (event.shiftKey) {
        return;
      }

      if (key === "t") {
        window.toggleTheme();
        return;
      }

      const destination = shortcuts.get(key);
      if (destination) {
        event.preventDefault();
        go(destination);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, shortcuts, changeOpen]);

  // Close before the router swaps the page so the dialog's body locks are released on the old body.
  useEffect(() => {
    const close = () => {
      returnFocus.current = null;
      flushSync(() => setOpen(false));
    };
    document.addEventListener("astro:before-swap", close);
    return () => document.removeEventListener("astro:before-swap", close);
  }, []);

  // Radix has no trigger to return focus to, so put it back where it was before opening.
  useEffect(() => {
    if (open) {
      return;
    }
    const target = returnFocus.current;
    returnFocus.current = null;
    if (!target) {
      return;
    }
    const timer = window.setTimeout(() => {
      if (target.isConnected) {
        target.focus();
      }
    }, 0);
    return () => window.clearTimeout(timer);
  }, [open]);

  const run = useCallback((action: () => void, keepFocus = true) => {
    if (!keepFocus) {
      returnFocus.current = null;
    }
    setOpen(false);
    action();
  }, []);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      window.clearTimeout(copiedTimer.current);
      copiedTimer.current = window.setTimeout(() => setCopied(false), COPY_FEEDBACK_MS);
    } catch {
      window.location.href = `mailto:${SITE.email}`;
    }
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => changeOpen(true)}
        className="fixed right-3 bottom-3 z-40 cursor-pointer font-mono text-xs text-foreground/25 transition-colors hover:text-foreground/70 sm:right-4 sm:bottom-4"
        aria-label="open command menu"
        aria-keyshortcuts="Meta+K Control+K /"
      >
        <span className="hidden sm:inline">⌘k</span>
        <span className="sm:hidden">menu</span>
      </button>

      <Command.Dialog
        open={open}
        onOpenChange={changeOpen}
        container={container ?? undefined}
        label="command menu"
        loop
        filter={filterItems}
        overlayClassName="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0"
        contentClassName="fixed left-1/2 top-[14vh] z-50 w-[calc(100%-1.5rem)] max-w-lg -translate-x-1/2 border border-muted-foreground/15 bg-background shadow-2xl data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95"
      >
        <Title className="sr-only">command menu</Title>
        <Description className="sr-only">
          search pages, writing, projects and music. enter opens the selected item.
        </Description>
        <Command.Input
          placeholder="go anywhere…"
          className="w-full border-b border-muted-foreground/15 bg-transparent px-4 py-3 text-foreground outline-none placeholder:text-foreground/30"
        />
        <Command.List className="max-h-[min(60vh,26rem)] overflow-y-auto overscroll-contain p-1.5">
          <Command.Empty className="px-3 py-6 text-center text-foreground/40">
            nothing here.
          </Command.Empty>

          {groups.map((group) => (
            <Command.Group key={group.category} heading={group.category}>
              {group.items.map((item) => (
                <Command.Item
                  key={`${item.category}:${item.url}`}
                  value={`${item.title} · ${item.category} · ${item.url}`}
                  keywords={[item.title, item.category, ...(item.keywords ?? [])]}
                  onSelect={() => run(() => go(item.url), !leavesPage(item.url))}
                >
                  <span className="truncate">{item.title}</span>
                  <span className="ml-auto flex shrink-0 items-center gap-2 text-foreground/30">
                    {item.hint}
                    {item.shortcut && <kbd>{item.shortcut}</kbd>}
                    {isExternal(item.url) && <span aria-hidden="true">↗</span>}
                  </span>
                </Command.Item>
              ))}
            </Command.Group>
          ))}

          <Command.Group heading="actions">
            <Command.Item
              value="toggle theme"
              keywords={["toggle theme dark light mode actions"]}
              onSelect={() => run(window.toggleTheme)}
            >
              <span>toggle theme</span>
              <kbd className="ml-auto text-foreground/30">t</kbd>
            </Command.Item>
            <Command.Item
              value="copy email"
              keywords={["copy email address contact mail work actions"]}
              onSelect={() => void copyEmail()}
            >
              <span>{copied ? "copied." : "copy email"}</span>
              <span className="ml-auto text-foreground/30">{SITE.email}</span>
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command.Dialog>
      <div ref={setContainer} />
    </>
  );
}
