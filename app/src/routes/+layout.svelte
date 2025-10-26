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

	let windowHeight: number | undefined = $state();

	// Calculate available height for the first section
	// This is determined by subtracting the header height from the viewport height
	let availableHeight: number = $derived.by(() => {
		return windowHeight && headerContainer ? windowHeight - headerContainer.offsetHeight : 0;
	});

	// The first section overflows if its height exceeds the available height
	let firstSectionOverflowing: boolean = $derived.by(() => {
		return firstSection ? firstSection.offsetHeight > availableHeight : false;
	});

	onMount(() => {
		setWindowHeight();
		identifyFirstSection();
	});

	afterNavigate(() => {
		identifyFirstSection();
	});

	function identifyFirstSection() {
		firstSection = contentContainer?.querySelector('section:first-child') ?? null;
	}

	function setWindowHeight() {
		windowHeight = window.innerHeight;
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<svelte:window onresize={setWindowHeight} />

<Toaster />

<div class="absolute right-0 bottom-0 z-50 mr-4 mb-4">
	<ScrollToTopButton {scrollContainer} targetContainer={contentContainer} />
</div>

<div
	id="scroll-container"
	class="h-dvh max-h-dvh snap-y snap-mandatory overflow-y-auto"
	bind:this={scrollContainer}
>
	<header id="site-header" bind:this={headerContainer} class="h-header snap-start">
		<Header />
	</header>
	<main
		id="content-container"
		bind:this={contentContainer}
		class="*:min-h-page *:snap-start *:first:min-h-page-without-header *:first:snap-end *:last:min-h-page-without-footer *:only:min-h-page-without-header-and-footer *:only:snap-start [&.first-section-overflowing>:first-child]:snap-start {firstSectionOverflowing
			? 'first-section-overflowing'
			: ''}"
	>
		{@render children?.()}
	</main>
	<footer class="h-footer snap-end">
		<Footer />
	</footer>
</div>
