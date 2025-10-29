<script lang="ts">
	import { getCategoryName, getImagePath } from '$lib/assets/data/projects';
	import type { Project, ProjectType } from '$lib/assets/data/projects';
	import { ArrowDownIcon } from 'lucide-svelte';

	const {
		type,
		projects,
		onSlugClick
	}: {
		type: ProjectType;
		projects: Project[];
		onSlugClick: (slug: string) => (event: MouseEvent) => void;
	} = $props();

	const categoryName = $derived(getCategoryName(type));
</script>

<section class="flex flex-col px-6 pt-4 pb-80 text-center">
	<h1 class="mb-2">{categoryName} overview</h1>
	<p class="subscript mb-4">
		Click a {type} in the overview to jump to that project, or swipe down to scroll through them.
	</p>
	<div class="flex flex-col gap-y-2 text-start">
		{#each projects as project, i (i)}
			<button
				class="grid grid-cols-2 hover:cursor-pointer hover:[&_.hover-target]:text-primary"
				onclick={onSlugClick(project.slug)}
			>
				<div class="flex flex-col">
					<span class="hover-target font-bold">{project.title}</span>
					<span class="subscript">{project.shortDescription}</span>
				</div>
				<div class="aspect-video">
					<img
						src={getImagePath(project)}
						class="rounded-lg"
						alt={`${project.title} preview image`}
					/>
				</div>
			</button>
			{#if i !== projects.length - 1}
				<hr class="my-2 border-accent" />
			{/if}
		{/each}
	</div>
	<div class="mt-36 flex flex-col items-center text-accent">
		<ArrowDownIcon /><span>Scroll down to flip through the {categoryName.toLowerCase()}</span>
	</div>
</section>
