"use client";

import {
	GithubLogoIcon,
	TwitterLogoIcon,
	XLogoIcon,
	YoutubeLogoIcon,
} from "@phosphor-icons/react";
import { socials } from "@/data";

const iconMap = {
	"x.com/twitter": TwitterLogoIcon,
	twitter: XLogoIcon,
	github: GithubLogoIcon,
	youtube: YoutubeLogoIcon,
};

export function Socials() {
	return (
		<div className="flex items-center gap-4 flex-col  border-t-2 border-muted-foreground/20 pt-4">
			{socials.map((social) => {
				let iconKey = social.title.toLowerCase();
				if (
					iconKey.includes("twitter") ||
					iconKey.includes("x.com") ||
					iconKey.includes("x")
				) {
					iconKey = "twitter";
				} else if (iconKey.includes("github")) {
					iconKey = "github";
				} else if (iconKey.includes("youtube")) {
					iconKey = "youtube";
				}

				const Icon = iconMap[iconKey as keyof typeof iconMap] || GithubLogoIcon;

				return (
					<a
						key={social.id}
						href={social.link}
						target="_blank"
						rel="noopener noreferrer"
						className="text-xl"
						aria-label={social.title}
					>
						<Icon
							className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors"
							weight="fill"
						/>
					</a>
				);
			})}
		</div>
	);
}
