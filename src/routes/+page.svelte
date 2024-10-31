<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as m from '$lib/paraglide/messages.js';
	import { BookOpenText, CircleHelp, Wrench } from 'lucide-svelte';
	import { fly } from 'svelte/transition';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{m.home()}</title>
	<meta content="Rustine" name="description" />
</svelte:head>

<section class="hero" in:fly>
	<div class="hero-container">
		<div class="hero-title">
			{@html data.global?.title}
		</div>

		<div class="hero-description">
			{@html data.global?.description}
		</div>

		<div class="hero-buttons grid">
			<Button href="/learn">learn about your bike</Button>
			<Button href="/fix">fix your bike!</Button>
		</div>
	</div>
</section>

<section>
	<div class="cards grid">
		<article in:fly={{ duration: 120 }}>
			<h1><BookOpenText color="var(--pico-primary)" size={28} /></h1>
			<h2>{m.learn()}</h2>
			<p>learn about your bike, its components and how they all work together</p>
			<p><a href="/learn">learn more</a></p>
		</article>

		<article in:fly={{ duration: 120 }}>
			<h1><Wrench color="var(--pico-primary)" size={28} /></h1>
			<h2>{m.fix()}</h2>
			<p>diagnose an issue on your bike, and learn how to fix it</p>
			<p><a href="/fix">fix my bike</a></p>
		</article>

		<article in:fly={{ duration: 120 }}>
			<h1><CircleHelp color="var(--pico-primary)" size={28} /></h1>
			<h2>{m.about()}</h2>
			<p>read about what this project is and why it came to be</p>
			<p><a href="/about">what even is this?</a></p>
		</article>
	</div>
</section>

<style>
	.hero {
		display: flex;
		flex-direction: column;
		padding-top: calc(var(--pico-spacing) * 2);
		padding-bottom: calc(var(--pico-spacing) * 4);
		align-items: center;
	}

	.hero-description {
		text-align: start;
	}

	.hero-container {
		display: flex;
		flex-direction: column;
		gap: var(--pico-spacing);
	}

	.hero-title :global(h1) {
		font-family: 'Roboto', sans-serif;
		font-size: 4rem;
		font-style: italic;
		font-weight: 900;
		text-align: center;
	}

	section :global(mark) {
		background: linear-gradient(
			to right,
			theme('colors.rustine-orange'),
			theme('colors.rustine-indigo')
		);
		background-clip: text;
		color: transparent;
	}

	@media (min-width: 576px) {
		.hero-container {
			max-width: 60vw;
			gap: calc(var(--pico-spacing) * 2.5);
		}

		.hero-buttons {
			display: flex;
			justify-content: center;
		}

		.hero-description {
			text-align: center;
		}
	}

	@media (max-width: 1280px) {
		.cards {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 576px) {
		.hero-title :global(h1) {
			font-size: 3rem;
		}
	}
</style>
