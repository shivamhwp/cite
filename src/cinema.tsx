const movies = [
  {
    title: "Attack On Titan",
  },
  {
    title: "Fullmetal Alchemist:Brotherhood",
  },
  {
    title: "Jujutsu Kaisen",
  },
  {
    title: "Demon Slayer",
  },
  {
    title: "Se7en",
  },
  {
    title: "Fight Club",
  },
  {
    title: "Hunter x Hunter(2011)",
  },
  {
    title: "Oppenheimer",
  },
  {
    title: "Mr Robot",
  },
  {
    title: "The Prestige",
  },

  {
    title: "Whiplash",
  },
];

const songs = [
  {
    title: "Requiem for the Brigadier General",
    link: "https://www.youtube.com/watch?v=G6kSqPpSz1g",
  },
  {
    title: "3.0_1-one2blame.fyc",
    link: "https://www.youtube.com/watch?v=0pux7a1y8xo",
  },
  {
    title: "An Ordinary Day",
    link: "https://www.youtube.com/watch?v=dygUU9itPXw",
  },
  {
    title: "YouSeeBIGGIRL/T:T",
    link: "https://youtu.be/vy63u2hKoPE",
  },
  {
    title: "Idea 10",
    link: "https://www.youtube.com/watch?v=5OIeIaAhQOg",
  },
  {
    title: "1.4_1-squ4rewiththeuniverse.wma",
    link: "https://www.youtube.com/watch?v=n3x0GylBOM0",
  },
];

export default function CinemaComponent() {
  return (
    <div
      className={`bg-black selection:text-black  max-sm:pl-4 lg:pl-56 xl:pl-56 pt-8 h-screen w-screen text-white  `}
    >
      <div className="flex justify-between h-full w-full  bg-no-repeat ">
        <div className="gap-8 text-xl">
          <div className="flex flex-col">
            {movies.map((movie) => {
              return (
                <div
                  key={movie.title}
                  className={`font-semibold text-8xl text-white hover:text-opacity-70  max-sm:text-4xl `}
                >
                  {movie.title}
                </div>
              );
            })}
          </div>
          <hr className="border-white my-12" />
          <ul className=" pb-16 ">
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
          className=" font-medium fixed bottom-5 right-5 text-5xl max-sm:text-3xl p-2 rounded-full  hover:underline transition duration-300"
        >
          back
        </a>
      </div>
    </div>
  );
}
