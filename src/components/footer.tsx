import { socials } from "../data";

function Footer() {
  return (
    <div className="sticky bottom-0 left-0 z-0 flex h-72 w-full items-center justify-center bg-black max-sm:px-3">
      <div className="relative flex h-full w-full items-end justify-end overflow-hidden pb-4 text-right">
        <div className="flex flex-row space-x-12 text-sm sm:space-x-16 sm:text-lg md:space-x-24 md:text-xl">
          <ul>
            <div className="flex gap-4 max-md:flex-col max-sm:gap-2 md:text-lg lg:text-xl xl:text-xl">
              {/* socials */}
              {socials?.map((x) => (
                <a
                  href={x?.link}
                  key={x.id}
                  target="_blank"
                  className={`flex font-serif text-2xl text-[#ff5941] text-opacity-85 transition duration-500 hover:italic hover:text-opacity-100`}
                >
                  {x.title}
                </a>
              ))}
            </div>
          </ul>
        </div>
      </div>
      <a
        href="/cinema"
        data-umami-event="cinema-clicked"
        data-astro-prefetch
        className="absolute bottom-0 left-0 font-serif text-[40px] transition duration-500 hover:text-[#ff5941] max-sm:translate-y-5 sm:text-[72px] md:translate-y-11 lg:translate-y-11 xl:translate-y-10"
      >
        cinema
      </a>
    </div>
  );
}

export default Footer;
