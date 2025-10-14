import { tools } from '$lib/server/data/tools';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return { tools };
};
