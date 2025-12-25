interface TopNavProps {
	pathname: string;
}

export function TopNav({ pathname }: TopNavProps) {
	const logoUrl =
		"https://61izvpe5ob.ufs.sh/f/ghNXXt9jhBA7gz3sS49jhBA7aDxcElbpQXquP9kMnvOLZ6Ci";

	const isActive = (path: string) => pathname.startsWith(path);

	return (
		<nav className="flex h-full w-full items-center justify-between py-4 sm:py-2">
			<a className="flex items-center" href="/">
				{logoUrl && (
					<img
						alt="logo"
						className="h-11 w-11 cursor-pointer"
						height={32}
						loading="eager"
						src={logoUrl}
						title="tatakae"
						width={32}
					/>
				)}
			</a>
			<div className="flex items-center gap-1">
				<a
					className={`px-2 py-1 transition-colors ${
						isActive("/cinema")
							? "border-primary border-b-2 text-foreground"
							: "hover:border-accent hover:border-b-2"
					}`}
					href="/cinema"
				>
					cinema
				</a>
				<a
					className={`px-2 py-1 transition-colors ${
						isActive("/writings")
							? "border-primary border-b-2 text-foreground"
							: "hover:border-accent hover:border-b-2"
					}`}
					href="/writings"
				>
					writings
				</a>
				<a
					className={`px-2 py-1 transition-colors ${
						isActive("/updates")
							? "border-primary border-b-2 text-foreground"
							: "hover:border-accent hover:border-b-2"
					}`}
					href="/updates"
				>
					updates
				</a>
			</div>
		</nav>
	);
}
