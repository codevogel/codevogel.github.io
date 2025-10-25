<!-- +layout.svelte -->
<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { Toaster } from '$lib/components/shadcn-svelte/ui/sonner';
	import { onMount } from 'svelte';
	import Header from '$lib/components/ui/header.svelte';
	import Footer from '$lib/components/ui/footer.svelte';
	import { afterNavigate } from '$app/navigation';

	let { children } = $props();

	let contentContainer: HTMLElement;

	afterNavigate(async () => {
		await determineSnapBehavior();
	});

	onMount(async () => {
		await determineSnapBehavior();
	});

	async function determineSnapBehavior() {
		await new Promise((resolve) => setTimeout(resolve, 200));

		const firstSection: HTMLElement | null =
			contentContainer?.querySelector('section:first-child');
		const viewportHeight = window.innerHeight;
		const headerHeight = document.querySelector('header')?.offsetHeight || 0;
		const availableHeight = viewportHeight - headerHeight;

		if (firstSection && firstSection.offsetHeight > availableHeight) {
			firstSection.classList.add('overflowing');
		}
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Toaster />

<div id="scroll-container" class="h-[100dvh] max-h-[100dvh] snap-y snap-mandatory overflow-y-auto">
	<header id="site-header" class="h-header snap-start"><Header /></header>
	<main
		id="content-container"
		bind:this={contentContainer}
		class="[&>*]:min-h-page [&>*]:snap-start [&>:first-child]:min-h-page-without-header [&>:first-child]:snap-end [&>:first-child.overflowing]:snap-start [&>:last-child]:min-h-page-without-footer [&>:only-child]:min-h-page-without-header-and-footer [&>:only-child]:snap-start"
	>
		{@render children?.()}
	</main>
	<footer class="h-footer snap-end">
		<Footer />
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
