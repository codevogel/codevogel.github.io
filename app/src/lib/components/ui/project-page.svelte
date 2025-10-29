<script lang="ts">
	import ProjectOverview from '$lib/components/ui/project-overview.svelte';
	import ProjectList from '$lib/components/ui/project-list.svelte';
	import { getScrollContainerContext } from '$lib/context';
	import { scrollToTopOfContainer } from '$lib/utils/scroll';
	import { pushState } from '$app/navigation';
	import { getCategoryName, type Project, type ProjectType } from '$lib/assets/data/projects';

	let { projectType, projects }: { projectType: ProjectType; projects: Project[] } = $props();

	let scrollContainerContext = getScrollContainerContext();

	function onSlugClick(slug: string) {
		return (event: MouseEvent) => {
			event.preventDefault();
			const targetElement = document.getElementById(slug);
			const scrollContainer = scrollContainerContext();
			if (targetElement && scrollContainer) {
				scrollToTopOfContainer(scrollContainer, targetElement);
			}
			// eslint-disable-next-line svelte/no-navigation-without-resolve
			pushState(`/${getCategoryName(projectType)}#${slug}`, {});
		};
	}
</script>

<ProjectOverview type={projectType} {projects} {onSlugClick} />
<ProjectList {projects} />
