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
					    href={`/writings/posts/${post.slug}`}
					    rel="noopener noreferrer"
						key={post.slug}
						className="flex items-center px-3 py-2 min-h-0 h-9 rounded-md hover:bg-accent transition-colors"
					>
						<div
							className="text-base w-full truncate"
						>
							{post.data.title}
						</div>
						<span className="ml-3 text-xs text-muted-foreground whitespace-nowrap">
							{dayjs(post.data.published).format("D MMM")}
						</span>
					</a>
				))}
			</div>
		</section>
	);
}
