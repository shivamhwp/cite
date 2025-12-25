import dayjs from "dayjs";

type Post = {
	id: string;
	slug: string;
	body: string;
	collection: string;
	data: {
		title: string;
		published: string | Date;
	};
};

export default function WritingsTabs({ posts }: { posts: Post[] }) {
	const sortedPosts = [...posts].sort(
		(a, b) =>
			new Date(b.data.published).getTime() -
			new Date(a.data.published).getTime(),
	);

	return (
		<section>
			<div className="space-y-1">
				{sortedPosts.map((post) => (
					<a
						className="flex h-9 min-h-0 items-center rounded-md px-3 py-2 transition-colors hover:text-foreground hover:bg-accent/50"
						href={`/writings/posts/${post.slug}`}
						key={post.slug}
						rel="noopener noreferrer"
					>
						<div className="w-full truncate font-serif text-lg font-semibold">
							{post.data.title}
						</div>
						<span className="ml-3 whitespace-nowrap text-muted-foreground text-xs">
							{dayjs(post.data.published).format("D MMM")}
						</span>
					</a>
				))}
			</div>
		</section>
	);
}
