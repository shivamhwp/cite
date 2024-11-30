import { movies, songs } from "./data";

export default function CinemaComponent() {
  return (
    <div className="flex justify-between h-full w-full overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]  ">
      <div className="gap-8 w-full flex  flex-col">
        <div className="flex flex-col w-full">
          {movies.map((movie) => {
            return (
              <div
                key={movie.title}
                className={` bg-cover bg-no-repeat hover:2xl:pb-16 hover:xl:pb-14 hover:max-lg:pb-2  flex  max-sm:hover:pb-0 group duration-500 w-full border-black border-2 `}
                style={{ backgroundImage: `url(${movie.image})` }}
              >
                <span className="group-hover:xl:text-transparent group-hover:2xl:text-transparent group-hover:lg:text-transparent  max-sm:text-3xl  w-full h-full font-semibold  text-5xl transition duration-500">
                  {movie.title}
                </span>
              </div>
            );
          })}
        </div>
        <hr className="border-white  my-12" />
        <ul className="pb-16 ">
          {songs.map((song) => {
            return (
              <li className="" key={song.title}>
                <a
                  href={song.link}
                  target="_blank"
                  className="hover:bg-zinc-600 transition duration-500  px-1"
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
        className=" font-medium fixed bottom-4 right-4 text-xl max-sm:text-3xl p-2 hover:cursor-pointer  hover:underline transition duration-300"
      >
        back
      </a>
    </div>
  );
}
