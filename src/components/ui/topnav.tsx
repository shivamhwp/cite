export function TopNav(pathname: { pathname: string }) {
  return (
    <nav className="mb-6 flex w-full items-center justify-between border border-white/10 p-3 transition-colors duration-200 hover:border-white/20">
      <div className="flex items-center">
        <a href="/" className="mr-6">
          <div className="h-8 w-8 rounded-full bg-white/70 transition duration-500 hover:bg-white"></div>
        </a>
      </div>
      <div className="flex items-center gap-6">
        <a
          href="/"
          className={`${
            pathname.pathname === "/" ? "text-white" : "text-white/50"
          } text-lg transition-colors duration-200 hover:text-white/90`}
        >
          home
        </a>
        <a
          href="/more"
          data-umami-event="more-clicked"
          data-astro-prefetch
          className={`${
            pathname.pathname === "/more" ? "text-white" : "text-white/50"
          } text-lg transition-colors duration-200 hover:text-white/90`}
        >
          more
        </a>
      </div>
    </nav>
  );
}
