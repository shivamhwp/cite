export function TopNav({ pathname }: { pathname: string }) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-opacity-70 backdrop-blur-md shadow-sm  ">
      <div className="container  max-sm:px-4 md:px-24 lg:px-64 xl:px-96 2xl:px-96 py-4 flex items-center text-lg md:text-xl ">
        <div className="flex gap-4 w-full items-center transition  duration-300">
          <a
            href="/"
            className={`hover:underline ${
              pathname === "/" ? "underline" : ""
            } p-1`}
          >
            home
          </a>
          <a
            href="/blog"
            className={`flex gap-4 p-1 hover:underline ${
              pathname === "/blog" ? "underline" : ""
            }`}
          >
            blog
          </a>
        </div>
      </div>
    </div>
  );
}
