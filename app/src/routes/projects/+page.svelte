<script lang="ts">
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import ProjectCard from '$lib/components/ui/project-card.svelte';
	import ProjectOverviewCard from '$lib/components/ui/project-overview-card.svelte';

	let { data } = $props();
	const projects = $derived(data.projects);

	function scrollToHash() {
		const hash = window.location.hash?.slice(1);
		if (!hash) return;
		const el = document.getElementById(hash);
		if (el) {
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

<section class="flex flex-col px-6 text-center justify-center">
	<h1 class="mb-2">Project overview</h1>
	<p class="mb-4 subscript">
		Click a project in the overview to jump to that project, or swipe down to scroll through them.
	</p>
	<div class="not-prose grid grid-cols-2 gap-x-4 gap-y-2">
		{#each projects as project, i (i)}
			<ProjectOverviewCard {project} />
		{/each}
	</div>
</section>

{#each projects as project, i (i)}
	<!-- Give each card a unique id based on its slug -->
	<section id={project.slug} class="flex flex-col justify-center">
		<ProjectCard {project} />
	</section>
{/each}
