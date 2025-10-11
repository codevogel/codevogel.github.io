<script lang="ts">
	import type { Component } from 'svelte';
	import LogoGLU from './logo/logo-glu.svelte';
	import WorkExperienceCarousel from '$lib/components/ui/work-experience-carousel.svelte'; 

	type Job = {
		company: string;
		position: string;
		location: string;
		startDate: Date;
		endDate: Date | 'Present';
		description: string;
		href: string;
		logo: Component;
	};

	const logoScale = 0.5;

	const jobs: Job[] = [
		{
			company: 'GLU',
			position: 'Educator Creative\nSoftware Engineering',
			location: 'Utrecht, NL',
			startDate: new Date('2023-08-01'),
			endDate: 'Present',
			description: 'Working on various projects including web applications and internal tools.',
			href: 'https://www.glu.nl/',
			logo: LogoGLU
		},
		{
			company: 'GLU',
			position: 'Educator Creative\nSoftware Engineering',
			location: 'Utrecht, NL',
			startDate: new Date('2023-08-01'),
			endDate: 'Present',
			description: 'Working on various projects including web applications and internal tools.',
			href: 'https://www.glu.nl/',
			logo: LogoGLU
		}
	];

	const currentJobs = $derived(jobs.filter((job) => job.endDate === 'Present'));
</script>

<div class="prose dark:prose-invert prose-h3:mb-0 text-center">
	<h3 class="">Work Experience</h3>
	<p class="not-prose text-xxs text-foreground/50">Hover over a job to see more details.</p>
	<WorkExperienceCarousel/>
</div>
