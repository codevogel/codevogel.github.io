<script lang="ts">
	import { scrollToTopOfContainer } from '$lib/common/scroll';
	import { getHeaderContainerContext, getScrollContainerContext } from '$lib/context';
	import { ChevronsUp } from 'lucide-svelte';

	let scrollContainerContext = getScrollContainerContext();
	let headerContainerContext = getHeaderContainerContext();

	function scrollToTop() {
		const scrollContainer = scrollContainerContext();
		if (!scrollContainer) {
			console.warn('Scroll container not found in context.');
			return;
		}

		const contentContainer = headerContainerContext();
		if (!contentContainer) {
			console.warn('Content container not found in context.');
			return;
		}
		if (scrollContainer && contentContainer) {
			scrollToTopOfContainer(scrollContainer, contentContainer);
		}
	}
</script>

<button
	class="flex flex-col border-1 border-foreground/25 bg-background rounded-lg p-3 text-primary hover:border-white"
	onclick={() => scrollToTop()}
>
	<span>
		<ChevronsUp />
	</span>
</button>
