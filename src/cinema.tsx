import { useState } from "react";
import { movies, songs, type movie, type song } from "./data";

export default function CinemaComponent() {
  const [showContent, setShowContent] = useState<"songs" | "movies">("movies");

  return (
    <div className="">
      <section className="transition duration-500">
        <div className="mb-6 flex flex-row gap-4">
          <button
            onClick={() => setShowContent("movies")}
            className={`px-4 py-2 ${
              showContent === "movies"
                ? "bg-black/20 text-black"
                : "text-black/50"
            }`}
          >
            mkv
          </button>
          <button
            onClick={() => setShowContent("songs")}
            className={`px-4 py-2 ${
              showContent === "songs"
                ? "bg-black/20 text-black"
                : "text-black/50"
            }`}
          >
            audio{" "}
          </button>
        </div>
        <div className="space-y-4">
          {showContent === "movies" &&
            movies.map((movie) => (
              <div key={movie.title} className="space-y-1">
                <h3 className="text-lg text-black/50 md:text-2xl">
                  {movie.title}
                  <p className="hidden max-w-2xl text-sm text-black/50 md:block md:text-base">
                    {movie.description}
                  </p>
                </h3>
              </div>
            ))}
          {showContent === "songs" &&
            songs.map((song) => (
              <div key={song.title} className="space-y-1">
                <h3 className="text-lg text-black/50 md:text-2xl">
                  <a
                    href={song.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition duration-500 hover:text-black/80"
                  >
                    {song.title}
                  </a>
                </h3>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
