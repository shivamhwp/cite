import dayjs from "dayjs";

function BlogHeader({
  header,
  date,
  updated,
}: {
  header: string;
  date: Date;
  updated?: boolean;
}) {
  return (
    <div className="flex w-full items-start gap-2 flex-col  justify-between">
      <div className="text-xl font-bold">{header}</div>
      <div className="pb-6 flex gap-1">
        <div> {updated === true ? "Updated" : ""}</div>
        <div> {dayjs(date).format("MMMM DD, YYYY")}</div>
      </div>
    </div>
  );
}

export default BlogHeader;