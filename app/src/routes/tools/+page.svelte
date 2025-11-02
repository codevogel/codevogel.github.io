<script lang="ts">
	import type { ProjectType } from '$lib/assets/data/projects';
	import ProjectOverview from '$lib/components/ui/project-overview.svelte';

	let { data } = $props();

	const projects = $derived(data.projects);

	const type: ProjectType = 'tool';
</script>

<ProjectOverview {type} {projects} />
