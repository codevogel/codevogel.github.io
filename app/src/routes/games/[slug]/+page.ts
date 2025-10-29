import { projects } from '$lib/server/data/projects';
import { fetchReadmeForSlug } from '$lib/server/data/fetch-readme';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params, fetch }) => {
	const { slug } = params;
	const type: 'tool' | 'game' = 'game';
	const project = projects.filter((p) => p.type === type).find((p) => p.slug === slug);
	if (!project) {
		return error(404, { message: `Project with type '${type}' and slug '${slug}' not found.` });
	}
	const readme = await fetchReadmeForSlug(project, slug, fetch);
	return { readme, project };
};
