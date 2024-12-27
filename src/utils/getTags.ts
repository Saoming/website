export default function getTags(posts) {
	// Get tags from all posts
	const allTags = posts
		.map((post) => {
			const postTags = post.data.tags;
			let allTags = [];

			if (postTags?.length > 0) {
				postTags.forEach((tag: string) => {
					if ((allTags as string[]).indexOf(tag) === -1) {
						(allTags as string[]).push(tag);
					}
				});
			}
			return allTags;
		})
		.flat(1);

	// Make the tags unique
	let tags = [...new Set(allTags)];

	return tags;
}