<script lang="ts">
	import ProjectDetail from '$lib/components/ui/project-detail.svelte';

	let { data } = $props();

	let readme = $derived(data.readme);
	let project = $derived(data.project);
</script>

<ProjectDetail {readme} {project} />
