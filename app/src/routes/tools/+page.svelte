<script lang="ts">
	import ProjectOverview from '$lib/components/ui/project-overview.svelte';
	import ProjectList from '$lib/components/ui/project-list.svelte';
	import { getScrollContainerContext } from '$lib/context';
	import { scrollToTopOfContainer } from '$lib/common/scroll.js';
	import { pushState } from '$app/navigation';

	let { data } = $props();
	const tools = $derived(data.tools);

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
			pushState(`/tools#${slug}`, {});
		};
	}
</script>

<ProjectOverview type="tool" projects={tools} {onSlugClick} />
<ProjectList projects={tools} />
