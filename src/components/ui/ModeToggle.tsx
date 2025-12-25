import { MoonIcon, SunDimIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
	const [isDark, setIsDark] = useState(() => {
		if (typeof window !== "undefined") {
			const stored = localStorage.getItem("theme");
			if (stored) {
				return stored === "dark";
			}
			return window.matchMedia("(prefers-color-scheme: dark)").matches;
		}
		return false;
	});

	useEffect(() => {
		document.documentElement.classList[isDark ? "add" : "remove"]("dark");
		localStorage.setItem("theme", isDark ? "dark" : "light");
	}, [isDark]);

	const toggleTheme = () => {
		setIsDark(!isDark);
	};

	return (
		<Button onClick={toggleTheme} size="icon" variant="ghost">
			<SunDimIcon className="dark:-rotate-90 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:scale-0" />
			<MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
