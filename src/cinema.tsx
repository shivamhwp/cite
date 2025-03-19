import { movies, songs } from "./data";

export default function CinemaComponent() {
  return (
    <div className="space-y-10">
      <section className="border border-white/10 p-3 pt-4 transition-colors duration-200 hover:border-white/20">
        <h2 className="mb-5 font-serif text-xl text-white/80 md:text-2xl">
          movies
        </h2>
        <div className="space-y-6">
          {movies.map((movie) => (
            <div key={movie.title} className="space-y-1">
              <h3 className="font-serif text-xl text-white/60 md:text-2xl">
                {movie.title}
              </h3>
              <p className="max-w-2xl text-sm text-white/40 md:text-base">
                {movie.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border border-white/10 p-3 transition-colors duration-200 hover:border-white/20">
        <h2 className="mb-5 font-serif text-xl text-white/80 md:text-2xl">
          songs
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {songs.map((song) => (
            <div key={song.title}>
              <a
                href={song.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-base text-white/50 transition-colors duration-200 hover:text-white/70 md:text-lg"
              >
                {song.title}
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
