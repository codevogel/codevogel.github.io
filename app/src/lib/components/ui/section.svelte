<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		class: className,
		baseClass = 'flex flex-col',
		onclick = () => {},
		role = ''
	}: {
		children: Snippet;
		class?: string;
		baseClass?: string;
		onclick?: (e: MouseEvent & { currentTarget: EventTarget & HTMLElement }) => void;
		role?: string;
	} = $props();
</script>

<section class={`${className} ${baseClass}`} {onclick} {role}>
	{@render children()}
</section>
