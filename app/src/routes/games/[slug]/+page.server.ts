import { games } from '$lib/server/data/projects';
import { fetchReadmeForSlug } from '$lib/server/data/fetch-readme';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, fetch }) => {
	const { slug } = params;
	const readme = await fetchReadmeForSlug(games, slug, fetch);
	return { readme };
};
