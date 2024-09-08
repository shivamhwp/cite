export function TopNav(props: { pathname: string }) {
  return (
    <div className="flex gap-4 text-xl ">
      <a
        href="/"
        className={`hover:underline ${
          props.pathname === "/" ? "underline" : ""
        }`}
      >
        home
      </a>
      <a
        href="/cinema"
        className={` hover:underline  hover:pointer${
          props.pathname === "cinema" ? "underline" : ""
        }`}
      >
        🔥
      </a>
    </div>
  );
}
