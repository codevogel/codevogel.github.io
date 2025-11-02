<script lang="ts">
	import { Volume2 } from 'lucide-svelte';

	function playSound() {
		const audio = new Audio('/sounds/codevogel.mp3');
		audio.play();
	}
</script>

<div class="mx-auto rounded-xl border-[.1px] border-accent p-4 text-center md:p-8 md:text-xl">
	<p>
		<span class="flex flex-row justify-center gap-x-4">
			<span class="font-serif italic">/ˈkoːdəˌvoːɣəl/</span>
			<button on:click={playSound}
				><Volume2 class="stroke-foreground/50 hover:stroke-foreground" /></button
			></span
		>
		A bird that enjoys programming.
	</p>
</div>
