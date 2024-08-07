import React from "react";

export default function Topnav(props: { path: string }): React.ReactElement {
  return (
    //home projects socials and more
    <div className="h-auto w-full flex items-center  text-xl pt-12 max-sm:pt-4 pb-4 ">
      <div className="flex gap-4 p-4 ">
        <a
          className={` ${
            props.path == "/" ? "bg-white text-black" : "bg-transparent"
          }   hover:bg-white p-1 hover:text-black`}
          href="/"
        >
          home
        </a>
        <a
          className={` ${
            props.path == "/work" ? "bg-white text-black" : "bg-transparent"
          }   hover:bg-white p-1 hover:text-black`}
          href="/work"
        >
          work
        </a>
        <a
          className={` ${
            props.path == "/cinema" ? "bg-red-600 text-white" : "bg-transparent"
          }    hover:bg-red-600 p-1 hover:text-white`}
          href="/cinema"
        >
          cinema
        </a>
      </div>
    </div>
  );
}
