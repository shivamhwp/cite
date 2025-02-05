import { movies, songs } from "./data";

export default function CinemaComponent() {
  return (
    <div className="relative z-10 flex h-full w-full justify-between overflow-x-hidden overflow-y-scroll [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex h-full w-full flex-col">
        <div className="flex w-full flex-col gap-3">
          {/* movies list */}
          {movies.map((movie) => {
            return (
              <div className="" key={movie.title}>
                <div className={`flex w-full text-white font-serif text-5xl`}>
                  {movie.title}
                </div>
                <div className="text-white text-opacity-60">{movie.description}</div>
              </div>
            );
          })}
        </div>
        <hr className="my-8 border-white border-opacity-60 border-dashed" />
        <ul className="flex flex-col pb-16">
          {/* songs list */}
          {songs.map((song) => {
            return (
              <li className="" key={song.title}>
                <a
                  href={song.link}
                  target="_blank"
                  className="font-serif text-xl underline-offset-4 transition duration-500 hover:text-white"
                >
                  {song.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
