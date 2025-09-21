"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { movies, songs } from "@/data";

export default function CinemaPage() {
	return (
		<div className="max-w-2xl mx-auto">
			<Tabs defaultValue="films" className="w-full">
				<TabsList className="">
					<TabsTrigger value="films" className="text-xl px-2 py-1">
						mkv
					</TabsTrigger>
					<TabsTrigger value="songs" className="text-xl px-2 py-1">
						mp4
					</TabsTrigger>
				</TabsList>
				<TabsContent value="films">
					<div className="space-y-2">
						{movies.map((movie) => (
							<div
								key={movie.title}
								className="group transition-colors rounded-lg border px-4 py-2 min-h-0 h-12 flex items-center"
							>
								<div className="flex items-center gap-3 w-full h-full">
									<div className="font-semibold text-base truncate w-1/3">
										{movie.title}
									</div>
									{movie.description && (
										<div className="text-muted-foreground text-xs w-2/3 line-clamp-2">
											{movie.description}
										</div>
									)}
								</div>
							</div>
						))}
					</div>
				</TabsContent>
				<TabsContent value="songs">
					<div className="space-y-2">
						{songs.map((song) => (
							<div
								key={song.title}
								className="group transition-colors hover:bg-accent hover:border-primary cursor-pointer rounded-lg border px-4 py-2 min-h-0 h-12 flex items-center"
							>
								<div className="flex items-center gap-3 w-full h-full">
									<a
										href={song.link}
										target="_blank"
										rel="noopener noreferrer"
										className="font-medium text-primary truncate w-full"
									>
										{song.title}
									</a>
								</div>
							</div>
						))}
					</div>
				</TabsContent>
			</Tabs>
		</div>
	);
}
