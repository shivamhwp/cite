export function TopNav(pathname: { pathname: string }) {
  return (
    <nav className="mb-6 flex w-full items-center justify-between p-3 transition-colors duration-200">
      <div className="flex items-center">
        <a href="/" className="mr-6">
          <div className="h-8 w-8 rounded-full bg-black/70 transition duration-500 hover:bg-black"></div>
        </a>
      </div>
      <div className="flex items-center gap-6">
        <a
          href="/"
          className={`${
            pathname.pathname === "/" ? "text-black" : "text-black/50"
          } text-lg transition-colors duration-200 hover:text-black/90`}
        >
          home
        </a>
        <a
          href="/more"
          data-umami-event="more-clicked"
          data-astro-prefetch
          className={`${
            pathname.pathname === "/more" ? "text-black" : "text-black/50"
          } text-lg transition-colors duration-200 hover:text-black/90`}
        >
          more
        </a>
      </div>
    </nav>
  );
}
