export function TopNav({ pathname }: { pathname: string }) {
  return (
    <div className="flex items-start justify-start gap-2 text-xl font-medium max-sm:pt-8 md:flex-col lg:flex-col lg:pl-12 xl:flex-col">
      <a
        href="/"
        className={`transition duration-500 hover:!text-white hover:text-opacity-95 ${pathname === "/" ? "!text-white" : ""} `}
      >
        home
      </a>

      <a
        href="/services"
        className={`transition duration-500 hover:!text-white hover:text-opacity-95 ${pathname === "/services" ? "!text-white" : ""}`}
      >
        services
      </a>
      <a
        href="/blogs"
        className={`transition duration-500 hover:!text-white hover:text-opacity-95 ${pathname === "/blogs" ? "!text-white" : ""}`}
      >
        blogs
      </a>
    </div>
  );
}
