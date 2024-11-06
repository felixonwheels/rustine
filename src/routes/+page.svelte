<script lang="ts">
	import RustineTitle from '$lib/components/RustineTitle.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as m from '$lib/paraglide/messages.js';
	import { BookOpenText, CircleHelp, Wrench } from 'lucide-svelte';
	import { fly } from 'svelte/transition';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{m.home()}</title>
	<meta content="Rustine" name="description" />
</svelte:head>

<section in:fly>
	<div>
		<div>
			<RustineTitle />
		</div>

		<div>
			{@html data.global?.title}
		</div>

		<div>
			{@html data.global?.description}
		</div>

		<div>
			<Button href="/learn">learn about your bike</Button>
			<Button href="/fix">fix your bike!</Button>
		</div>
	</div>
</section>

<section>
	<div>
		<article in:fly={{ duration: 120 }}>
			<h1><BookOpenText color="var(--pico-primary)" size={28} /></h1>
			<h2>{m.learn()}</h2>
			<p>learn about your bike, its components and how they all work together</p>
			<p><a href="/learn">learn more</a></p>
		</article>

		<article in:fly={{ duration: 120 }}>
			<h1><Wrench color="var(--pico-primary)" size={28} /></h1>
			<h2>{m.fix()}</h2>
			<p>diagnose an issue on your bike, and learn how to fix it</p>
			<p><a href="/fix">fix my bike</a></p>
		</article>

		<article in:fly={{ duration: 120 }}>
			<h1><CircleHelp color="var(--pico-primary)" size={28} /></h1>
			<h2>{m.about()}</h2>
			<p>read about what this project is and why it came to be</p>
			<p><a href="/about">what even is this?</a></p>
		</article>
	</div>
</section>
