<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { Toaster } from '$lib/components/shadcn-svelte/ui/sonner';
	import { onMount } from 'svelte';
	import Header from '$lib/components/ui/header.svelte';
	import Footer from '$lib/components/ui/footer.svelte';
	import { afterNavigate } from '$app/navigation';
	import ScrollToTopButton from '$lib/components/ui/scroll-to-top-button.svelte';
	import { baseTitle, pages } from '$lib/assets/routes';
	import { page } from '$app/state';
	import {
		setContentContainerContext,
		setHeaderContainerContext,
		setScrollContainerContext
	} from '$lib/context';
	import { projects } from '$lib/assets/data/projects';

	let { children } = $props();

	let title = $derived.by(() => {

		if (page.url.pathname.startsWith('/games/') || page.url.pathname.startsWith('/tools/')) {
			const slug = page.url.pathname.split('/')[2];
			const projectTitle = projects.find((p) => p.slug === slug)?.title;
			return projectTitle ? `${projectTitle} | ${baseTitle}` : baseTitle;
		}
		const t = pages.find((p) => p.path === page.url.pathname)?.title ?? baseTitle;
		return t;
	});

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
	<title>{title}</title>
</svelte:head>

<svelte:window onresize={setWindowHeight} />

<Toaster />

<div class="absolute right-0 bottom-0 z-50 mr-4 mb-4">
	<ScrollToTopButton />
</div>

<div
	id="scroll-container"
	class="h-dvh max-h-dvh snap-y snap-mandatory overflow-y-auto bg-gradient-to-t from-accent/30 to-background/30"
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
		class="[&.first-section-overflowing>:first-child]:snap-start [&>section]:min-h-page [&>section]:snap-start [&>section]:first:min-h-page-without-header [&>section]:first:snap-end [&>section]:last:min-h-page-without-footer [&>section]:only:min-h-page-without-header-and-footer [&>section]:only:snap-start {firstSectionOverflowing
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
