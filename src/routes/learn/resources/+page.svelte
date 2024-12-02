<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
</script>

<svelte:head>
	<title>{m.resources()}</title>
	<meta content={m.resources()} name="description" />
</svelte:head>

<h1 class="text-2xl font-bold">{m.resources()}</h1>
