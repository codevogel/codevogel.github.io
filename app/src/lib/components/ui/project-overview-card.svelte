<script lang="ts">
	import type { Project } from '$lib/server/data/projects';
	import OverviewCard from '$lib/components/ui/overview-card.svelte';

	import { page } from '$app/state';

	let { project }: { project: Project } = $props();

	let url = $derived(page.url.pathname + '#' + project.slug);
</script>

<OverviewCard
	href={url}
	title={project.title}
	shortDescription={project.shortDescription}
	wip={project.wip}
/>
