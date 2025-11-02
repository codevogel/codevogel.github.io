<script lang="ts">
	import type { ProjectType } from '$lib/assets/data/projects';
	import ProjectOverview from '$lib/components/ui/project-overview.svelte';

	let { data } = $props();

	const projects = $derived(data.projects);

	const type: ProjectType = 'game';
</script>

<ProjectOverview {type} {projects} />
