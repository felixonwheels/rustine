<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion/index.js';
	import {
		transition_delay_start,
		transition_delay_step,
		transition_fade_duration,
		transition_slide_duration,
		transition_easing
	} from '$lib/constants.svelte';
	import * as m from '$lib/paraglide/messages.js';
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';

	let visible = $state(false);

	onMount(() => (visible = true));

	let items = [
		{
			title: 'Is it accessible?',
			description: 'Yes. It adheres to the WAI-ARIA design pattern.'
		},
		{
			title: 'Is it accessible? 2',
			description: 'Yes. It adheres to the WAI-ARIA design pattern.'
		},
		{
			title: 'Is it accessible? 3',
			description: 'Yes. It adheres to the WAI-ARIA design pattern.'
		}
	];
</script>

{#if visible}
	<div
		in:fade={{
			delay: transition_delay_start + 7 * transition_delay_step,
			duration: transition_fade_duration
		}}
	>
		<h2
			class="m-auto mt-16 max-w-lg text-4xl font-bold lg:text-center lg:text-5xl"
			in:slide={{
				delay: transition_delay_start + 7 * transition_delay_step,
				axis: 'y',
				duration: transition_slide_duration,
				easing: transition_easing
			}}
		>
			{m.faq()}
		</h2>
	</div>

	<div
		in:fade={{
			delay: transition_delay_start + 8 * transition_delay_step,
			duration: transition_fade_duration
		}}
	>
		<div
			class="m-2 mb-24 flex flex-1 place-content-center md:m-6"
			in:slide={{
				delay: transition_delay_start + 8 * transition_delay_step,
				axis: 'y',
				duration: transition_slide_duration,
				easing: transition_easing
			}}
		>
			<Accordion.Root class="min-w-full" type="multiple">
				{#each items as item (item.title)}
					<Accordion.Item value={item.title}>
						<Accordion.Trigger>{item.title}</Accordion.Trigger>
						<Accordion.Content>{item.description}</Accordion.Content>
					</Accordion.Item>
				{/each}
			</Accordion.Root>
		</div>
	</div>
{/if}
