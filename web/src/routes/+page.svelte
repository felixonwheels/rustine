<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import { BookOpenText, CircleHelp, Wrench } from 'lucide-svelte';
	import { fly } from 'svelte/transition';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Home</title>
	<meta content="Rustine" name="description" />
</svelte:head>

<section class="hero" in:fly>
	<h1>{data.global?.title}</h1>
	<p>{data.global?.description}</p>
	<div class="grid hero-buttons">
		<a href="/fix" role="button">fix your bike!</a>
		<a class="contrast" href="/learn" role="button">learn about your bike</a>
	</div>
</section>

<section>
	<div class="grid cards">
		<article in:fly={{ duration: 120 }}>
			<h2><BookOpenText size={28} /> {m.learn()}</h2>
			<p>learn about your bike, its components and how they all work together</p>
			<p><a class="secondary" href="/learn" role="button">learn more</a></p>
		</article>

		<article in:fly={{ duration: 120 }}>
			<h2><Wrench size={28} /> {m.fix()}</h2>
			<p>diagnose an issue on your bike, and learn how to fix it</p>
			<p><a class="secondary" href="/fix" role="button">fix my bike</a></p>
		</article>

		<article in:fly={{ duration: 120 }}>
			<h2><CircleHelp size={28} /> {m.about()}</h2>
			<p>read about what this project is and why it came to be</p>
			<p><a class="secondary" href="/about" role="button">what even is this?</a></p>
		</article>
	</div>
</section>

<style>
	.hero {
		display: flex;
		flex-direction: column;
		margin-top: calc(var(--pico-spacing) * 1);
		margin-bottom: calc(var(--pico-spacing) * 3);
		row-gap: calc(var(--pico-spacing) * 1.5);
	}

	@media (min-width: 576px) {
		.hero-buttons {
			display: flex;
			justify-content: center;
		}

		.hero {
			display: grid;
			grid-template-columns: 1fr;
			-moz-column-gap: calc(var(--pico-spacing) * 6);
			column-gap: calc(var(--pico-spacing) * 6);
			row-gap: calc(var(--pico-spacing) * 3);
			justify-items: center;
			margin-top: calc(var(--pico-spacing) * 6);
			margin-bottom: calc(var(--pico-spacing) * 6);
		}
	}

	@media (max-width: 1280px) {
		.cards {
			grid-template-columns: 1fr;
		}
	}

	section > h1 {
		font-size: 4rem;
		font-style: italic;
		font-weight: 900;
		text-align: center;
	}

	section > p {
		text-align: center;
	}

	section article {
		border: 1px solid var(--pico-primary-background);
	}
</style>
