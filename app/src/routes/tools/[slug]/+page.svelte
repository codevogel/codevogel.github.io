<script lang="ts">
	import ReadmeRenderer from '$lib/components/ui/readme-renderer.svelte';

	let { data } = $props();

	let readme = $derived(data.readme);
	let project = $derived(data.project);
</script>

<img
	src={`/projects/${project.type}s/${project.slug}/${project.slug}.png`}
	alt={`${project.title} banner image`}
	class="aspect-video"
/>
<ReadmeRenderer {readme} {project} />
