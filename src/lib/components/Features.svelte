<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import {
		transition_delay_start,
		transition_delay_step,
		transition_fade_duration,
		transition_slide_duration,
		transition_easing
	} from '$lib/constants.svelte';
	import * as m from '$lib/paraglide/messages.js';
	import BookOpenText from 'lucide-svelte/icons/book-open-text';
	import Hammer from 'lucide-svelte/icons/hammer';
	import Users from 'lucide-svelte/icons/users';
	import Wrench from 'lucide-svelte/icons/wrench';
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';

	let visible = $state(false);

	onMount(() => {
		visible = true;
	});

	let { subtitle, subtitle_description } = $props();

	let features = [
		{
			icon: Wrench,
			href: '/fix',
			title: 'featuresFixTitle',
			subtitle: 'featuresFixSubtitle'
		},
		{
			icon: BookOpenText,
			href: '/learn',
			title: 'featuresLearnTitle',
			subtitle: 'featuresLearnSubtitle'
		},
		{
			icon: Users,
			href: '/',
			title: 'featuresRepairCafeTitle',
			subtitle: 'featuresRepairCafeSubtitle'
		},
		{
			icon: Hammer,
			href: '/learn/tools',
			title: 'featuresToolsTitle',
			subtitle: 'featuresToolsSubtitle'
		}
	];
</script>

{#if visible}
	<div
		in:fade={{
			delay: transition_delay_start + 4 * transition_delay_step,
			duration: transition_fade_duration
		}}
	>
		<h2
			class="m-auto mt-16 max-w-lg text-4xl font-bold lg:text-center lg:text-5xl"
			in:slide={{
				delay: transition_delay_start + 4 * transition_delay_step,
				axis: 'y',
				duration: transition_slide_duration,
				easing: transition_easing
			}}
		>
			{subtitle}
		</h2>
	</div>

	<div
		in:fade={{
			delay: transition_delay_start + 5 * transition_delay_step,
			duration: transition_fade_duration
		}}
	>
		<p
			class="m-auto mt-4 max-w-lg text-lg text-slate-500 dark:text-slate-400 lg:text-center"
			in:slide={{
				delay: transition_delay_start + 5 * transition_delay_step,
				axis: 'y',
				duration: transition_slide_duration,
				easing: transition_easing
			}}
		>
			{subtitle_description}
		</p>
	</div>

	<div
		class="flex place-content-center content-center items-center"
		in:fade={{
			delay: transition_delay_start + 6 * transition_delay_step,
			duration: transition_fade_duration
		}}
	>
		<div
			class="my-4 grow columns-1 gap-2 sm:columns-2 md:my-8 xl:columns-4"
			in:slide={{
				delay: transition_delay_start + 6 * transition_delay_step,
				axis: 'y',
				duration: transition_slide_duration,
				easing: transition_easing
			}}
		>
			{#each features as feature (feature.title)}
				<a href={feature.href}>
					<Card.Root class="my-4 flex break-inside-avoid transition-shadow hover:shadow-md sm:m-4">
						<Card.Content>
							<div
								class="h-10 w-10 place-content-center rounded-md bg-primary p-2 text-primary-foreground shadow"
							>
								<feature.icon class="h-full w-full" />
							</div>
							<h3 class="text-md mt-2 font-semibold md:text-lg">
								{m[feature.title as keyof typeof m]()}
							</h3>
							<Card.Description class="mt-4">
								{m[feature.subtitle as keyof typeof m]()}
							</Card.Description>
						</Card.Content>
					</Card.Root>
				</a>
			{/each}
		</div>
	</div>
{/if}
