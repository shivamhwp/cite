import { cn } from "@/lib/utils";
import type * as React from "react";

function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			data-slot="card"
			className={cn(
				"border-border bg-card text-card-foreground rounded-lg border shadow-sm",
				className,
			)}
			{...props}
		/>
	);
}

function CardHeader({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div className={cn("flex flex-col gap-1 p-3", className)} {...props} />
	);
}

function CardTitle({
	className,
	...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
	return (
		<h3
			className={cn("text-sm leading-none font-medium", className)}
			{...props}
		/>
	);
}

function CardDescription({
	className,
	...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
	return (
		<p className={cn("text-muted-foreground text-xs", className)} {...props} />
	);
}

function CardContent({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return <div className={cn("p-3 pt-1", className)} {...props} />;
}

export { Card, CardContent, CardDescription, CardHeader, CardTitle };
