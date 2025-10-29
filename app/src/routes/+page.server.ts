import { skillGroups } from '$lib/assets/data/skills';
import { jobs } from '$lib/assets/data/jobs';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return { skillGroups, jobs };
};
