import type { Component } from "svelte";

export type Job = {
		company: string;
		position: string;
		location: string;
		startDate: Date;
		endDate: Date | 'Present';
		description: string;
		href: string;
		logo: Component;
	};
