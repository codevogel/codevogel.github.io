import { tools } from '$lib/server/data/projects';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, fetch }) => {
	const { slug } = params;

	const tool = tools.find((tool) => tool.slug === slug);

	let readme = null;

	if (tool && tool.readmeURL) {
		const res = await fetch(tool.readmeURL);
		if (res.ok) {
			const baseURL =
				'https://raw.githubusercontent.com/codevogel/godot_doctor/refs/heads/main/';
			readme = await res.text();
			readme = readme.replace(
				/([('"[])(\.{1,2}\/[^)\]'"]+)/g,
				(_, prefix, relPath) => `${prefix}${baseURL}${relPath.replace(/^\.{1,2}\//, '')}`
			);
		}
	}

	if (readme == null) {
		const res = await fetch(`projects/tools/${slug}/README.md`);
		if (res.ok) {
			readme = await res.text();
		} else {
			readme = '# Oops!\nNo README found.';
		}
	}

	return { readme };
};
