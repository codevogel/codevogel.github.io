<script lang="ts">
	import type { Tool } from '$lib/server/data/tools';

	const {
		tools,
		onSlugClick
	}: { tools: Tool[]; onSlugClick: (slug: string) => (event: MouseEvent) => void } = $props();
</script>

<section class="flex flex-col px-6 pt-4 pb-64 text-center">
	<h1 class="mb-2">Tool overview</h1>
	<p class="subscript mb-4">
		Click a tool in the overview to jump to that project, or swipe down to scroll through them.
	</p>
	<div class="flex flex-col gap-y-2 text-start">
		{#each tools as tool, i (i)}
			<button
				class="grid grid-cols-2 hover:cursor-pointer hover:[&_.hover-target]:text-primary"
				onclick={onSlugClick(tool.slug)}
			>
				<div class="flex flex-col">
					<span class="hover-target font-bold">{tool.title}</span>
					<span class="subscript">{tool.shortDescription}</span>
				</div>
				<div class="aspect-video">
					<img
						src={`/tools/${tool.slug}/${tool.slug}${tool.hasGif ? '.gif' : '.png'}`}
						alt={`${tool.title} preview image`}
					/>
				</div>
			</button>
			{#if i !== tools.length - 1}
				<hr class="my-2 border-accent" />
			{/if}
		{/each}
	</div>
</section>
