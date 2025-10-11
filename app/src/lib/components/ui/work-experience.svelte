<script lang="ts">
	import type { Component } from 'svelte';
	import LogoGLU from './logo/logo-glu.svelte';
	import { MapPin } from 'lucide-svelte';

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

<div class="prose flex flex-col items-center dark:prose-invert prose-h3:mb-0">
	<h3 class="">Work Experience</h3>
	<p class="not-prose text-xxs text-foreground/50">Hover over a job to see more details.</p>
	<h4>Current Jobs</h4>
	{#each currentJobs as job, i (i)}
		<div
			class="not-prose flex w-full flex-row items-center justify-between ps-2 pe-6 text-xs *:min-h-20"
		>
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
			<a href={job.href} class="flex">
				<job.logo scale={logoScale} className="hover:fill-primary" />
			</a>
			<div class="max-w-36 grow hover:[&>:first-child]:hidden hover:[&>:last-child]:flex">
				<div class="flex flex-col">
					<p class="font-bold whitespace-pre-line text-primary">{job.position}</p>
					<span class="flex flex-row items-end gap-x-2 text-xxs"
						><MapPin size={14} class="stroke-primary" /> {job.location}</span
					>
				</div>
				<div class="hidden flex-col text-xxs text-foreground/50">
					<p class="whitespace-pre-line">{job.description}</p>
				</div>
			</div>
			<div class="flex flex-col text-center text-foreground/50">
				<span>{job.startDate.toLocaleDateString()}</span>
				<span>-</span>
				<span>{job.endDate === 'Present' ? job.endDate : job.endDate.toLocaleDateString()}</span>
			</div>
		</div>
	{/each}
</div>
