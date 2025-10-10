<script lang="ts">
	import Footer from '$lib/components/ui/footer.svelte';

	let { children } = $props();
</script>

<main
	class="max-h-page-without-header snap-y snap-mandatory overflow-y-scroll *:flex *:min-h-page-without-header *:snap-start *:flex-col *:justify-center [&>:last-child]:min-h-0 [&>:last-child]:snap-align-none [&>:nth-last-child(2)]:min-h-page-without-header-and-footer"
>
	{@render children?.()}
	<Footer />
</main>
