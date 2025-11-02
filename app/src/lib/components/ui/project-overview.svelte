<script lang="ts">
	import { getCategoryName } from '$lib/assets/data/projects';
	import type { Project, ProjectType } from '$lib/assets/data/projects';
	import ProjectCard from '$lib/components/ui/project-card.svelte';
	import Section from '$lib/components/ui/section.svelte';

	const {
		type,
		projects
	}: {
		type: ProjectType;
		projects: Project[];
	} = $props();

	const categoryName = $derived(getCategoryName(type));
</script>

<Section class="items-center px-6 pt-4 pb-8">
	<h1 class="mb-2">{categoryName}</h1>
	<div class="subscript mb-4">
		<p>Here, you can find all the {categoryName.toLowerCase()} I've worked on!</p>
		<p>Click on a {type} to find out more about it.</p>
	</div>
	<div class="flex flex-col gap-y-8 text-start">
		{#each projects as project, i (i)}
			<ProjectCard {project} />
		{/each}
	</div>
</Section>
