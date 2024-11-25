<script lang="ts">
	import {
		transition_delay_start,
		transition_delay_step,
		transition_fade_duration,
		transition_slide_duration,
		transition_easing
	} from '$lib/constants';
	import * as m from '$lib/paraglide/messages.js';
	import { cn } from '$lib/utils';
	import BookOpenText from 'lucide-svelte/icons/book-open-text';
	import Hammer from 'lucide-svelte/icons/hammer';
	import Users from 'lucide-svelte/icons/users';
	import Wrench from 'lucide-svelte/icons/wrench';
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';

	let visible = $state(false);

	onMount(() => (visible = true));

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
			class="m-auto mt-24 max-w-lg text-4xl font-bold md:mt-32 lg:text-center lg:text-5xl"
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
			class="mt-8 w-full"
			in:slide={{
				delay: transition_delay_start + 6 * transition_delay_step,
				axis: 'y',
				duration: transition_slide_duration,
				easing: transition_easing
			}}
		>
			<div class="grid gap-6 md:grid-cols-6">
				{#each features as feature, i (feature.title)}
					<div
						class={cn(
							'rounded-lg',
							i % 4 == 0 && 'md:col-span-2',
							i % 4 == 1 && 'md:col-span-4 md:col-start-3',
							i % 4 == 2 && 'md:col-span-4',
							i % 4 == 3 && 'md:col-span-2 md:col-start-5'
						)}
					>
						<a href={feature.href}>
							<div
								class="text-md flex h-full w-full flex-col items-center justify-center rounded-lg border border-border bg-card p-4 text-card-foreground shadow-sm transition-shadow duration-300 ease-in-out hover:shadow-md"
							>
								<div
									class="h-10 w-10 place-content-center rounded-md bg-primary p-2 text-primary-foreground shadow"
								>
									<feature.icon class="h-full w-full" />
								</div>
								<h3 class="text-md mt-2 text-center font-semibold md:text-lg">
									{m[feature.title as keyof typeof m]()}
								</h3>
								<p class="mt-2 text-center text-sm text-muted-foreground">
									{m[feature.subtitle as keyof typeof m]()}
								</p>
							</div>
						</a>
					</div>
				{/each}
			</div>
		</div>
	</div>
{/if}
