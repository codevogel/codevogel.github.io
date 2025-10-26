<script lang="ts">
	import { scrollToTopOfContainer } from '$lib/common/scroll';
	import Button from '$lib/components/shadcn-svelte/ui/button/button.svelte';
	import { ChevronsUp } from 'lucide-svelte';
	import { getContext, onMount } from 'svelte';

	let scrollContainer: HTMLElement;
	let targetContainer: HTMLElement;

	onMount(() => {
		scrollContainer = getContext('scrollContainer');
		targetContainer = getContext('contentContainer');
	});
</script>

<Button variant="outline" class="flex flex-col" onclick={() => scrollToTopOfContainer(scrollContainer, targetContainer)}>
	<span>
		<ChevronsUp />
	</span>
</Button>
