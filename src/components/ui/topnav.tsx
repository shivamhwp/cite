import { socials } from "../../data";

export function TopNav(pathname: { pathname: string }) {
  return (
    <nav className="mb-6 flex w-full items-center justify-between py-4 pt-4 text-white/80 transition duration-500">
      <div className="flex items-center gap-3">
        <a
          href="/"
          className={`text-lg text-white/50 transition duration-500 hover:text-white/90 hover:underline hover:underline-offset-4 ${
            pathname.pathname === "/"
              ? "text-white/90 underline underline-offset-4"
              : ""
          }`}
        >
          home
        </a>
        <a
          href="/labs"
          className={`text-lg text-white/50 transition duration-500 hover:text-white/90 hover:underline hover:underline-offset-4 ${
            pathname.pathname === "/labs"
              ? "text-white/90 underline underline-offset-4"
              : ""
          }`}
        >
          labs
        </a>
        <a
          href="/more"
          data-astro-prefetch
          className={`text-lg text-white/50 transition duration-500 hover:text-white/90 hover:underline hover:underline-offset-4 ${
            pathname.pathname === "/more"
              ? "text-white/90 underline underline-offset-4"
              : ""
          }`}
        >
          more
        </a>
      </div>

      {/* socials */}
      <div className="flex gap-4 text-lg">
        {socials.map((social) => (
          <a
            key={social.id}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-500 hover:text-white/90 hover:underline hover:underline-offset-8"
            aria-label={`${social.title} link`}
          >
            {social.title}
          </a>
        ))}
      </div>
    </nav>
  );
}
