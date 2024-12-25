export function TopNav({ path }: { path: string }) {
  const activeVariant = "underline decoration-wavy underline-offset-4";

  return (
    <div className="flex items-start justify-start gap-2.5 font-serif text-xl max-sm:pt-8">
      <a
        href="/"
        className={`decoration-[#f44747] transition duration-500 hover:underline hover:decoration-wavy hover:underline-offset-4 ${path === "/" ? activeVariant : " "} `}
      >
        home
      </a>

      <a
        href="/services"
        className={`decoration-[#f44747] transition duration-500 hover:underline hover:decoration-wavy hover:underline-offset-4 ${path === "/services" ? activeVariant : " "} `}
      >
        services
      </a>
      <a
        href="/blogs"
        className={`decoration-[#f44747] decoration-wavy transition duration-500 hover:underline hover:underline-offset-4 ${path === "/blogs" ? activeVariant : " "} `}
      >
        blogs
      </a>
    </div>
  );
}
