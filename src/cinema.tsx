"use client";

import { MusicNoteIcon } from "@phosphor-icons/react";
import { movies, songs } from "@/data";

export default function CinemaPage() {
	return (
		<div className="w-full">
			<div className="w-full">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
					<div className="space-y-4">
						<div className="flex items-center gap-3 mb-6">
							<h2 className="font-semibold text-foreground text-2xl">films</h2>
						</div>
						<div className="space-y-3">
							{movies.map((movie) => (
								<div key={movie.title} className="group">
									<h3 className="text-foreground group-hover:text-foreground transition-colors text-lg mb-1">
										{movie.title}
									</h3>
									{movie.description && (
										<p className="text-muted-foreground text-sm leading-relaxed">
											{movie.description}
										</p>
									)}
								</div>
							))}
						</div>
					</div>

					<div className="space-y-4">
						<div className="flex items-center gap-3 mb-6">
							<h2 className="font-semibold text-foreground text-2xl">music</h2>
						</div>
						<div className="space-y-2">
							{songs.map((song) => (
								<a
									key={song.title}
									href={song.link}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 text-foreground hover:text-foreground transition-colors group no-underline"
								>
									<MusicNoteIcon className="h-3 w-3 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
									<span>{song.title}</span>
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
