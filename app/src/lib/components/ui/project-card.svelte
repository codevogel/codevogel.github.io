<script lang="ts">
	import * as Card from '$lib/components/shadcn-svelte/ui/card/index.js';
	import type { Project } from '$lib/server/data/projects';
	import { ExternalLinkIcon } from 'lucide-svelte';
	import YoutubeEmbed from './youtube-embed.svelte';
	import { resolve } from '$app/paths';

	let { project }: { project: Project } = $props();

	let projectURL = resolve(`/projects/${project.slug}`);
</script>

<a
	href={projectURL}
	class="no-underline [&:hover_.hover-altered]:text-primary [&>:first-child:hover]:border-foreground/20 px-6"
>
	<Card.Root>
		<Card.Header>
			<Card.Title class="text-xl hover-altered">{project.title}</Card.Title>
		</Card.Header>
		<Card.Content class="flex flex-col gap-y-4 px-0">
			{#if project.youtubeURL}

				<YoutubeEmbed youtubeURL={project.youtubeURL} />
			{:else}
				<img
					src={`/projects/${project.slug}/${project.slug}.png`}
					alt={`Screenshot of ${project.title}`}
				/>
			{/if}
		</Card.Content>
		<Card.Footer class="flex flex-row justify-center">
			<Card.Description>{project.description}</Card.Description>
			<div class="hover-altered rounded-2xl p-4 hover:bg-accent">
				<ExternalLinkIcon />
			</div>
		</Card.Footer>
	</Card.Root>
</a>
