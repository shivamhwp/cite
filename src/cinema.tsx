import { movies, songs } from "./data";

export default function CinemaComponent() {
  return (
    <div className="flex justify-between h-full w-full pt-14 max-sm:pt-16 ">
      <div className="gap-8 text-xl">
        <div className="flex flex-col">
          {movies.map((movie) => {
            return (
              <div
                key={movie.title}
                className={`font-semibold text-8xl  md:text-6xl hover:text-opacity-70  max-sm:text-3xl `}
              >
                {movie.title}
              </div>
            );
          })}
        </div>
        <hr className="border-black my-12" />
        <ul className="pb-16 ">
          {songs.map((song) => {
            return (
              <li className=" hover:underline " key={song.title}>
                <a href={song.link} target="_blank">
                  {song.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <a
        href="/"
        className=" font-medium fixed bottom-4 right-4   text-5xl max-sm:text-3xl p-2 rounded-full  hover:underline transition duration-300"
      >
        back
      </a>
    </div>
  );
}
