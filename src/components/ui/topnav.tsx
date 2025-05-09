import { socials } from "../../data";

export function TopNav(pathname: { pathname: string }) {
  return (
    <nav className="mb-6 flex w-full items-center justify-between py-4 pt-4 text-black/80 transition duration-500">
      <div className="flex items-center gap-6">
        <a
          href="/"
          className={`text-lg text-black/50 transition duration-500 hover:text-black/90 hover:underline hover:underline-offset-4 ${
            pathname.pathname === "/"
              ? "text-black/90 underline underline-offset-4"
              : ""
          }`}
        >
          home
        </a>
        <a
          href="/more"
          data-umami-event="more-clicked"
          data-astro-prefetch
          className={`text-lg text-black/50 transition duration-500 hover:text-black/90 hover:underline hover:underline-offset-4 ${
            pathname.pathname === "/more"
              ? "text-black/90 underline underline-offset-4"
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
            className="transition duration-500 hover:text-black/90 hover:underline hover:underline-offset-8"
            aria-label={`${social.title} link`}
          >
            {social.title}
          </a>
        ))}
      </div>
    </nav>
  );
}
