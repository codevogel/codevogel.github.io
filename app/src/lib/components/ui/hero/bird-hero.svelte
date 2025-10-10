<script lang="ts">
	import type { Message } from '$lib/components/ui/typewriter/typewriter';
	import Typewriter from '$lib/components/ui/typewriter/typewriter.svelte';

	const message: Message = {
		lines: [
			{
				chunks: [{ text: 'Hi!' }],
				class: 'text-3xl font-bold'
			},
			{
				chunks: [
					{ text: 'My name is ' },
					{ text: 'codevogel', class: 'font-bold text-primary' },
					{ text: '.' }
				]
			},
			{
				chunks: [
					{ text: 'I make ' },
					{ text: 'games', class: 'text-primary' },
					{ text: ' and build ' },
					{ text: 'software', class: 'text-primary' },
					{ text: '.' }
				]
			},
			{
				chunks: [
					{ text: 'Check out some of my ' },
					{ text: 'projects', class: 'text-primary underline', href: '/projects' },
					{ text: ' and ' },
					{ text: 'tools', class: 'text-primary underline', href: '/tools' },
					{ text: '.' }
				]
			}
		]
	};
</script>

<div class="grid h-72 grid-cols-1 place-content-end justify-items-center">
	<Typewriter
		{message}
		baseClass="max-w-[28ch] w-[28ch] bg-accent rounded-lg p-4"
		pregrow={false}
	/>
	<div
		class="h-0 w-0 border-t-[15px] border-r-[15px] border-l-[15px] border-accent border-r-transparent border-l-transparent"
	></div>
	<img src="logos/logo-codevogel-head.svg" class="mt-4 w-24" alt="codevogel logo head" />
</div>
