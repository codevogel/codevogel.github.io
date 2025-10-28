import { getCategoryName } from '$lib/common/data';
import type { Tool, Game } from '$lib/server/data/projects';

export async function fetchReadmeForSlug(
	projects: Tool[] | Game[],
	slug: string,
	fetchFn: typeof fetch
): Promise<string | undefined> {
	const project = projects.find((p) => p.slug === slug);

	if (!project) {
		throw new Error(`Project with slug "${slug}" not found.`);
	}

	let readme: string | undefined = undefined;

	if (project.readmeURL) {
		console.log(`Attempting to fetch README from GitHub URL: ${project.readmeURL}`);
		const res = await fetchFn(project.readmeURL);
		if (res.ok) {
			console.log(`Successfully fetched README from GitHub URL: ${project.readmeURL}`);
			const baseRawURL = `https://raw.githubusercontent.com/codevogel/${slug}/refs/heads/main/'`;
			readme = await res.text();
			// Adjust relative paths in the README to absolute URLs
			readme = readme.replace(
				/([('"[])(\.{1,2}\/[^)\]'"]+)/g,
				(_, prefix, relPath) => `${prefix}${baseRawURL}${relPath.replace(/^\.{1,2}\//, '')}`
			);
		}
	}

	if (readme === undefined) {
		const localURL = `/projects/${getCategoryName(project.type).toLowerCase()}/${slug}/README.md`;
		console.log(
			`Could not fetch README from GitHub URL. Falling back to README from Local URL: ${localURL}`
		);
		const res = await fetchFn(localURL);
		if (res.ok) {
			readme = await res.text();
		} else {
			readme = `# Oops! 😦 \n\nSomething went wrong.\n\nNo \`README.md\` was found for the \`${project.type}\` with slug \`${slug}\`.\n\nMost likely, I forgot to add one!\n\nPlease be so kind to report this through [the Contact page](/contact).`;
		}
	}
	return readme;
}
