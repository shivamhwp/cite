export function TopNav(props: { pathname: string }) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-opacity-70 backdrop-blur-md shadow-sm ">
      <div className="container  max-sm:px-4 md:px-24 lg:px-64 xl:px-96 2xl:px-96 py-6 flex items-center text-xl md:text-2xl ">
        <div className="flex gap-4 ">
          <a href="/" className="hover:underline">
            /
          </a>
          <a href="/cinema">.</a>
        </div>
      </div>
    </div>
  );
}
