<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import { BookOpenText, CircleHelp, Wrench } from 'lucide-svelte';
	import { fly } from 'svelte/transition';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Rustine" />
</svelte:head>

<section class="hero" in:fly>
	<h1>{data.global?.title}</h1>
	<p>{data.global?.description}</p>
</section>

<section>
	<div class="container grid">
		<article in:fly={{ duration: 120 }}>
			<h2><BookOpenText size={28} /> {m.learn()}</h2>
			<p>learn about your bike, its components and how they all work together</p>
			<p><a href="/learn" role="button">learn more</a></p>
		</article>

		<article in:fly={{ duration: 120 }}>
			<h2><Wrench size={28} /> {m.fix()}</h2>
			<p>diagnose an issue on your bike, and learn how to fix it</p>
			<p><a href="/fix" role="button">fix my bike</a></p>
		</article>

		<article in:fly={{ duration: 120 }}>
			<h2><CircleHelp size={28} /> {m.about()}</h2>
			<p>read about what this project is and why it came to be</p>
			<p><a href="/about" role="button">what even is this?</a></p>
		</article>
	</div>
</section>

<style>
	.hero {
		display: grid;
		grid-template-columns: 1fr;
		-moz-column-gap: calc(var(--pico-spacing) * 6);
		column-gap: calc(var(--pico-spacing) * 6);
		row-gap: calc((var(--pico-spacing) * 6) / 2);
		justify-items: center;
		margin-top: calc(var(--pico-spacing) * 6);
		margin-bottom: calc(var(--pico-spacing) * 6);
	}

	@media (max-width: 1280px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}

	section > h1 {
		font-size: 4rem;
		font-style: italic;
		font-weight: 900;
	}

	section > p {
		text-align: center;
	}
</style>
