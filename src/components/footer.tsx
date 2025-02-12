import { socials } from "../data";

function Footer() {
  return (
    <div className="flex h-28 w-full items-center justify-center bg-black max-sm:px-0">
      <div className="flex w-full items-center justify-around gap-4 border-t border-dashed border-white/30 px-24 py-4 max-sm:gap-2 max-sm:px-0 md:text-lg lg:text-xl xl:text-xl">
        {socials?.map((x) => (
          <a
            href={x?.link}
            target="_blank"
            className={`flex font-serif text-xl underline-offset-2 transition duration-500 hover:cursor-pointer hover:text-white max-sm:text-lg`}
          >
            {x.title}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Footer;
