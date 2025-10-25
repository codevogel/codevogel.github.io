<script lang="ts">
	import { scrollToTopOfContainer } from '$lib/common/scroll';
	import Button from '$lib/components/shadcn-svelte/ui/button/button.svelte';
	import { ChevronsUp } from 'lucide-svelte';

	let { scrollContainer, targetContainer } = $props();
</script>

<Button variant="outline" class="flex flex-col" onclick={() => scrollToTopOfContainer(scrollContainer, targetContainer)}>
	<span>
		<ChevronsUp />
	</span>
</Button>
