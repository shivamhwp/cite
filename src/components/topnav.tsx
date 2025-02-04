export function TopNav (pathname : {pathname:string}){
return (
    <div className="flex text-xl h-auto max-sm:text-lg w-full mb-6 ">
     <div className=" flex w-full gap-4">
      <a href="/" className= {` ${pathname.pathname === "/" ? "text-red-600" : "text-white text-opacity-50"} text-2xl transition duration-300 hover:text-red-600  font-serif`}>shivam</a>
      <a
        href="/cinema"
        data-umami-event="cinema-clicked"
        data-astro-prefetch
        className={` ${pathname.pathname === "/cinema" ? "text-red-600" : "text-white text-opacity-50"} text-2xl transition duration-300 hover:text-red-600  font-serif`}
      >
        cinema
      </a>
    </div>
    </div>
)
}