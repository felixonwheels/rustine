<script lang="ts">
	import type { PageData } from './$types';
	import { fly } from 'svelte/transition';

	export let data: PageData;

	import * as m from '$lib/paraglide/messages.js';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<h1 in:fly>{m.about()}</h1>

<article>
	{@html data.about?.text}
</article>
