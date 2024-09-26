<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import { fly } from 'svelte/transition';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>About</title>
	<meta content="About this app" name="description" />
</svelte:head>

<h1 in:fly>{m.about()}</h1>

<article>
	<!-- {@html data.about?.text} -->
	{@html data.about?.translations[0]?.text}
</article>
