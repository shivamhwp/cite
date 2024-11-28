export function TopNav({ pathname }: { pathname: string }) {
  return (
    <div className="flex  lg:flex-col md:flex-col xl:flex-col items-start justify-start max-sm:pt-8  gap-3 font-medium pt-40 text-xl ">
      <a
        href="/"
        className={`  border-b-2 hover:border-b-blue-600  border-b-transparent ${
          pathname === "/" ? " border-b-blue-600  border-b-2" : ""
        } `}
      >
        home
      </a>
      <a
        href="/blogs"
        className={` border-b-2  hover:border-b-blue-600  border-b-transparent${
          pathname === "/blogs" ? "border-b-2 border-b-blue-600" : ""
        }`}
      >
        blogs
      </a>
    </div>
  );
}
