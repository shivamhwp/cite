import dayjs from "dayjs";

function BlogHeader({
  header,
  date,
  updated,
}: {
  header: string;
  date: Date | undefined;
  updated?: boolean;
}) {
  return (
    <header className="mb-10 border border-white/10 p-3 transition-colors duration-200 hover:border-white/20">
      <h1 className="mb-3 font-serif text-3xl leading-tight text-white/80 md:text-4xl">
        {header}
      </h1>
      <div className="flex items-center font-serif text-white/50">
        {updated && <span className="mr-2 text-sm md:text-base">updated</span>}
        <time dateTime={date?.toISOString()} className="text-sm md:text-base">
          {date === undefined
            ? dayjs(Date.now()).format("MMMM D, YYYY").toLowerCase()
            : dayjs(date).format("MMMM D, YYYY").toLowerCase()}
        </time>
      </div>
    </header>
  );
}

export default BlogHeader;
