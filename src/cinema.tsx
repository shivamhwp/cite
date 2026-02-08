"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { movies, songs } from "@/data";

export default function CinemaPage() {
	return (
		<div className="flex w-full flex-col h-full min-h-0 font-normal">
			<Tabs defaultValue="films">
				<TabsList className="sticky top-0 z-10 bg-secondary/30 pb-4">
					<TabsTrigger
						value="films"
						className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
					>
						mkv
					</TabsTrigger>
					<TabsTrigger
						value="music"
						className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
					>
						wav
					</TabsTrigger>
				</TabsList>

				<TabsContent value="films" className="mt-0">
					<div className="flex flex-col">
						{movies.map((movie) => (
							<div
								key={movie.title}
								className="group flex flex-col py-2 border-b border-muted-foreground/8 last:border-0"
							>
								<span className="text-primary/70 text-xs font-medium">
									{movie.title}
								</span>
								{movie.description && (
									<span className="text-muted-foreground text-xs font-normal max-h-0 overflow-hidden opacity-0 transition-all duration-200 ease-out group-hover:max-h-8 group-hover:opacity-100 group-hover:mt-0.5">
										{movie.description}
									</span>
								)}
							</div>
						))}
					</div>
				</TabsContent>

				<TabsContent value="music" className="mt-0">
					<div className="flex flex-col">
						{songs.map((song) => (
							<a
								key={song.title}
								href={song.link}
								target="_blank"
								rel="noopener noreferrer"
								className="py-2 border-b border-muted-foreground/8 last:border-0 text-xs font-normal text-muted-foreground hover:text-primary/70 transition-colors"
							>
								{song.title}
							</a>
						))}
					</div>
				</TabsContent>
			</Tabs>
		</div>
	);
}
