<script lang="ts">
	import { scrollToTopOfContainer } from '$lib/utils/scroll';
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
	class="transition-std flex flex-col rounded-lg border-1 border-zinc-700 bg-accent/40 p-3 hover:cursor-pointer hover:border-zinc-500 hover:bg-accent hover:text-primary"
	onclick={() => scrollToTop()}
>
	<span>
		<ChevronsUp />
	</span>
</button>
