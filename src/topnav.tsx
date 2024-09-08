const pathname = window.location.pathname;

export function TopNav() {
  return (
    <div className="flex gap-4 text-xl ">
      <a
        href="/"
        className={`hover:underline ${pathname === "/" ? "underline" : ""}`}
      >
        home
      </a>
      <a
        href="/cinema"
        className={` hover:underline  hover:pointer${
          pathname === "cinema" ? "underline" : ""
        }`}
      >
        🔥
      </a>
    </div>
  );
}
