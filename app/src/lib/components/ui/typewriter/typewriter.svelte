<script lang="ts">
	/* eslint-disable svelte/no-navigation-without-resolve */
	import { onMount, tick } from 'svelte';
	import type { Message, MessageLine, MessageLineChunk } from './typewriter';

	let baseElement: HTMLDivElement | undefined = undefined;
	let cloneElement: HTMLDivElement | undefined = undefined;
	let heightStyle = $state('');
	let renderedLines = $state<MessageLine[]>([]);
	let cloneLines = $state<MessageLine[]>([]);

	onMount(() => {
		warnAboutShortGrowDelay();

		const resizeHandler = () => recalculateHeight();
		typeMessage();

		window.addEventListener('resize', resizeHandler);
		return () => window.removeEventListener('resize', resizeHandler);
	});

	$effect(() => {
		const numLines = renderedLines.length;
		const scrollHeight = baseElement?.scrollHeight ?? NaN;

		let height: string = '';
		if (isNaN(scrollHeight)) {
			height = `${numLines}lh`;
		} else {
			height = `${scrollHeight}px`;
		}
		heightStyle = `height: ${height}; transition: height ${growDelayMs}ms ease-in-out;`;
	});

	let {
		message,
		pregrow = false,
		baseStyle = 'display: flex; flex-direction: column; white-space: pre-line;',
		baseClass = '',
		defaultLineDelayMs = 100,
		defaultChunkDelayMs = 50,
		charDelayMs = 50,
		growDelayMs = 500
	}: {
		message: Message;
		pregrow?: boolean;
		baseStyle?: string;
		baseClass?: string;
		defaultLineDelayMs?: number;
		defaultChunkDelayMs?: number;
		charDelayMs?: number;
		growDelayMs?: number;
	} = $props();

	async function typeMessage() {
		if (pregrow) {
			const newHeight = await measureResultingHeightForMessage(message);
			heightStyle = `height: ${newHeight}px;`;
		}

		for (const line of message.lines) {
			// Create a reactive line object to hold the currently typed chunks
			const currentLine = $state({ chunks: [] as MessageLineChunk[], class: line.class });

			if (!pregrow) {
				// Instantly add content to invisible clone and measure it's height
				const newHeight = await measureHeightWithCloneForLine(line);
				// Now that we know the resulting height, animate the base element to that height
				heightStyle = `height: ${newHeight}px; transition: height ${growDelayMs}ms ease-in-out;`;
			}

			// Wait for the height animation to finish
			await delay(growDelayMs);

			// Now start typing the actual line
			renderedLines = [...renderedLines, currentLine];
			await typeLine(line, currentLine);

			// Wait this line's delay before starting the next line
			await delay(line.delay ?? defaultLineDelayMs);
		}
	}

	async function typeLine(line: MessageLine, currentLine: MessageLine) {
		for (const chunk of line.chunks) {
			// Create a reactive chunk object to hold the currently typed text
			const currentChunk = $state({
				text: '',
				class: chunk.class,
				style: chunk.style,
				href: chunk.href
			});
			currentLine.chunks = [...currentLine.chunks, currentChunk];
			await typeChunk(chunk, currentChunk);
			await delay(chunk.delay ?? defaultChunkDelayMs);
		}
	}

	async function typeChunk(chunk: MessageLineChunk, currentChunk: MessageLineChunk) {
		for (const char of chunk.text) {
			currentChunk.text += char;
			await delay(charDelayMs);
		}
	}

	function delay(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	async function measureHeightWithCloneForLine(line: MessageLine) {
		if (!cloneElement) {
			console.error('Clone element not found for height measurement.');
			return 0;
		}
		let chunks = line.chunks.map((chunk) => ({
			text: chunk.text,
			class: chunk.class,
			href: chunk.href,
			style: chunk.style
		}));
		cloneLines = [...cloneLines, { chunks: chunks, class: line.class, style: line.style }];
		await tick();
		return cloneElement.scrollHeight;
	}

	async function measureResultingHeightForMessage(message: Message) {
		let lines = message.lines.map((line) => ({
			chunks: line.chunks.map((chunk) => ({
				text: chunk.text,
				class: chunk.class,
				href: chunk.href,
				style: chunk.style
			})),
			class: line.class,
			style: line.style
		}));
		cloneLines = lines;
		await tick();
		return cloneElement?.scrollHeight ?? 0;
	}

	async function recalculateHeight() {
		if (!cloneElement) {
			console.error('Clone element not found for height recalculation.');
			return;
		}
		// Reset clone height to 0 to force recalculation of scrollHeight
		// If we don't do this, the scrollHeight stays at the maximum height it reached
		cloneElement.style.height = '0';
		await tick();

		const newHeight = cloneElement.scrollHeight;
		heightStyle = `height: ${newHeight}px; transition: height 100ms ease-in-out;`;
	}

	function warnAboutShortGrowDelay() {
		const minRecommended = 100;
		if (growDelayMs < minRecommended) {
			console.warn(
				`[TypeWriter]: growDelayMs is set to ${growDelayMs}ms, which may be too short for smooth height transitions, as the DOM might update too late, resulting in incorrect height measurements. Consider setting it to at least 100ms.`
			);
		}
	}
</script>

<div class="relative">
	<!-- Actual visible typewriter element -->
	<div
		class="{baseClass} {message.class ?? ''}"
		style="{baseStyle} {heightStyle} {message.style ?? ''}"
		bind:this={baseElement}
	>
		{#each renderedLines as line (line)}
			<span class={line.class ?? ''} style={line.style ?? ''}>
				{#each line.chunks as chunk (chunk)}
					{#if chunk.href != null}
						<a href={chunk.href} class={chunk.class ?? ''} style={chunk.style ?? ''}>{chunk.text}</a
						>
					{:else}
						<span class={chunk.class ?? ''} style={chunk.style ?? ''}>{chunk.text}</span>
					{/if}
				{/each}
			</span>
		{/each}
	</div>
	<!-- Invisible clone for measuring height -->
	<div
		class="{baseClass} {message.class ?? ''}"
		style="{baseStyle} {heightStyle} {message.style ??
			''} position: absolute; top: 0; left: 0; visibility: hidden;"
		bind:this={cloneElement}
	>
		{#each cloneLines as line (line)}
			<span class={line.class ?? ''} style={line.style ?? ''}>
				{#each line.chunks as chunk (chunk)}
					{#if chunk.href != null}
						<a href={chunk.href} class={chunk.class ?? ''} style={chunk.style ?? ''}>{chunk.text}</a
						>
					{:else}
						<span class={chunk.class ?? ''} style={chunk.style ?? ''}>{chunk.text}</span>
					{/if}
				{/each}
			</span>
		{/each}
	</div>
</div>
