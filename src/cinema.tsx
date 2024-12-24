import { movies, songs } from "./data";

export default function CinemaComponent() {
  return (
    <div className="flex h-full w-full justify-between">
      <div className="flex h-full w-full flex-col">
        <div className="flex w-full flex-col">
          {movies.map((movie) => {
            return (
              <div
                key={movie.title}
                className={`flex w-full font-serif text-5xl`}
              >
                {movie.title}
              </div>
            );
          })}
        </div>
        <hr className="my-8 border-white/45" />
        <ul className="flex flex-col pb-16">
          {songs.map((song) => {
            return (
              <li className="" key={song.title}>
                <a
                  href={song.link}
                  target="_blank"
                  className="text-lg underline-offset-4 transition duration-500 hover:text-white"
                >
                  {song.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <a
        href="/"
        className="fixed bottom-4 right-4 p-2 text-xl font-medium transition duration-300 hover:cursor-pointer hover:underline max-sm:text-3xl"
      >
        back
      </a>
    </div>
  );
}
