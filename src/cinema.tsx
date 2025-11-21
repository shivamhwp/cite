"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { movies, songs } from "@/data";

export default function CinemaPage() {
  return (
    <div className="mx-auto max-w-2xl">
      <Tabs className="w-full" defaultValue="films">
        <TabsList className="">
          <TabsTrigger className="px-2 py-1 text-xl" value="films">
            mkv
          </TabsTrigger>
          <TabsTrigger className="px-2 py-1 text-xl" value="songs">
            mp4
          </TabsTrigger>
        </TabsList>
        <TabsContent value="films">
          <div className="space-y-2">
            {movies.map((movie) => (
              <div
                className="group flex h-12 min-h-0 items-center rounded-lg border px-4 py-2 transition-colors"
                key={movie.title}
              >
                <div className="flex h-full w-full items-center gap-3">
                  <div
                    className="w-1/3 truncate font-semibold text-base"
                    title={movie.title}
                  >
                    {movie.title}
                  </div>
                  {movie.description && (
                    <div
                      className="line-clamp-2 w-2/3 text-muted-foreground text-xs"
                      title={movie.description}
                    >
                      {movie.description}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="songs">
          <div className="space-y-2">
            {songs.map((song) => (
              <div
                className="group flex h-12 min-h-0 cursor-pointer items-center rounded-lg border px-4 py-2 transition-colors hover:border-primary hover:bg-accent"
                key={song.title}
              >
                <div className="flex h-full w-full items-center gap-3">
                  <a
                    aria-label={song.title}
                    className="w-full truncate font-medium text-primary"
                    href={song.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    title={song.title}
                  >
                    {song.title}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
