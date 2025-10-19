<script lang="ts">
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import ToolCard from '$lib/components/ui/tool-card.svelte';
	import { ArrowDownIcon, ArrowUpIcon } from 'lucide-svelte';

	let { data } = $props();
	const tools = $derived(data.tools);

	function scrollToHash() {
		const hash = window.location.hash?.slice(1);
		if (!hash) return;
		const el = document.getElementById(hash);
		if (el) {
			//TODO: smooth scroll
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

<section class="flex flex-col px-6 pt-4 pb-64 text-center">
	<h1 class="mb-2">Tool overview</h1>
	<p class="subscript mb-4">
		Click a tool in the overview to jump to that project, or swipe down to scroll through them.
	</p>
	<div class="flex flex-col gap-y-2 text-start">
		{#each tools as tool, i (i)}
			<a
				class="grid grid-cols-2 hover:[&_.hover-target]:text-primary"
				href={`/tools#${tool.slug}`}
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
			</a>
			{#if i !== tools.length - 1}
				<hr class="my-2 border-accent" />
			{/if}
		{/each}
	</div>
</section>

{#each tools as tool, i (i)}
	<!-- Give each card a unique id based on its slug -->
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
