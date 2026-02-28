"use client";

import {
	GithubLogoIcon,
	HouseIcon,
	PenNibIcon,
	YoutubeLogoIcon,
} from "@phosphor-icons/react";
import { FilmStripIcon, XLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { useEffect } from "react";
import { socials } from "@/data";

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

	const primaryItems = [
		{ path: "/", label: "home", Icon: HouseIcon },
		{ path: "/cinema", label: "cinema", Icon: FilmStripIcon },
		{ path: "/writings", label: "writing", Icon: PenNibIcon },
	];

	const socialIcons = {
		"x/twitter": XLogoIcon,
		github: GithubLogoIcon,
		youtube: YoutubeLogoIcon,
	} as const;

	useEffect(() => {
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.metaKey || event.ctrlKey || event.altKey) {
				return;
			}
			const target = event.target as HTMLElement | null;
			const isTypingTarget =
				target instanceof HTMLInputElement ||
				target instanceof HTMLTextAreaElement ||
				target?.isContentEditable;
			if (isTypingTarget) {
				return;
			}

			const key = event.key.toLowerCase();
			const destination =
				key === "h"
					? "/"
					: key === "c"
						? "/cinema"
						: key === "w"
							? "/writings"
							: key === "s"
								? "/work"
								: null;

			if (!destination) {
				return;
			}
			if (window.location.pathname === destination) {
				return;
			}

			event.preventDefault();
			window.location.assign(destination);
		};

		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, []);

	return (
		<nav className="flex w-full items-center justify-between gap-4 pt-4">
			<div className="flex items-center gap-3 sm:gap-5">
				{primaryItems.map((item) => {
					const active = isActive(item.path);
					return (
						<a
							key={item.path}
							href={item.path}
							className={`transition-colors ${
								active
									? "text-foreground"
									: "text-muted-foreground hover:text-foreground"
							}`}
							aria-label={item.label}
							title={item.label}
						>
							<item.Icon
								weight={active ? "fill" : "regular"}
								className="size-6"
							/>
							<span className="sr-only">{item.label}</span>
						</a>
					);
				})}
				<a
					href="/work"
					className={`text-sm transition-colors px-1 ${
						isActive("/work")
							? "text-background bg-foreground "
							: "text-muted-foreground hover:text-foreground font-normal"
					}`}
				>
					work?
				</a>
			</div>
			<div className="flex items-center gap-2 sm:gap-3">
				{socials.map((social) => {
					const Icon = socialIcons[social.title as keyof typeof socialIcons];
					if (!Icon) {
						return null;
					}
					return (
						<a
							key={social.id}
							href={social.link}
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-foreground transition-colors"
							aria-label={social.title}
							title={social.title}
						>
							<Icon weight="thin" className="size-6" aria-hidden />
							<span className="sr-only">{social.title}</span>
						</a>
					);
				})}
			</div>
		</nav>
	);
}
