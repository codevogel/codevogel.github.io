import { skillGroups } from '$lib/server/data/skills';
import { jobs } from '$lib/server/data/jobs';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return { skillGroups, jobs };
};
