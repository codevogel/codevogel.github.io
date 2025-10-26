<script lang="ts">
	import { scrollToTopOfContainer } from '$lib/common/scroll';
	import Button from '$lib/components/shadcn-svelte/ui/button/button.svelte';
	import { getContentContainerContext, getScrollContainerContext } from '$lib/context';
	import { ChevronsUp } from 'lucide-svelte';

	let scrollContainerContext = getScrollContainerContext();
	let contentContainerContext = getContentContainerContext();
	
	function scrollToTop() {
		const scrollContainer = scrollContainerContext();
		if (!scrollContainer) {
			console.warn('Scroll container not found in context.');
			return;
		}

		const contentContainer = contentContainerContext();
		if (!contentContainer) {
			console.warn('Content container not found in context.');
			return;
		}
		if (scrollContainer && contentContainer) {
			scrollToTopOfContainer(scrollContainer, contentContainer);
		}
	}
</script>

<Button variant="outline" class="flex flex-col" onclick={() => scrollToTop()}>
	<span>
		<ChevronsUp />
	</span>
</Button>
