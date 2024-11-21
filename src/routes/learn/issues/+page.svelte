<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
</script>

<svelte:head>
	<title>{m.issues()}</title>
	<meta content={m.issues()} name="description" />
</svelte:head>

<h1 class="text-2xl font-bold">{m.issues()}</h1>
