import { socials } from "../../data";

function Footer() {
  return (
    <footer className="mt-10 p-3 pt-4 transition-colors duration-200">
      <div className="flex justify-center gap-8">
        {socials?.map((x) => (
          <a
            key={x.title}
            href={x?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black/70 transition-colors duration-200 hover:text-black/30"
          >
            {x.title}
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
