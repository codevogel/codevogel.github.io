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

<div class="min-h-full px-6 text-center">
	<h1 class="mb-2 text-2xl font-extrabold">Project overview</h1>
	<p class="mb-4 text-sm text-foreground/50">
		Click a project in the overview to jump to that project, or swipe down to scroll through them.
	</p>
	<div class="not-prose grid grid-cols-2 gap-x-4 gap-y-2">
		{#each projects as project, i (i)}
			<ProjectOverviewCard {project} />
		{/each}
	</div>
</div>

{#each projects as project, i (i)}
	<!-- Give each card a unique id based on its slug -->
	<div id={project.slug}>
		<ProjectCard {project} />
	</div>
{/each}
