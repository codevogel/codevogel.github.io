import { skills } from "$lib/server/data/skills/skills";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
	return { skills };
}
