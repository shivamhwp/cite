export function TopNav(props: { pathname: string }) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-opacity-70 backdrop-blur-md shadow-sm  ">
      <div className="container  max-sm:px-4 md:px-24 lg:px-64 xl:px-96 2xl:px-96 py-5 flex items-center text-xl md:text-2xl ">
        <div className="flex gap-4 w-full justify-between items-center transition duration-300">
          <a href="/" className="hover:bg-zinc-700 font-semibold p-1">
            shivam
          </a>
          <div className="flex gap-4 font-semibold ">
            <a href="/cinema" className="p-1 ">
              .
            </a>
            <a href="/blog" className="p-1 hover:bg-zinc-700 ">
              blog
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
