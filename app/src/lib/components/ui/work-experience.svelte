<script lang="ts">
	import WorkExperienceCarousel from '$lib/components/ui/work-experience-carousel.svelte';

	let { jobs } = $props();
</script>

<div class="prose text-center dark:prose-invert prose-h3:mb-0">
	<h3 class="">Work Experience</h3>
	<p class="not-prose mb-4 text-xxs text-foreground/50">Hover over a job to see more details.</p>
	<WorkExperienceCarousel {jobs} />
</div>
