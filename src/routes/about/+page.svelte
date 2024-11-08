<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';

	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{m.about()}</title>
	<meta content="About this app" name="description" />
</svelte:head>

<h1 class="text-2xl font-bold">{m.about()}</h1>

<article>
	{@html data.about}
</article>
