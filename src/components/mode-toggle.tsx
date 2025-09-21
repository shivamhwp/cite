import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import * as React from "react";

export function ModeToggle() {
	const [theme, setTheme] = React.useState<"light" | "dark">(() => {
		if (typeof window === "undefined") return "light";
		try {
			const saved = localStorage.getItem("theme") as "light" | "dark" | null;
			if (saved) return saved;
			return document.documentElement.classList.contains("dark")
				? "dark"
				: "light";
		} catch {
			return "light";
		}
	});

	React.useEffect(() => {
		// Read theme from localStorage on mount
		const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
		const initialTheme =
			savedTheme ||
			(document.documentElement.classList.contains("dark") ? "dark" : "light");
		setTheme(initialTheme);
	}, []);

	React.useEffect(() => {
		const isDark = theme === "dark";
		document.documentElement.classList.toggle("dark", isDark);
		try {
			localStorage.setItem("theme", theme);
		} catch {}
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
	};

	return (
		<Button
			variant="ghost"
			size="icon"
			onClick={toggleTheme}
			className="cursor-pointer"
		>
			<Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
			<Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
