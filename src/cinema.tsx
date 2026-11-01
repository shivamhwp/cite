import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { type movie, movies, now, songs } from "@/data";

const TABS = ["mkv", "wav", "now"] as const;
type Tab = (typeof TABS)[number];
const DEFAULT_TAB: Tab = "mkv";

const isTab = (value: string): value is Tab => (TABS as readonly string[]).includes(value);

/** The tab the hash names, the default for no hash, or null for an unrelated anchor like #main. */
const tabFromHash = (): Tab | null => {
  const hash = window.location.hash.slice(1);
  if (hash === "") {
    return DEFAULT_TAB;
  }
  return isTab(hash) ? hash : null;
};

function MovieList({ items }: { items: movie[] }) {
  return (
    <Accordion type="single" collapsible>
      {items.map((item) =>
        item.description ? (
          <AccordionItem key={item.title} value={item.title}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.description}</AccordionContent>
          </AccordionItem>
        ) : (
          <div
            key={item.title}
            className="border-b border-muted-foreground/8 py-2 font-normal text-primary/70 last:border-0"
          >
            {item.title}
          </div>
        ),
      )}
    </Accordion>
  );
}

export default function CinemaPage() {
  const [tab, setTab] = useState<Tab>(DEFAULT_TAB);

  useEffect(() => {
    const sync = () => {
      const next = tabFromHash();
      if (next) {
        setTab(next);
      }
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const onTabChange = (value: string) => {
    if (!isTab(value)) {
      return;
    }
    setTab(value);
    const hash = value === DEFAULT_TAB ? "" : `#${value}`;
    window.history.replaceState(window.history.state, "", `${window.location.pathname}${hash}`);
  };

  return (
    <div className="flex w-full flex-col font-normal">
      <header className="mb-3 flex items-baseline justify-between gap-4">
        <h1 className="font-normal text-foreground">cinema</h1>
        <a
          href="/"
          className="inline-flex items-center gap-1.5 text-muted-foreground no-underline transition-colors hover:text-foreground"
        >
          <span aria-hidden="true">←</span>
          <span>home</span>
        </a>
      </header>
      <Tabs value={tab} onValueChange={onTabChange} className="flex flex-col">
        <TabsList variant="line" className="sticky top-0 z-10 bg-background">
          <TabsTrigger value="mkv">
            mkv <sup className="ml-0.5 text-foreground/30 tabular-nums">{movies.length}</sup>
          </TabsTrigger>
          <TabsTrigger value="wav">
            wav <sup className="ml-0.5 text-foreground/30 tabular-nums">{songs.length}</sup>
          </TabsTrigger>
          <TabsTrigger value="now">now</TabsTrigger>
        </TabsList>

        <TabsContent value="mkv" className="mt-0">
          <MovieList items={movies} />
        </TabsContent>

        <TabsContent value="wav" className="mt-0">
          <ul className="flex flex-col">
            {songs.map((song) => (
              <li key={song.link} className="border-b border-muted-foreground/8 last:border-0">
                <a
                  href={song.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 font-normal text-muted-foreground transition-colors hover:text-primary/70"
                >
                  {song.title.trim()}
                </a>
              </li>
            ))}
          </ul>
        </TabsContent>

        <TabsContent value="now" className="mt-0">
          <MovieList items={now} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
