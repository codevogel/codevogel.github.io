<!-- +layout.svelte -->
<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { Toaster } from '$lib/components/shadcn-svelte/ui/sonner';
	import { onMount } from 'svelte';
	import Header from '$lib/components/ui/header.svelte';
	import Footer from '$lib/components/ui/footer.svelte';
	import { afterNavigate } from '$app/navigation';
	import ScrollToTopButton from '$lib/components/ui/scroll-to-top-button.svelte';

	let { children } = $props();

	let headerContainer: HTMLElement | undefined = $state();
	let contentContainer: HTMLElement | undefined = $state();
	let scrollContainer: HTMLElement | undefined = $state();
	let firstSection: HTMLElement | null = $state(null);

	let windowHeight: number | undefined = $state()

	let availableHeight: number = $derived.by(() => {
		return windowHeight && headerContainer ? windowHeight - headerContainer.offsetHeight : 0;
	});
	let firstSectionOverflowing: boolean = $derived.by(() => {
		return firstSection ? firstSection.offsetHeight > availableHeight : false;
	});

	onMount(async () => {
		windowHeight = window.innerHeight;
		firstSection = contentContainer?.querySelector('section:first-child') || null;
	});

	afterNavigate(async () => {
		windowHeight = window.innerHeight;
		firstSection = contentContainer?.querySelector('section:first-child') || null;
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Toaster />

<div class="absolute right-0 bottom-0 z-50 mr-4 mb-4">
	<ScrollToTopButton {scrollContainer} targetContainer={contentContainer} />
</div>

<div
	id="scroll-container"
	class="h-[100dvh] max-h-[100dvh] snap-y snap-mandatory overflow-y-auto"
	bind:this={scrollContainer}
>
	<header id="site-header" bind:this={headerContainer} class="h-header snap-start">
		<Header />
	</header>
	<main
		id="content-container"
		bind:this={contentContainer}
		class="[&.first-section-overflowing>:first-child]:snap-start [&>*]:min-h-page [&>*]:snap-start [&>:first-child]:min-h-page-without-header [&>:first-child]:snap-end [&>:last-child]:min-h-page-without-footer [&>:only-child]:min-h-page-without-header-and-footer [&>:only-child]:snap-start {firstSectionOverflowing
			? 'first-section-overflowing'
			: ''}"
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
