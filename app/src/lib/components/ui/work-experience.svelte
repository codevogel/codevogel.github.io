<script lang="ts">
	import WorkExperienceCarousel from '$lib/components/ui/work-experience-carousel.svelte';

	let { jobs } = $props();
</script>

<div class="mb-4 text-center md:mb-12">
	<h3 class="text-3xl font-bold md:mb-4">Work Experience</h3>
	<p class="subscript mt-4">Click on a job to see more details, or swipe to view past jobs</p>
</div>
<WorkExperienceCarousel {jobs} />
