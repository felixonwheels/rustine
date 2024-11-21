<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
</script>

<svelte:head>
	<title>{m.procedures()}</title>
	<meta content={m.procedures()} name="description" />
</svelte:head>

<h1 class="text-2xl font-bold">{m.procedures()}</h1>
