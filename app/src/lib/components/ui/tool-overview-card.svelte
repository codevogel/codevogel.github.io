<script lang="ts">
	import type { Tool } from '$lib/server/data/tools';
	import OverviewCard from '$lib/components/ui/overview-card.svelte';

	import { page } from '$app/state';

	let { tool }: { tool: Tool } = $props();

	let url = $derived(page.url.pathname + '#' + tool.slug);
</script>

<OverviewCard
	href={url}
	title={tool.title}
	shortDescription={tool.shortDescription}
	wip={tool.wip}
/>
