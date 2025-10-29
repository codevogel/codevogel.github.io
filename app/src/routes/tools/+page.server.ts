import { tools } from '$lib/assets/data/projects';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return { tools };
};
