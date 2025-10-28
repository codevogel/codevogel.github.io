<script lang="ts">
	import ReadmeRenderer from "$lib/components/ui/readme-renderer.svelte";

	let { data } = $props();

	let readme = $derived(data.readme);

</script>

<ReadmeRenderer {readme} />
