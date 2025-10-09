<!-- +layout.svelte -->
<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/ui/header/header.svelte';
	import WaveBorder from '$lib/components/ui/header/waveborder/wave-border.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Header />

	<!-- Main area expands to fill available height -->
	<main class="flex-grow ">
		{@render children?.()}
	</main>

	<footer class="overflow-hidden">
		<!-- Force the SVG to stick to the bottom -->
		<WaveBorder flipY={true} className="h-12 max-h-12" />
	</footer>
</div>
