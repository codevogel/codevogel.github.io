<!-- +layout.svelte -->
<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { Toaster } from '$lib/components/shadcn-svelte/ui/sonner';

	let { children } = $props();

	import { onMount } from 'svelte';
	import Header from '$lib/components/ui/header.svelte';
	import Footer from '$lib/components/ui/footer.svelte';


	onMount(async () => {
		await new Promise(resolve => setTimeout(resolve, 200));

		const firstSection = document.querySelector('#content-container > :first-child');
		const viewportHeight = window.innerHeight;
		const headerHeight = document.querySelector('header')?.offsetHeight || 0;
		const availableHeight = viewportHeight - headerHeight;

		console.log(
			firstSection,
			firstSection?.offsetHeight > availableHeight,
			firstSection?.offsetHeight,
			availableHeight
		);

		if (firstSection && firstSection.offsetHeight > availableHeight) {
			firstSection.classList.add('overflowing');
		}
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Toaster />

<!-- <div class="max-h-[100dvh] snap-y snap-mandatory overflow-y-scroll"> -->
<!-- 	<header class="h-header snap-none bg-red-300"></header> -->
<!-- 	<main -->
<!-- 		class="[&>*]:min-h-page [&>*]:snap-start [&>:first-child]:snap-end [&>:first-child]:min-h-page-without-header [&>:last-child]:min-h-page-without-footer" -->
<!-- 	> -->
<!-- 		<section class="bg-red-500"></section> -->
<!-- 		<section class="bg-red-600"></section> -->
<!-- 		<section class="bg-red-700"></section> -->
<!-- 	</main> -->
<!-- 	<footer class="h-footer snap-end bg-red-400"></footer> -->
<!-- </div> -->

<div id="scroll-container" class="h-[100dvh] max-h-[100dvh] snap-y snap-mandatory overflow-y-auto">
	<header id="site-header" class="h-header snap-start"><Header/></header>
	<main
		id="content-container"
		class="[&>*]:min-h-page [&>*]:snap-start [&>:first-child]:min-h-page-without-header [&>:first-child]:snap-end [&>:first-child.overflowing]:snap-start [&>:last-child]:min-h-page-without-footer [&>:only-child]:min-h-page-without-header-and-footer [&>:only-child]:snap-start"
	>
		{@render children?.()}
	</main>
	<footer class="h-footer snap-end">
		<Footer/>
	</footer>
</div>

<style>
	@reference "tailwindcss";

	:global(h1) {
		@apply text-3xl font-bold;
	}

	:global(h2) {
		@apply text-xl font-semibold;
	}

	:global(.subscript) {
		@apply text-sm italic;
		color: color-mix(in oklab, var(--color-foreground) 40%, transparent);
	}
</style>
