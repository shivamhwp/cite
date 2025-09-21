import { Badge } from "@/components/ui/badge";
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
				<h1 className="text-foreground/80 mb-3 text-xl leading-tight md:text-2xl">
					{header}
				</h1>
				<div className="flex items-center space-x-2">
					{updated && (
						<Badge variant="outline" className="text-xs px-2 py-0.5">
							updated
						</Badge>
					)}
					<Badge variant="secondary" className="text-xs px-2 py-0.5">
						<time dateTime={date?.toISOString()}>
							{date === undefined
								? dayjs(Date.now()).format("MMMM D, YYYY").toLowerCase()
								: dayjs(date).format("MMMM D, YYYY").toLowerCase()}
						</time>
					</Badge>
				</div>
			</header>
		);
}

export default BlogHeader;
