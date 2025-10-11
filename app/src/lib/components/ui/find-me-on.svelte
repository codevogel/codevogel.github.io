<script lang="ts">
	import LogoGithub from '$lib/components/ui/logo/logo-github.svelte';
	import LogoLinkedin from '$lib/components/ui/logo/logo-linkedin.svelte';
	import LogoYoutube from '$lib/components/ui/logo/logo-youtube.svelte';



</script>

<div class="prose dark:prose-invert text-center">
	<h3>Find me on</h3>
	<div class="flex flex-row justify-center gap-x-8">
		<a href="https://github.com/codevogel/"><LogoGithub scale={.5}/></a>
		<a href="https://www.linkedin.com/in/kamiel-de-visser/"><LogoLinkedin scale={.5}/></a>
		<a href="https://www.youtube.com/@codevogel_yt"><LogoYoutube scale={.5}/></a>
	</div>
</div>
