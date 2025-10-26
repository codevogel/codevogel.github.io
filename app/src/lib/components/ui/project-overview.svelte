<script lang="ts">
	import { getCategoryName } from "$lib/common/data";
	import { type Project, type ProjectType } from "$lib/server/data/projects";

	const { type, projects, onSlugClick }: { type: ProjectType, projects: Project[], onSlugClick: (slug: string) => (event: MouseEvent) => void } = $props();
</script>

<section class="flex flex-col px-6 pt-4 pb-64 text-center">
	<h1 class="mb-2">{getCategoryName(type)} overview</h1>
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
						src={`/projects/${project.type}s/${project.slug}/${project.slug}${project.hasGif ? '.gif' : '.png'}`}
						alt={`${project.title} preview image`}
					/>
				</div>
			</button>
			{#if i !== projects.length - 1}
				<hr class="my-2 border-accent" />
			{/if}
		{/each}
	</div>
</section>
