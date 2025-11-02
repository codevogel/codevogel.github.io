import type { Project } from '$lib/assets/data/projects';
import { getCategoryName } from '$lib/assets/data/projects';

export async function fetchReadmeForSlug(
	project: Project,
	slug: string,
	fetchFn: typeof fetch
): Promise<string> {
	let readme: string | undefined = undefined;

	if (project.readmeURL) {
		console.log(`Attempting to fetch README from GitHub URL: ${project.readmeURL}`);
		const res = await fetchFn(project.readmeURL);
		if (res.ok) {
			console.log(`Successfully fetched README from GitHub URL: ${project.readmeURL}`);
			const baseRawURL = `https://raw.githubusercontent.com/codevogel/${slug}/refs/heads/main/`;
			readme = await res.text();
			// Adjust relative paths in the README to absolute URLs
			return readme.replace(
				/([('"[])(\.{1,2}\/[^)\]'"]+)/g,
				(_, prefix, relPath) => `${prefix}${baseRawURL}${relPath.replace(/^\.{1,2}\//, '')}`
			);
		}
	} else {
		const localURL = `/projects/${getCategoryName(project.type).toLowerCase()}/${slug}/README.md`;
		console.log(
			`Could not fetch README from GitHub URL. Falling back to README from Local URL: ${localURL}`
		);
		const res = await fetchFn(localURL);
		if (res.ok) {
			return await res.text();
		}
	}
	console.error(
		`Failed to fetch fallback README for project type '${project.type}' with slug '${slug}'.`
	);
	return `# Oops! 😦 \n\nSomething went wrong.\n\nNo \`README.md\` was found for the \`${project.type}\` with slug \`${slug}\`.\n\nMost likely, I forgot to add one!\n\nPlease be so kind to report this through [the Contact page](/contact).`;
}
