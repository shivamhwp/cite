import dayjs from "dayjs";

function BlogHeader({ header, date }: { header: string; date: Date }) {
  return (
    <div className="flex w-full items-start gap-2 flex-col  justify-between">
      <div className="text-xl font-bold">{header}</div>
      <div className="pb-6"> {dayjs(date).format("MMMM DD, YYYY")}</div>
    </div>
  );
}

export default BlogHeader;
