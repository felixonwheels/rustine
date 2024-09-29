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
	<!-- <h1>{data.global?.title}</h1> -->
	<!-- <p>{data.global?.description}</p> -->

	<div class="hero-container">
		<div class="hero-title">
			<h1>break something. <mark>repair your bike.</mark> ride. repeat.</h1>
		</div>

		<div class="hero-text">
			<p>your goto location for all things bike mechanics, bike repair, and bike in general.</p>

			<p>
				navigate through the many resources to learn more about that incredible machine, or use the
				diagnosis tool to know how to fix your bike.
			</p>
		</div>

		<div class="grid hero-buttons">
			<a class="contrast" href="/learn" role="button">learn about your bike</a>
			<a href="/fix" role="button">fix your bike!</a>
		</div>
	</div>
</section>

<section>
	<div class="grid cards">
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
		margin-top: calc(var(--pico-spacing) * 2);
		margin-bottom: calc(var(--pico-spacing) * 4);

		align-items: center;
	}

	.hero-text {
		text-align: start;
	}

	.hero-container {
		display: flex;
		flex-direction: column;
		gap: var(--pico-spacing);
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

		.hero-text {
			text-align: center;
		}
	}

	@media (max-width: 1280px) {
		.cards {
			grid-template-columns: 1fr;
		}
	}

	.hero-title h1 {
		font-family: 'Roboto', sans-serif;
		font-size: 4rem;
		font-style: italic;
		font-weight: 900;
		text-align: center;
	}

	mark {
		background: linear-gradient(to right, var(--pico-primary), var(--pico-color-pumpkin-300));
		background-clip: text;
		color: transparent;
	}
</style>
