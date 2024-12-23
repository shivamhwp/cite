import { movies, songs } from "./data";

export default function CinemaComponent() {
  return (
    <div className="flex h-full w-full justify-between overflow-y-scroll [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex w-full flex-col">
        <div className="flex w-full flex-col">
          {movies.map((movie) => {
            return (
              <div
                key={movie.title}
                className={`group flex w-full border-2 border-black text-5xl font-semibold duration-500`}
              >
                {movie.title}
              </div>
            );
          })}
        </div>
        <hr className="my-12 border-white" />
        <ul className="pb-16">
          {songs.map((song) => {
            return (
              <li className="" key={song.title}>
                <a
                  href={song.link}
                  target="_blank"
                  className="px-1 transition duration-500 hover:bg-zinc-600"
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
