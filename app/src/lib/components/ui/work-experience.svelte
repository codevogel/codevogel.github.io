<script lang="ts">
	import WorkExperienceCarousel from '$lib/components/ui/work-experience-carousel.svelte';

	let { jobs } = $props();
</script>

<div class="mb-4 text-center">
	<h3 class="text-3xl font-bold">Work Experience</h3>
	<p class="subscript">Hover over a job to see more details.</p>
</div>
<WorkExperienceCarousel {jobs} />
