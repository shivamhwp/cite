import { socials } from "../data";

function Footer() {
  return (
    <div className="flex w-full h-28 items-center justify-center bg-black max-sm:px-0 ">
      <div
        className="gap-4 w-full px-24 max-sm:px-0  py-4 border-dashed border-white/30 border-t flex items-center justify-around max-sm:gap-2 md:text-lg lg:text-xl xl:text-xl"
      >
        {
          socials?.map((x) => (
            <a
              href={x?.link}
              target="_blank"
              className={`flex text-2xl max-sm:text-xl hover:text-white underline-offset-2 font-serif transition duration-500 hover:cursor-pointer  `}
            >
              {x.title}
            </a>
          ))
        }
      </div>
    </div>
  );
}

export default Footer;
