import dayjs from "dayjs";
import { Badge } from "@/components/ui/badge";

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
			<div className="mb-3 font-serif text-foreground text-2xl md:text-3xl">
				{header}
			</div>
			<div className="flex items-center space-x-2">
				{updated && (
					<Badge className="px-2 py-0.5 text-xs" variant="secondary">
						updated
					</Badge>
				)}
				<Badge className="px-2 py-0.5 text-xs" variant="outline">
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
