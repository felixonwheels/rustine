<script lang="ts">
	import Features from '$lib/components/Features.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import * as m from '$lib/paraglide/messages.js';

	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{m.home()}</title>
	<meta content="Rustine" name="description" />
</svelte:head>

<Hero name={data.name} title={data.title} />

<Features />
