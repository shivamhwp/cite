"use client";

import { socials } from "@/data";

export function Socials() {
	return (
		<>
			{/* Mobile: horizontal */}
			<div className="flex md:hidden flex-row items-center gap-3">
				{socials.map((social) => {
					return (
						<a
							key={social.id}
							href={social.link}
							target="_blank"
							rel="noopener noreferrer"
							className="text-xs text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
							aria-label={social.title}
						>
							{social.title}
						</a>
					);
				})}
			</div>

			{/* Desktop: vertical */}
			<div className="hidden md:flex flex-col gap-1 lg:gap-2">
				{socials.map((social) => {
					return (
						<a
							key={social.id}
							href={social.link}
							target="_blank"
							rel="noopener noreferrer"
							className="text-xs text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
							aria-label={social.title}
						>
							{social.title}
						</a>
					);
				})}
			</div>
		</>
	);
}
