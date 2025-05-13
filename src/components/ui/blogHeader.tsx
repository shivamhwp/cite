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
    <header className="mb-4 transition-colors duration-200">
      <h1 className="mb-3 text-2xl leading-tight text-white/80 md:text-3xl">
        {header}
      </h1>
      <div className="flex items-center text-white/50">
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
