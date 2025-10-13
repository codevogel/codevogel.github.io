<script lang="ts">
	import { MapPin } from 'lucide-svelte';
	import ClipSvg from './logo/clip-svg.svelte';
	import type { Job } from '$lib/server/data/jobs';

	let { job }: { job: Job } = $props();

</script>

<div class="inline-flex h-16 items-center gap-x-4 text-start text-xs mx-4 px-4 py-10 rounded-xl ">
	<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
	<a href={job.href}>
		<ClipSvg path={job.logoPath} scale={.5} />
	</a>
	<div class="hover:[&>:first-child]:hidden hover:[&>:nth-child(2)]:hidden hover:[&>:last-child]:block flex flex-row w-full ">
		<div class="flex flex-col gap-y-1 grow">
			<span class="font-bold whitespace-pre-line text-primary">{job.position}</span>
			<span class="flex flex-row items-end"
				><MapPin size={14} class="stroke-primary" /> {job.location}</span
			>
		</div>
		<div class="flex flex-col text-center">
			<span>{job.startDate.toLocaleDateString()}</span>
			<span>-</span>
			<span>{job.endDate === 'Present' ? job.endDate : job.endDate.toLocaleDateString()}</span>
		</div>
		<div class="hidden whitespace-pre-line">
			<p>{job.description}</p>
		</div>
	</div>
</div>
