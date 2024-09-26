<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import { fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>fix</title>
	<meta content="fix your bike" name="description" />
</svelte:head>

<h1 in:fly>{m.fix()}</h1>

<div class="grid">
	<article>fixxxxx</article>
</div>
