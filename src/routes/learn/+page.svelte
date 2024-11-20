<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import { fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>{m.learn()}</title>
	<meta content="learn about bike maintenance" name="description" />
</svelte:head>

<h1 class="text-2xl font-bold">{m.learn()}</h1>
