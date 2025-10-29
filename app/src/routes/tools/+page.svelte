<script>
	import ProjectPage from '$lib/components/ui/project-page.svelte';

	let { data } = $props();

	const projects = $derived(data.projects);
</script>

<ProjectPage {projects} projectType="tool" />
