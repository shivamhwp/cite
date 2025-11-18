import * as React from "react";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
	const [isDark, setIsDark] = React.useState(false);

	React.useEffect(() => {
		const darkMode = document.documentElement.classList.contains("dark");
		setIsDark(darkMode);
	}, []);

	const toggleTheme = () => {
		const newDark = !isDark;
		setIsDark(newDark);
		document.documentElement.classList[newDark ? "add" : "remove"]("dark");
	};

	return (
		<Button variant="ghost" size="icon" onClick={toggleTheme}>
			<SunIcon className="h-[1.2rem] w-[1.2rem] transition-all scale-100 rotate-0 dark:scale-0 dark:-rotate-90" />
			<MoonIcon className="absolute h-[1.2rem] w-[1.2rem] transition-all scale-0 rotate-90 dark:scale-100 dark:rotate-0" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
