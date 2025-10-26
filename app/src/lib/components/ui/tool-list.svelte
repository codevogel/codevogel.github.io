<script lang="ts">
	import type { Tool } from '$lib/server/data/tools';
	import ToolCard from '$lib/components/ui/tool-card.svelte';
	import { ArrowDownIcon, ArrowUpIcon } from 'lucide-svelte';

	const { tools } = $props<{
		tools: Array<Tool>;
	}>();
</script>

{#each tools as tool, i (i)}
	<section id={tool.slug} class="relative flex flex-col justify-center gap-y-8">
		<div class="absolute top-8 w-full px-4">
			<div class="flex flex-col items-center text-accent">
				<ArrowUpIcon />
				{#if i === 0}
					Overview
				{:else}
					{tools[i - 1].title}
				{/if}
			</div>
		</div>
		<ToolCard {tool} />
		<div class="absolute bottom-8 w-full px-4">
			<div class="flex flex-col items-center text-accent">
				{#if i !== tools.length - 1}
					{tools[i + 1].title}
					<ArrowDownIcon />
				{/if}
			</div>
		</div>
	</section>
{/each}

