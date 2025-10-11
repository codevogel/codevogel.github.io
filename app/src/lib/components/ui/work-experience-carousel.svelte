<script lang="ts">
	import * as Carousel from '$lib/components/shadcn-svelte/ui/carousel/index.js';
	import JobCard from './job-card.svelte';
	import type { Job } from './job';
	import LogoSuperprof from './logo/svg/logo-superprof.svelte';
	import LogoGluSquare from './logo/svg/logo-glu-square.svelte';

	const jobs: Job[] = [
		{
			company: 'GLU',
			position: 'Educator Creative\nSoftware Engineering',
			location: 'Utrecht, NL',
			startDate: new Date('2024-04-01'),
			endDate: 'Present',
			description:
				'I develop and teach a curriculum in creative software development, emphasizing Game, XR, and Web technologies used in modern studios.',
			href: 'https://www.glu.nl/',
			logo: LogoGluSquare
		},
		{
			company: 'Superprof',
			position: 'Self-employed Tutor',
			location: 'Amsterdam, NL',
			startDate: new Date('2021-09-01'),
			endDate: 'Present',
			description:
				'I provide personalized tutoring in game development to students of various ages and educational levels.',
			href: 'https://www.super-prof.nl/s/programmeren,Amsterdam,52.3675734,4.9041389,1,1018954.html',
			logo: LogoSuperprof
		}
	];

	const currentJobs = $derived(jobs.filter((job) => job.endDate === 'Present'));
</script>

<div class="not-prose px-14">
	<Carousel.Root>
		<Carousel.Content>
			<Carousel.Item class="">
				<h4>Current Jobs</h4>
				<div class="flex flex-col gap-y-4">
					{#each currentJobs as job, i (i)}
						<JobCard {job} />
					{/each}
				</div>
			</Carousel.Item>
			<Carousel.Item class="">
				<h4>Past Jobs</h4>
				<div class="flex flex-col gap-y-4">
					{#each currentJobs as job, i (i)}
						<JobCard {job} />
					{/each}
				</div>
			</Carousel.Item>
		</Carousel.Content>
		<Carousel.Previous />
		<Carousel.Next />
	</Carousel.Root>
</div>
