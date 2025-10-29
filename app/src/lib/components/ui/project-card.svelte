<script lang="ts">
	import * as Card from '$lib/components/shadcn-svelte/ui/card/index.js';
	import { type Project } from '$lib/assets/data/projects';
	import { ExternalLinkIcon } from 'lucide-svelte';
	import YoutubeEmbed from './youtube-embed.svelte';

	let { project }: { project: Project } = $props();

	const projectRoute = `${project.type}s/${project.slug}`;
	const href = projectRoute;
	const imgSrc = `/projects/${projectRoute}/${project.slug}${project.hasGif ? '.gif' : '.png'}`;
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<a
	{href}
	class="px-6 no-underline [&:hover_.hover-altered]:text-primary [&>:first-child:hover]:border-foreground/20"
>
	<Card.Root>
		<Card.Header>
			<Card.Title class="hover-altered text-xl"
				>{project.title}{project.workStatus ? ' [WIP]' : ''}</Card.Title
			>
		</Card.Header>
		<Card.Content class="flex flex-col gap-y-4 px-0">
			{#if project.youtubeURL}
				<YoutubeEmbed youtubeURL={project.youtubeURL} />
			{:else}
				<img src={imgSrc} alt={`Screenshot of ${project.title}`} class="aspect-video" />
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
