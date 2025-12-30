"use client";

import {
	ArrowRightIcon,
	EmptyIcon,
	PlaceholderIcon,
} from "@phosphor-icons/react";
import { useEffect, useMemo, useState } from "react";
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";

export type UrlItem = {
	title: string;
	url: string;
	category: string;
};

type CommandPaletteProps = {
	urls: UrlItem[];
};

export function CommandPalette({ urls }: CommandPaletteProps) {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen((prevOpen) => !prevOpen);
			}
		};

		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, []);

	const handleSelect = (url: string) => {
		if (url.startsWith("http")) {
			window.open(url, "_blank", "noopener,noreferrer");
		} else {
			window.location.href = url;
		}
		setOpen(false);
	};

	// Group URLs by category
	const groupedUrls = useMemo(() => {
		const groups: Record<string, UrlItem[]> = {};
		for (const item of urls) {
			if (!groups[item.category]) {
				groups[item.category] = [];
			}
			groups[item.category].push(item);
		}
		return groups;
	}, [urls]);

	return (
		<CommandDialog onOpenChange={setOpen} open={open} className="bg-background">
			<CommandInput placeholder="search..." />
			<CommandList>
				<CommandEmpty className="flex flex-col items-center justify-center gap-2 py-10 text-foreground/70">
					<PlaceholderIcon className="size-10" weight="fill" />
					<div>no results found</div>
				</CommandEmpty>
				{Object.entries(groupedUrls).map(([category, items]) => (
					<CommandGroup heading={category} key={category} className="py-2">
						{items.map((item) => (
							<CommandItem
								className="lowercase flex items-center justify-between rounded-md"
								key={`${item.category}-${item.url}`}
								onSelect={() => handleSelect(item.url)}
							>
								<span className="text-foreground">{item.title}</span>
							</CommandItem>
						))}
					</CommandGroup>
				))}
			</CommandList>
		</CommandDialog>
	);
}
