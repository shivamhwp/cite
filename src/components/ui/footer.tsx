import { socials } from "../../data";

function Footer() {
  return (
    <footer className="mt-10 border border-white/10 p-3 pt-4 transition-colors duration-200 hover:border-white/20">
      <div className="flex justify-center gap-8">
        {socials?.map((x) => (
          <a
            key={x.title}
            href={x?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif text-lg text-white/30 transition-colors duration-200 hover:text-white/70"
          >
            {x.title}
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
