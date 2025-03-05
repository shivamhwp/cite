export function TopNav(pathname: { pathname: string }) {
  return (
    <div className="mb-6 flex h-auto text-lg max-sm:text-lg">
      <div className="flex w-full gap-4">
        <a
          href="/"
          className={` ${pathname.pathname === "/" ? "text-white/80" : "text-white/50"} text-lg transition duration-300 hover:text-white/80`}
        >
          home
        </a>
        <a
          href="/more"
          data-umami-event="more-clicked"
          data-astro-prefetch
          className={`${pathname.pathname === "/more" ? "text-white/80" : "text-white/50"} text-lg transition duration-300 hover:text-white/80`}
        >
          more
        </a>
      </div>
    </div>
  );
}
