export function TopNav({ path }: { path: string }) {
  const normalVariant =
    "decoration-[#f44747] transition duration-500 hover:underline hover:decoration-wavy hover:underline-offset-4";
  const activeVariant = "!underline !decoration-wavy !underline-offset-4";

  return (
    <div className="flex items-start justify-start gap-2.5 font-serif text-xl max-sm:pt-8">
      <a
        href="/"
        className={` ${normalVariant} ${path === "/" ? activeVariant : " "} `}
      >
        home
      </a>

      <a
        href="/services"
        className={`${normalVariant} ${path === "/services" ? activeVariant : " "} `}
      >
        services
      </a>
      <a
        href="/blogs"
        className={`${normalVariant} ${path === "/blogs" ? activeVariant : " "} `}
      >
        blogs
      </a>
    </div>
  );
}
