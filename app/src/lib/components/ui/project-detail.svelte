<script lang="ts">
	import ReadmeRenderer from '$lib/components/ui/readme-renderer.svelte';

	let { readme, project } = $props();
</script>

<img
	src={`/projects/${project.type}s/${project.slug}/${project.slug}.png`}
	alt={`${project.title} banner image`}
	class="aspect-video"
/>
<ReadmeRenderer {readme} {project} />
