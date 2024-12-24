export function TopNav({ pathname }: { pathname: string }) {
  return (
    <div className="flex items-start justify-start gap-2 font-serif text-xl max-sm:pt-8">
      <a
        href="/"
        className={`decoration-wavy underline-offset-4 transition duration-500 hover:underline ${pathname === "/" ? "underline decoration-[#f44747]" : ""} `}
      >
        home
      </a>

      <a
        href="/services"
        className={`decoration-wavy underline-offset-4 transition duration-500 hover:underline ${pathname === "/services" ? "underline decoration-[#f44747]" : ""}`}
      >
        services
      </a>
      <a
        href="/blogs"
        className={`decoration-wavy underline-offset-4 transition duration-500 hover:underline ${pathname === "/blogs" ? "underline decoration-[#f44747]" : ""}`}
      >
        blogs
      </a>
    </div>
  );
}
