<script lang="ts">
	import { MapPin } from 'lucide-svelte';
	import ClipSvg from '$lib/components/ui/logo/clip-svg.svelte';
	import type { Job } from '$lib/assets/data/jobs';

	let { job }: { job: Job } = $props();

	let showDescription = $state(false);
</script>

<div
	class="transition-std inline-flex h-24 max-w-xs min-w-xs items-center gap-x-4 rounded-xl p-4 text-start text-xs hover:bg-accent md:max-w-lg md:min-w-lg md:gap-x-8 md:p-8 md:text-sm"
	onclick={() => (showDescription = !showDescription)}
	role="none"
>
	<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
	<a href={job.href} class="md:scale-150">
		<ClipSvg path={job.logoPath} scale={0.5} />
	</a>
	<div class="flex w-full flex-row">
		{#if !showDescription}
			<div class="flex grow flex-col gap-y-1">
				<span class="font-bold whitespace-pre-line text-primary">{job.position}</span>
				<span class="flex flex-row items-end"
					><MapPin size={14} class="stroke-primary" /> {job.location}</span
				>
			</div>
			<div class="flex flex-col text-center">
				<span>{job.startDate.toLocaleDateString()}</span>
				<span>-</span>
				<span>{job.endDate === 'Present' ? job.endDate : job.endDate.toLocaleDateString()}</span
				>
			</div>
		{:else}
			<div class="whitespace-pre-line">
				<p>{job.description}</p>
			</div>
		{/if}
	</div>
</div>
