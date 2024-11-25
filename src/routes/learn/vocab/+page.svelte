<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
</script>

<svelte:head>
	<title>{m.vocab()}</title>
	<meta content={m.vocab()} name="description" />
</svelte:head>

<h1 class="text-2xl font-bold">{m.vocab()}</h1>
