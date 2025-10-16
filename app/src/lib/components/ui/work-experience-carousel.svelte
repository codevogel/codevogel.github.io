<script lang="ts">
	import * as Carousel from '$lib/components/shadcn-svelte/ui/carousel/index.js';
	import JobCard from './job-card.svelte';
	import { type CarouselAPI } from '$lib/components/shadcn-svelte/ui/carousel/context';
	import Button from '../shadcn-svelte/ui/button/button.svelte';
	import type { Job } from '$lib/server/data/jobs';

	let api = $state<CarouselAPI>();
	let viewingCurrent = $state(true);

	let carouselButtonText = $derived(viewingCurrent ? 'View Past Jobs' : 'View Current Jobs');

	let { jobs }: { jobs: Job[] } = $props();

	const currentJobs = $derived(
		jobs
			.filter((job) => job.endDate === 'Present')
			.sort((a, b) => b.startDate.getTime() - a.startDate.getTime())
	);
	const pastJobs = $derived(
		jobs
			.filter((job) => job.endDate !== 'Present')
			.sort((a, b) => b.startDate.getTime() - a.startDate.getTime())
	);
</script>

<div class="flex flex-col justify-center text-center gap-y-8">
	<Carousel.Root opts={{ loop: true }} setApi={(emblaAPI) => (api = emblaAPI)}>
		<Carousel.Content>
			<Carousel.Item class="flex flex-col justify-start gap-y-2">
				<h2>Current Jobs</h2>
				<div class="flex flex-col gap-y-2">
					{#each currentJobs as job, i (i)}
						<JobCard {job} />
					{/each}
				</div>
			</Carousel.Item>
			<Carousel.Item class="flex flex-col justify-center gap-y-2">
				<h2>Past Jobs</h2>
				<div class="flex flex-col gap-y-2">
					{#each pastJobs as job, i (i)}
						<JobCard {job} />
					{/each}
				</div>
			</Carousel.Item>
		</Carousel.Content>
	</Carousel.Root>
	<Button
		onclick={() => {
			api?.scrollNext();
			viewingCurrent = !viewingCurrent;
		}}
		variant="outline"
		class="mt-2 max-w-32 place-self-center">{carouselButtonText}</Button
	>
</div>
