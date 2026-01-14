"use client";

import { EyeIcon } from "@phosphor-icons/react";

interface PostItemProps {
	href: string;
	title: string;
	date: string;
}

export function PostItem({ href, title, date }: PostItemProps) {
	return (
		<a
			href={href}
			className="block group no-underline hover:opacity-70 transition-all"
		>
			<div className="flex items-center gap-2 sm:gap-3">
				<EyeIcon className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-all opacity-0 group-hover:opacity-100 shrink-0" />
				<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 flex-1">
					<div className="text-foreground group-hover:text-foreground transition-colors text-xl flex-1">
						{title}
					</div>
					<time className="text-muted-foreground text-xs sm:text-sm font-mono whitespace-nowrap">
						{date}
					</time>
				</div>
			</div>
		</a>
	);
}
