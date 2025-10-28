<script lang="ts">
	import FindMeOn from '$lib/components/ui/find-me-on.svelte';
	import BirdHero from '$lib/components/ui/hero/bird-hero.svelte';
	import NameBreakdown from '$lib/components/ui/hero/name-breakdown.svelte';
	import Skills from '$lib/components/ui/skills.svelte';
	import WorkExperience from '$lib/components/ui/work-experience.svelte';

	let { data } = $props();
	const skillGroups = $derived(data.skillGroups);
	const jobs = $derived(data.jobs);
</script>

<section class="flex flex-col justify-center">
	<BirdHero />
</section>
<section class="flex flex-col justify-center gap-y-24">
	<NameBreakdown />
	<FindMeOn />
</section>
<section class="flex flex-col justify-center p-4">
	<WorkExperience {jobs} />
</section>
<section class="flex flex-col justify-center">
	<Skills {skillGroups} />
</section>
