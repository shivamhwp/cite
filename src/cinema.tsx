"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { movies, songs } from "@/data";

export default function CinemaPage() {
  return (
    <div className="flex w-full flex-col h-full min-h-0 font-normal">
      <Tabs defaultValue="films" className="flex h-full min-h-0 flex-col">
        <TabsList variant="line" className="z-10 shrink-0 bg-background">
          <TabsTrigger value="films">mkv</TabsTrigger>
          <TabsTrigger value="music">wav</TabsTrigger>
        </TabsList>

        <TabsContent value="films" className="mt-0 min-h-0 flex-1">
          <div className="h-full min-h-0 overflow-y-auto pb-10">
            <Accordion type="single" collapsible>
              {movies.map((movie) =>
                movie.description ? (
                  <AccordionItem key={movie.title} value={movie.title}>
                    <AccordionTrigger>{movie.title}</AccordionTrigger>
                    <AccordionContent>{movie.description}</AccordionContent>
                  </AccordionItem>
                ) : (
                  <div
                    key={movie.title}
                    className="border-b border-muted-foreground/8 py-2 last:border-0 text-base font-normal text-primary/70"
                  >
                    {movie.title}
                  </div>
                ),
              )}
            </Accordion>
          </div>
        </TabsContent>

        <TabsContent value="music" className="mt-0 min-h-0 flex-1">
          <div className="flex h-full min-h-0 flex-col overflow-y-auto pb-10">
            {songs.map((song) => (
              <a
                key={song.title}
                href={song.link}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 border-b border-muted-foreground/8 last:border-0 text-base font-normal text-muted-foreground hover:text-primary/70 transition-colors"
              >
                {song.title}
              </a>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
