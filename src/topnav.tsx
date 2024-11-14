export function TopNav({ pathname }: { pathname: string }) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-opacity-70 backdrop-blur-md shadow-sm font-medium ">
      <div className="max-sm:px-4 md:px-24 lg:px-64 xl:px-96 2xl:px-96 py-4 flex items-center text-xl md:text-xl ">
        <div className="flex gap-4 w-full items-center ">
          <a
            href="/"
            className={`hover:border-blue-600  border-b-2 border-transparent  ${
              pathname === "/" ? " border-blue-600 border-b-2" : ""
            } `}
          >
            home
          </a>
          <a
            href="/blog"
            className={`hover:border-blue-600 border-b-2 border-transparent ${
              pathname === "/blog" ? "border-blue-600 border-b-2" : ""
            }`}
          >
            blog
          </a>
        </div>
      </div>
    </div>
  );
}
