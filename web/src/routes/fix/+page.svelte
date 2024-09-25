<script>
	import * as m from '$lib/paraglide/messages.js';
	import { fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>fix</title>
	<meta name="description" content="fix your bike" />
</svelte:head>

<div class="container">
	<h1 in:fly>{m.fix()}</h1>

	<div class="grid">
		<article>fixxxxx</article>
	</div>
</div>
