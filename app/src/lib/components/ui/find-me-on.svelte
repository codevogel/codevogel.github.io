<script lang="ts">
	import LogoLinkedin from './logo/svg/logo-linkedin.svelte';
	import SvgLogo from './logo/svg-logo.svelte';
	import LogoGithub from './logo/svg/logo-github.svelte';
	import LogoYoutube from './logo/svg/logo-youtube.svelte';
</script>

<div class="prose text-center dark:prose-invert">
	<h3>Find me on</h3>
	<div class="flex flex-row justify-center gap-x-8">
		<a href="https://github.com/codevogel/">
			<SvgLogo scale={0.5}>
				<LogoGithub />
			</SvgLogo>
		</a>
		<a href="https://www.linkedin.com/in/kamiel-de-visser/">
			<SvgLogo scale={0.5}>
				<LogoLinkedin />
			</SvgLogo>
		</a>
		<a href="https://www.youtube.com/@codevogel_yt">
			<SvgLogo scale={0.5}>
				<LogoYoutube />
			</SvgLogo>
		</a>
	</div>
</div>
