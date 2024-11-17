<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as m from '$lib/paraglide/messages.js';
	import { Wrench } from 'lucide-svelte';

	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{m.home()}</title>
	<meta content="Rustine" name="description" />
</svelte:head>

<h1 class=" text-center font-['Roboto'] text-5xl font-bold italic md:text-6xl xl:text-7xl">
	{m.titleStart()}<mark
		class="bg-gradient-to-r from-rustine-orange to-rustine-indigo bg-clip-text not-italic text-transparent"
		>{m.titleMark()}</mark
	>{m.titleEnd()}
</h1>

<div class="mt-6">
	{@html data.global?.description}
</div>

<div class="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
	<Button class="flex items-center justify-center gap-1" href="/learn" variant="outline"
		>{m.learnButton()}</Button
	>
	<Button class="flex items-center justify-center gap-1" href="/fix">{m.fixButton()}</Button>
</div>

<div class="mt-16">
	<h2 class="text-4xl font-bold lg:text-5xl lg:tracking-tight">
		Everything you need to fix your bike
	</h2>
	<p class="mt-4 text-lg text-slate-600">a very convincing description</p>
</div>

<div class="mt-16 grid gap-16 sm:grid-cols-2 xl:grid-cols-3">
	{#each [...Array(8).keys()] as _, i}
		<div class="flex items-start gap-4">
			<div class="mt-1 h-8 w-8 shrink-0 rounded-full bg-black p-2">
				<Wrench />
			</div>
			<div>
				<h3 class="text-lg font-semibold">{m.titleMark()}</h3>
				{' '}
				<p class="mt-2 leading-relaxed text-slate-500">{@html data.global?.description}</p>
			</div>
		</div>
	{/each}
</div>
