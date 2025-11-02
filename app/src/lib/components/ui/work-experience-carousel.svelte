<script lang="ts">
	import * as Carousel from '$lib/components/shadcn-svelte/ui/carousel/index.js';
	import JobCard from '$lib/components/ui/job-card.svelte';
	import { type CarouselAPI } from '$lib/components/shadcn-svelte/ui/carousel/context';
	import { Button } from '$lib/components/shadcn-svelte/ui/button';
	import type { Job } from '$lib/assets/data/jobs';
	import { DotIcon } from 'lucide-svelte';

	let api = $state<CarouselAPI>();
	let current = $state(0);
	const count = $derived(api ? api.scrollSnapList().length : 0);

	$effect(() => {
		if (api) {
			current = api.selectedScrollSnap();
			api.on('select', () => {
				current = api!.selectedScrollSnap();
			});
		}
	});

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

<div class="flex flex-col justify-center gap-y-8 text-center">
	<Carousel.Root opts={{ loop: true }} setApi={(emblaAPI) => (api = emblaAPI)}>
		<Carousel.Content class="">
			<Carousel.Item class="flex flex-col gap-y-2">
				<h2>Current Jobs</h2>
				<div class="flex flex-col items-center gap-y-2">
					{#each currentJobs as job, i (i)}
						<JobCard {job} />
					{/each}
				</div>
			</Carousel.Item>
			<Carousel.Item class="flex flex-col items-center gap-y-2">
				<h2>Past Jobs</h2>
				<div class="flex flex-col gap-y-2">
					{#each pastJobs as job, i (i)}
						<JobCard {job} />
					{/each}
				</div>
			</Carousel.Item>
		</Carousel.Content>
	</Carousel.Root>

	<div class="flex flex-row justify-center">
		<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
		{#each Array(count) as _, i (i)}
			<DotIcon
				onclick={() => api?.scrollTo(i)}
				class={i !== current ? 'text-accent' : ''}
				size={36}
			/>
		{/each}
	</div>
</div>
