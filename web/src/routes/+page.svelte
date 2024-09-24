<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	import Wrench from 'lucide-svelte/icons/wrench';
	import { fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Rustine" />
</svelte:head>

<section class="hero" in:fly>
	<h1 class="title">{data.global?.title}</h1>
	<p>{data.global?.description}</p>
	<button class="btn btn-primary">Get Started</button>
</section>

<section>
	<div class="grid">
		{#each [...Array(8).keys()] as _, i}
			<article in:fly|global={{ duration: 120, delay: i * 100 }}>
				<h3><Wrench /></h3>

				<h2>Tools</h2>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus
					tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices
					diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor,
					orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
					Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.
					Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum
					augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui
					ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
					posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum.
					Maecenas adipiscing ante non diam sodales hendrerit.
				</p>
				<p>
					<a href="/learn/tools">Navigate to tools</a>
				</p>
			</article>
		{/each}
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

	@media (min-width: 768px) {
		.grid {
			grid-template-columns: 1fr 1fr;
		}
	}

	.title {
		font-size: 3rem;
	}
</style>
