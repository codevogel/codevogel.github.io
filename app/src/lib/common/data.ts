import type { ProjectType } from '$lib/server/data/projects';

export function getCategoryName(type: ProjectType): string {
	return type.charAt(0).toUpperCase() + type.slice(1) + 's';
}
