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
    <div className="flex w-full flex-col items-start justify-between gap-2">
      <div className="font-serif text-2xl font-semibold text-[#FF5941] text-opacity-95 max-sm:text-xl">
        {header}
      </div>
      <div className="flex gap-1 pb-6">
        <div> {updated === true ? "updated" : ""}</div>
        <div>
          {date === undefined
            ? dayjs(Date.now()).format("MMMM DD, YYYY").toLowerCase()
            : dayjs(date).format("MMMM DD, YYYY").toLowerCase()}
        </div>
      </div>
    </div>
  );
}

export default BlogHeader;
