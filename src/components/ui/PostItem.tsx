"use client";

interface PostItemProps {
	href: string;
	title: string;
	date: string;
}

export function PostItem({ href, title, date }: PostItemProps) {
	return (
		<a
			href={href}
			className="block group no-underline hover:opacity-80 transition-opacity"
		>
			<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
				<span className="text-foreground text-sm font-normal">
					{title}
				</span>
				<time className="text-muted-foreground text-xs whitespace-nowrap">
					{date}
				</time>
			</div>
		</a>
	);
}
