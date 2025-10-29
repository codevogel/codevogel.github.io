<script lang="ts">
	import FindMeOn from '$lib/components/ui/find-me-on.svelte';
	import BirdHero from '$lib/components/ui/hero/bird-hero.svelte';
	import NameBreakdown from '$lib/components/ui/hero/name-breakdown.svelte';
	import Section from '$lib/components/ui/section.svelte';
	import Skills from '$lib/components/ui/skills.svelte';
	import WorkExperience from '$lib/components/ui/work-experience.svelte';

	let { data } = $props();
	const skillGroups = $derived(data.skillGroups);
	const jobs = $derived(data.jobs);
</script>

<Section class="justify-center">
	<BirdHero />
</Section>
<Section class="justify-center gap-y-24">
	<NameBreakdown />
	<FindMeOn />
</Section>
<Section class="justify-center p-4">
	<WorkExperience {jobs} />
</Section>
<Section class="justify-center">
	<Skills {skillGroups} />
</Section>
