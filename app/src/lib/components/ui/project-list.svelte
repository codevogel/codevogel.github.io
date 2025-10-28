<script lang="ts">
	import ProjectCard from '$lib/components/ui/project-card.svelte';
	import type { Project } from '$lib/server/data/projects';
	import { ArrowDownIcon, ArrowUpIcon } from 'lucide-svelte';

	const { projects } = $props<{
		projects: Array<Project>;
	}>();
</script>

{#each projects as project, i (i)}
	<section id={project.slug} class="relative flex flex-col justify-center gap-y-8">
		<div class="absolute top-8 w-full px-4">
			<div class="flex flex-col items-center text-accent">
				<ArrowUpIcon />
				{#if i === 0}
					Overview
				{:else}
					{projects[i - 1].title}
				{/if}
			</div>
		</div>
		<ProjectCard {project} />
		<div class="absolute bottom-8 w-full px-4">
			<div class="flex flex-col items-center text-accent">
				{#if i !== projects.length - 1}
					{projects[i + 1].title}
					<ArrowDownIcon />
				{/if}
			</div>
		</div>
	</section>
{/each}
