<script lang="ts">
	import type { Message } from '$lib/components/ui/header/typewriter/typewriter';
	import Typewriter from '$lib/components/ui/header/typewriter/typewriter.svelte';

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

<Typewriter {message} baseClass="" pregrow={false} />
