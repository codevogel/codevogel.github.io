<script lang="ts">
	import { Volume2 } from 'lucide-svelte';

	let genderSoundNL: 'm' | 'f' = $state('f');
	let genderSoundUK: 'm' | 'f' = $state('m');

	const audioNLMale = '/sounds/codevogel-nl-m.mp3';
	const audioNLFemale = '/sounds/codevogel-nl-f.mp3';
	const audioENMale = '/sounds/codevogel-en-m.mp3';
	const audioENFemale = '/sounds/codevogel-en-f.mp3';

	function playSound(locale: 'nl' | 'en') {
		switch (locale) {
			case 'nl':
				new Audio(genderSoundNL === 'm' ? audioNLMale : audioNLFemale).play();
				genderSoundNL = genderSoundNL === 'm' ? 'f' : 'm';
				break;
			case 'en':
				new Audio(genderSoundUK === 'm' ? audioENMale : audioENFemale).play();
				genderSoundUK = genderSoundUK === 'm' ? 'f' : 'm';
				break;
		}
	}
</script>

<div
	class="mx-auto flex flex-col items-center justify-center rounded-xl border-[.1px] border-accent p-4 text-center md:p-8 md:text-xl"
>
	<span class="flex flex-col gap-x-4">
		<span class="flex flex-col font-serif italic">/ˈkoːdəˌvoːɣəl/</span>
	</span>
	<p>A bird that enjoys programming.</p>
	<span class="mt-2 flex flex-row gap-x-4">
		<button onclick={() => playSound('nl')} class="flex flex-row gap-x-1">
			<Volume2 class="stroke-foreground/50 hover:stroke-foreground" />
			<span> 🇳🇱</span>
		</button>
		<button onclick={() => playSound('en')} class="flex flex-row gap-x-1">
			<Volume2 class="stroke-foreground/50 hover:stroke-foreground" />
			<span> 🇬🇧 </span>
		</button>
	</span>
</div>
