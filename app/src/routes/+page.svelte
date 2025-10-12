<script lang="ts">
	import FindMeOn from '$lib/components/ui/find-me-on.svelte';
	import BirdHero from '$lib/components/ui/hero/bird-hero.svelte';
	import NameBreakdown from '$lib/components/ui/hero/name-breakdown.svelte';
	import Skills from '$lib/components/ui/skills.svelte';
	import WorkExperience from '$lib/components/ui/work-experience.svelte';
</script>

<div>
	<BirdHero />
</div>
<div class="gap-y-8">
	<NameBreakdown />
	<FindMeOn />
</div>
<div>
	<WorkExperience />
</div>
<div>
	<Skills />
</div>
