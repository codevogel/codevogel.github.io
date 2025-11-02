<script lang="ts">
	import * as Card from '$lib/components/shadcn-svelte/ui/card/index.js';
	import { getImagePath, type Project } from '$lib/assets/data/projects';
	import { ExternalLinkIcon } from 'lucide-svelte';
	import YoutubeEmbed from './youtube-embed.svelte';

	let {
		project,
		class: className = '',
		baseClass = 'no-underline group'
	}: { project: Project; class?: string; baseClass?: string } = $props();

	const projectRoute = `${project.type}s/${project.slug}`;
	const href = projectRoute;
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<a id={project.slug} {href} class="{baseClass} {className}" data-sveltekit-preload-data="false">
	<Card.Root class="group-hover:bg-accent">
		<Card.Header>
			<Card.Title class="group-hover:text-primary">
				<h2>{project.title}{project.workStatus ? ' [WIP]' : ''}</h2>
			</Card.Title>
		</Card.Header>
		<Card.Content class="flex flex-col gap-y-4 px-0">
			{#if project.youtubeURL}
				<YoutubeEmbed youtubeURL={project.youtubeURL} />
			{:else}
				<img
					src={getImagePath(project)}
					alt={`${project.title} preview image`}
					class="aspect-video"
				/>
			{/if}
		</Card.Content>
		<Card.Footer class="flex flex-row justify-center gap-x-2">
			<Card.Description>{project.description}</Card.Description>
			<div class="group-hover:text-primary">
				<ExternalLinkIcon size={24} />
			</div>
		</Card.Footer>
	</Card.Root>
</a>
