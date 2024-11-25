<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
</script>

<svelte:head>
	<title>{m.symptoms()}</title>
	<meta content={m.symptoms()} name="description" />
</svelte:head>

<h1 class="text-2xl font-bold">{m.symptoms()}</h1>
