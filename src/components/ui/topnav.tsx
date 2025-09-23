
interface TopNavProps {
	pathname: string;
}

export function TopNav({ pathname }: TopNavProps) {
	const logoUrl =
		"https://61izvpe5ob.ufs.sh/f/ghNXXt9jhBA7gz3sS49jhBA7aDxcElbpQXquP9kMnvOLZ6Ci";

	const isActive = (path: string) => pathname.startsWith(path);

	return (
		<nav className="flex h-full w-full items-center justify-between py-4 sm:py-2">
			<a href="/" className="flex items-center">
				{logoUrl && (
					<img
						src={logoUrl}
						title="tatakae"
						width={32}
						height={32}
						alt="logo"
						className="h-11 w-11 cursor-pointer"
						loading="eager"
					/>
				)}
			</a>
			<div className="flex items-center gap-1">
				<a
					href="/cinema"
					className={`rounded-md px-2 py-1 transition-colors ${
						isActive("/cinema")
							? "bg-accent text-foreground"
							: "hover:bg-accent"
					}`}
				>
					cinema
				</a>
				<a
					href="/writings"
					className={`rounded-md px-2 py-1 transition-colors ${
						isActive("/writings")
							? "bg-accent text-foreground"
							: "hover:bg-accent"
					}`}
				>
					writings
				</a>
				<a
					href="/updates"
					className={`rounded-md px-2 py-1 transition-colors ${
						isActive("/updates")
							? "bg-accent text-foreground"
							: "hover:bg-accent"
					}`}
				>
					updates
				</a>
			</div>
		</nav>
	);
}
