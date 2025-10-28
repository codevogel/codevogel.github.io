<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { Toaster } from '$lib/components/shadcn-svelte/ui/sonner';
	import { onMount } from 'svelte';
	import Header from '$lib/components/ui/header.svelte';
	import Footer from '$lib/components/ui/footer.svelte';
	import { afterNavigate } from '$app/navigation';
	import ScrollToTopButton from '$lib/components/ui/scroll-to-top-button.svelte';
	import {
		setContentContainerContext,
		setHeaderContainerContext,
		setScrollContainerContext
	} from '$lib/context';

	let { children } = $props();

	let scrollContainer: HTMLElement | undefined = $state();
	let headerContainer: HTMLElement | undefined = $state();
	let contentContainer: HTMLElement | undefined = $state();
	let firstSection: HTMLElement | undefined = $state();

	setHeaderContainerContext(() => headerContainer);
	setScrollContainerContext(() => scrollContainer);
	setContentContainerContext(() => contentContainer);

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
		firstSection = contentContainer?.querySelector('section:first-child') ?? undefined;
	}

	function setWindowHeight() {
		windowHeight = window.innerHeight;
	}

	function attachContainer(setter: (node: HTMLElement) => void) {
		return (node: HTMLElement) => setter(node);
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<svelte:window onresize={setWindowHeight} />

<Toaster />

<div class="absolute right-0 bottom-0 z-50 mr-4 mb-4">
	<ScrollToTopButton />
</div>

<div
	id="scroll-container"
	class="h-dvh max-h-dvh snap-y snap-mandatory overflow-y-auto"
	{@attach attachContainer((node) => (scrollContainer = node))}
>
	<header
		id="site-header"
		class="h-header snap-start"
		{@attach attachContainer((node) => (headerContainer = node))}
	>
		<Header />
	</header>
	<main
		id="content-container"
		class="*:min-h-page *:snap-start *:first:min-h-page-without-header *:first:snap-end *:last:min-h-page-without-footer *:only:min-h-page-without-header-and-footer *:only:snap-start [&.first-section-overflowing>:first-child]:snap-start {firstSectionOverflowing
			? 'first-section-overflowing'
			: ''}"
		{@attach attachContainer((node) => (contentContainer = node))}
	>
		{@render children?.()}
	</main>
	<footer class="h-footer snap-end">
		<Footer />
	</footer>
</div>
