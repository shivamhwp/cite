export default function Topnav(props: { path: string }): React.ReactElement {
  return (
    //home projects socials and more
    <div className="h-auto w-full flex items-center  text-xl pt-12 max-sm:pt-4 pb-4 ">
      <div className="flex gap-4 p-4 ">
        <a
          className={` ${props.path == "/" ? "underline" : "hover:underline"}`}
          href="/"
        >
          home
        </a>
        <a
          className={` ${
            props.path == "/work" ? "underline" : "hover:underline"
          } `}
          href="/work"
        >
          work
        </a>
        <a
          className={` ${
            props.path == "/cinema"
              ? "underline decoration-red-600"
              : "hover:underline decoration-red-600"
          }   `}
          href="/cinema"
        >
          cinema
        </a>
      </div>
    </div>
  );
}
