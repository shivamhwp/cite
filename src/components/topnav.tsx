export function TopNav (pathname : {pathname:string}){
return (
    <div className="flex text-xl max-sm:text-lg w-full pb-4">
     <div className="flex w-auto items-start gap-4">
      <a href="/" className= {` ${pathname.pathname === "/" ? "text-red-600" : "text-white text-opacity-50"} text-2xl transition duration-300 hover:text-red-600 font-bold font-serif`}>shivam</a>
      <a href="/blogs" className={`  ${pathname.pathname === "/blogs" ? "text-red-600" : "text-white text-opacity-50"} text-2xl transition duration-300 hover:text-red-600 font-bold font-serif`}>blogs</a>
    </div>
    </div>
)
}