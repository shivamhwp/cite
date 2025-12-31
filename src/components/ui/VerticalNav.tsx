"use client";

import { ArticleIcon, FilmStripIcon, HouseIcon } from "@phosphor-icons/react";
import { ModeToggle } from "./ModeToggle";
import { Socials } from "./socials";

interface VerticalNavProps {
	pathname: string;
}

export function VerticalNav({ pathname }: VerticalNavProps) {
	const isActive = (path: string) => {
		if (path === "/") {
			return pathname === "/";
		}
		return pathname.startsWith(path);
	};

	const navItems = [
		{ path: "/", label: "home", icon: HouseIcon },
		{ path: "/cinema", label: "cinema", icon: FilmStripIcon },
		{ path: "/writings", label: "writings", icon: ArticleIcon },
	];

	return (
		<nav className="flex flex-col gap-4">
			{navItems.map((item) => {
				const Icon = item.icon;
				const active = isActive(item.path);

				return (
					<a
						key={item.path}
						href={item.path}
						className={`flex flex-col items-center gap-2 transition-colors ${
							active
								? "text-foreground"
								: "text-muted-foreground hover:text-foreground"
						}`}
						aria-label={item.label}
					>
						<Icon className="h-6 w-6" weight={active ? "fill" : "duotone"} />
					</a>
				);
			})}
			<Socials />
		</nav>
	);
}
