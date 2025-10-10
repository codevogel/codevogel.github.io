<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';

	const homeURL = resolve('/');
</script>

<button on:click={() => goto(homeURL)} class="min-h-24 cursor-pointer">
	<img
		src="/logos/logo-codevogel-text.svg"
		alt="Codevogel Logo"
		class="max-w-sm px-2 transition-all hover:px-1"
	/>
</button>
