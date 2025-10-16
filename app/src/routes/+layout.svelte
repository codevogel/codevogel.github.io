<!-- +layout.svelte -->
<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/ui/header.svelte';
	import Footer from '$lib/components/ui/footer.svelte';
	import Main from '$lib/components/ui/main.svelte';
	import ContentScrollContainer from '$lib/components/ui/content-scroll-container.svelte';
	import { Toaster } from '$lib/components/shadcn-svelte/ui/sonner';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Toaster />

<Header />
<ContentScrollContainer>
	<Main>
		{@render children?.()}
	</Main>
	<Footer />
</ContentScrollContainer>
