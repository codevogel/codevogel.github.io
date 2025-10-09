<script lang="ts">
	import Button from '$lib/components/shadcn-svelte/ui/button/button.svelte';
	import { pages } from '$lib/routes/routes';
</script>

<nav class="flex flex-row justify-center">
	<main class="grid grid-cols-4 justify-between max-w-sm">
		{#each pages as page (page.path)}
			<Button variant="nav" href={page.path}>{page.name}</Button>
		{/each}
	</main>
</nav>
