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
      <div className="text-xl font-semibold text-white text-opacity-95">
        {header}
      </div>
      <div className="flex gap-1 pb-6">
        <div> {updated === true ? "Updated" : ""}</div>
        <div>
          {date === undefined
            ? dayjs(Date.now()).format("MMMM DD, YYYY")
            : dayjs(date).format("MMMM DD, YYYY")}
        </div>
      </div>
    </div>
  );
}

export default BlogHeader;
