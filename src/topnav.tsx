export function TopNav({ pathname }: { pathname: string }) {
  return (
    <div className="flex  lg:flex-col md:flex-col xl:flex-col items-start justify-start max-sm:pt-8  gap-3 font-medium pt-40 text-xl ">
      <a
        href="/"
        className={`hover:text-blue-600 transition duration-500${
          pathname === "/" ? " text-blue-600" : ""
        } `}
      >
        home
      </a>
      <a
        href="/blogs"
        className={` hover:text-blue-600 transition duration-500 ${
          pathname === "/blogs" ? "text-blue-600" : ""
        }`}
      >
        blogs
      </a>
    </div>
  );
}
