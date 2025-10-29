<script lang="ts">
	import { getImagePath } from '$lib/assets/data/projects';
	import ReadmeRenderer from '$lib/components/ui/readme-renderer.svelte';

	let { readme, project } = $props();
</script>

<img src={getImagePath(project)} alt={`${project.title} banner image`} class="aspect-video" />
<ReadmeRenderer {readme} {project} />
