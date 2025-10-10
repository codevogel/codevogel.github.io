<!-- +layout.svelte -->
<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/ui/header.svelte';
	import Main from '$lib/components/ui/main.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />
<Main {children} />
