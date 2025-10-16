<script lang="ts">
	import * as Card from '$lib/components/shadcn-svelte/ui/card/index.js';
	import type { Tool } from '$lib/server/data/tools';
	import { ExternalLinkIcon } from 'lucide-svelte';
	import YoutubeEmbed from './youtube-embed.svelte';
	import { resolve } from '$app/paths';

	let { tool }: { tool: Tool } = $props();

	let toolURL = resolve(`/tools/${tool.slug}`);
</script>

<a
	href={toolURL}
	class="no-underline [&:hover_.hover-altered]:text-primary [&>:first-child:hover]:border-foreground/20 px-6"
>
	<Card.Root>
		<Card.Header>
			<Card.Title class="text-xl hover-altered">{tool.title}{tool.wip ? " [WIP]" : ""}</Card.Title>
		</Card.Header>
		<Card.Content class="flex flex-col gap-y-4 px-0">
			{#if tool.youtubeURL}

				<YoutubeEmbed youtubeURL={tool.youtubeURL} />
			{:else}
				<img
					src={`/tools/${tool.slug}/${tool.slug}${tool.hasGif ? '.gif' : '.png'}`}
					alt={`Screenshot of ${tool.title}`}
					class="aspect-video"
				/>
			{/if}
		</Card.Content>
		<Card.Footer class="flex flex-row justify-center">
			<Card.Description>{tool.description}</Card.Description>
			<div class="hover-altered rounded-2xl p-4 hover:bg-accent">
				<ExternalLinkIcon />
			</div>
		</Card.Footer>
	</Card.Root>
</a>
