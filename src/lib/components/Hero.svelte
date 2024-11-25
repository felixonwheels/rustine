<script lang="ts">
	import RustineLogo from '$lib/assets/rustine-logo.svg?raw';
	import { Button } from '$lib/components/ui/button/index.js';
	import {
		transition_delay_start,
		transition_delay_step,
		transition_fade_duration,
		transition_slide_duration,
		transition_easing
	} from '$lib/constants';
	import * as m from '$lib/paraglide/messages.js';
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';

	let { title } = $props();

	let visible = $state(false);

	onMount(() => (visible = true));
</script>

{#if visible}
	<div
		in:fade={{
			delay: transition_delay_start + 0 * transition_delay_step,
			duration: transition_fade_duration
		}}
	>
		<div
			class="aspect-square z-10 mx-auto flex size-24 animate-[spin_1.5s_ease-out_1_0.5s] drop-shadow md:size-28 xl:size-36"
			in:slide={{
				delay: transition_delay_start + 0 * transition_delay_step,
				axis: 'y',
				duration: transition_slide_duration,
				easing: transition_easing
			}}
		>
			{@html RustineLogo}
		</div>
	</div>

	<div
		class="text-center"
		in:fade={{
			delay: transition_delay_start + 1 * transition_delay_step,
			duration: transition_fade_duration
		}}
	>
		<h1
			class="z-5 isolate mx-auto mt-12 inline-block bg-gradient-to-r from-primary to-rustine-indigo bg-clip-text px-2 text-center font-[Pacifico] text-5xl font-bold text-transparent drop-shadow-md md:mt-24 md:text-7xl xl:text-8xl"
			in:slide={{
				delay: transition_delay_start + 1 * transition_delay_step,
				axis: 'y',
				duration: transition_slide_duration,
				easing: transition_easing
			}}
		>
			{title}
		</h1>
	</div>

	<div
		in:fade={{
			delay: transition_delay_start + 2 * transition_delay_step,
			duration: transition_fade_duration
		}}
	>
		<h2
			class="mt-6 text-center text-xl font-bold md:text-2xl xl:text-3xl"
			in:slide={{
				delay: transition_delay_start + 2 * transition_delay_step,
				axis: 'y',
				duration: transition_slide_duration,
				easing: transition_easing
			}}
		>
			{m.titleStart()}<mark
				class="bg-gradient-to-r from-primary to-rustine-indigo bg-clip-text not-italic text-transparent"
				>{m.titleMark()}</mark
			>{m.titleEnd()}
		</h2>
	</div>

	<div
		in:fade={{
			delay: transition_delay_start + 3 * transition_delay_step,
			duration: transition_fade_duration
		}}
	>
		<div
			class="mt-12 flex flex-col justify-center gap-3 sm:my-12 sm:flex-row sm:gap-6 md:mt-24"
			in:slide={{
				delay: transition_delay_start + 3 * transition_delay_step,
				axis: 'y',
				duration: transition_slide_duration,
				easing: transition_easing
			}}
		>
			<Button
				class="text-md flex items-center justify-center gap-1 rounded-full xl:text-xl"
				href="/fix">{m.fixButton()}</Button
			>
			<Button
				class="text-md flex items-center justify-center gap-1 rounded-full xl:text-xl"
				href="/learn"
				variant="outline">{m.learnButton()}</Button
			>
		</div>
	</div>
{/if}
