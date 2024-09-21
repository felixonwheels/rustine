<script>
	import { fly } from 'svelte/transition';

	import * as m from '$lib/paraglide/messages.js';
</script>

<svelte:head>
	<title>learn</title>
	<meta name="description" content="learn about bike maintenance" />
</svelte:head>

<h1 in:fly>{m.learn()}</h1>

{#each [...Array(100).keys()] as _, i}
	<article in:fly|global={{ duration: 120, delay: i * 100 }}>
		<h5 class="card-title">Tools</h5>
		<p class="card-text">
			Some quick example text to build on the card title and make up the bulk of the card's content.
		</p>
		<a href="/learn/tools" class="btn btn-primary stretched-link">Visit tools</a>
	</article>
{/each}
