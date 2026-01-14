"use client";

import { movies, songs } from "@/data";
import { useState } from "react";

export default function CinemaPage() {
	const [activeTab, setActiveTab] = useState<"films" | "music">("films");

	return (
		<div className="w-full space-y-6">
			{/* Tabs */}
			<div className="flex gap-6 border-b border-muted-foreground/10 pb-2">
				<button
					onClick={() => setActiveTab("films")}
					className={`text-xs transition-colors ${
						activeTab === "films"
							? "text-foreground"
							: "text-muted-foreground hover:text-foreground"
					}`}
					type="button"
				>
					films
				</button>
				<button
					onClick={() => setActiveTab("music")}
					className={`text-xs transition-colors ${
						activeTab === "music"
							? "text-foreground"
							: "text-muted-foreground hover:text-foreground"
					}`}
					type="button"
				>
					music
				</button>
			</div>

			{/* Films */}
			{activeTab === "films" && (
				<div className="columns-1 sm:columns-2 gap-6 space-y-4">
					{movies.map((movie, index) => (
						<div
							key={movie.title}
							className="break-inside-avoid mb-4 space-y-1"
							style={{
								animationDelay: `${index * 50}ms`,
							}}
						>
							<h3 className="text-foreground text-sm font-normal mb-1">
								{movie.title}
							</h3>
							{movie.description && (
								<p className="text-muted-foreground text-xs leading-relaxed">
									{movie.description}
								</p>
							)}
						</div>
					))}
				</div>
			)}

			{/* Music */}
			{activeTab === "music" && (
				<div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-4">
					{songs.map((song, index) => (
						<a
							key={song.title}
							href={song.link}
							target="_blank"
							rel="noopener noreferrer"
							className="block break-inside-avoid mb-3 text-muted-foreground text-xs hover:text-foreground transition-colors underline underline-offset-2 decoration-1"
							style={{
								animationDelay: `${index * 30}ms`,
							}}
						>
							{song.title}
						</a>
					))}
				</div>
			)}
		</div>
	);
}
