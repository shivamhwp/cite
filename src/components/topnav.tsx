export function TopNav(pathname: { pathname: string }) {
  return (
    <div className="mb-6 flex h-auto w-full text-xl max-sm:text-lg">
      <div className="flex w-full gap-4">
        <a
          href="/"
          className={` ${pathname.pathname === "/" ? "text-white/80" : "text-white/50"} text-xl transition duration-300 hover:text-white/80`}
        >
          shivam
        </a>
        <a
          href="/cinema"
          data-umami-event="cinema-clicked"
          data-astro-prefetch
          className={`${pathname.pathname === "/cinema" ? "text-white/80" : "text-white/50"} text-xl transition duration-300 hover:text-white/80`}
        >
          cinema
        </a>
      </div>
    </div>
  );
}
