"use client";

import { ArrowRightIcon } from "@phosphor-icons/react";
import { Content, List, Root, Trigger } from "@radix-ui/react-tabs";
import { movies, songs } from "@/data";

export default function CinemaPage() {
	return (
		<div className="mx-auto max-w-2xl">
			<Root className="w-full" defaultValue="films">
				<List className="flex gap-1 border-border">
					<Trigger
						className="cursor-pointer px-2 py-1 text-muted-foreground text-xl transition-colors hover:text-foreground data-[state=active]:border-primary data-[state=active]:border-b-2 data-[state=active]:text-foreground"
						value="films"
					>
						mkv
					</Trigger>
					<Trigger
						className="cursor-pointer px-2 py-1 text-muted-foreground text-xl transition-colors hover:text-foreground data-[state=active]:border-primary data-[state=active]:border-b-2 data-[state=active]:text-foreground"
						value="songs"
					>
						mp4
					</Trigger>
				</List>
				<Content value="films">
					<div className="space-y-2 pt-4">
						{movies.map((movie) => (
							<div
								className="group flex h-12 min-h-0 items-center rounded-lg transition-colors"
								key={movie.title}
							>
								<div className="flex h-full w-full items-center gap-3">
									<div
										className="w-1/3 truncate font-serif text-foreground/90 text-xl font-semibold"
										title={movie.title}
									>
										{movie.title}
									</div>
									{movie.description && (
										<div
											className="line-clamp-2 w-2/3 text-muted-foreground/70"
											title={movie.description}
										>
											{movie.description}
										</div>
									)}
								</div>
							</div>
						))}
					</div>
				</Content>
				<Content value="songs">
					<div className="space-y-2 pt-4">
						{songs.map((song) => (
							<div
								className="group flex h-12 min-h-0 cursor-pointer items-center rounded-lg transition-colors group-hover:bg-accent/50 hover:text-foreground"
								key={song.title}
							>
								<div className="flex h-full w-full items-center gap-3">
									<a
										aria-label={song.title}
										className="w-full truncate font-serif text-muted-foreground text-xl transition duration-300 group-hover:text-foreground"
										href={song.link}
										rel="noopener noreferrer"
										target="_blank"
										title={song.title}
									>
										{song.title}
									</a>
								</div>
								<ArrowRightIcon className="size-4 group-hover:block hidden group-hover:transition duration-500" />
							</div>
						))}
					</div>
				</Content>
			</Root>
		</div>
	);
}
