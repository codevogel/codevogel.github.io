<script lang="ts">
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import ToolCard from '$lib/components/ui/tool-card.svelte';
	import ToolOverviewCard from '$lib/components/ui/tool-overview-card.svelte';

	let { data } = $props();
	const tools = $derived(data.tools);

	function scrollToHash() {
		const hash = window.location.hash?.slice(1);
		if (!hash) return;
		const el = document.getElementById(hash);
		if (el) {
			el.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}

	onMount(() => {
		scrollToHash();
		window.addEventListener('hashchange', scrollToHash);
		return () => window.removeEventListener('hashchange', scrollToHash);
	});

	afterNavigate(() => {
		scrollToHash();
	});
</script>

<div class="min-h-full px-6 text-center">
	<h1 class="text-2xl font-extrabold mb-2">Tool overview</h1>
	<p class="text-sm text-foreground/50 mb-4">
		Click a tool in the overview to jump to that project, or swipe down to scroll through them.
	</p>
	<div class="not-prose grid grid-cols-2 gap-x-4 gap-y-2">
		{#each tools as tool, i (i)}
			<ToolOverviewCard {tool} />
		{/each}
	</div>
</div>

{#each tools as tool, i (i)}
	<!-- Give each card a unique id based on its slug -->
	<div id={tool.slug}>
		<ToolCard {tool} />
	</div>
{/each}
