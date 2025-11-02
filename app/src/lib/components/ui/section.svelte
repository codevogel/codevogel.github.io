<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		class: className = '',
		baseClass = 'flex flex-col',
		onclick = () => {},
		role = '',
		thisElement = $bindable()
	}: {
		children: Snippet;
		class?: string;
		baseClass?: string;
		onclick?: (e: MouseEvent & { currentTarget: EventTarget & HTMLElement }) => void;
		role?: string;
		thisElement?: HTMLElement;
	} = $props();
</script>

<section class={`${className} ${baseClass}`} {onclick} {role} bind:this={thisElement}>
	{@render children()}
</section>
