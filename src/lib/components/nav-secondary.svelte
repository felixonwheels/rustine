<script lang="ts">
	import type { ComponentProps } from 'svelte';

	import { page } from '$app/stores';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { useSidebar } from '$lib/components/ui/sidebar/index.js';
	import { i18n } from '$lib/i18n.js';
	import ExternalLink from 'lucide-svelte/icons/external-link';

	const sidebar = useSidebar();

	let {
		ref = $bindable(null),
		items,
		...restProps
	}: {
		items: {
			title: string;
			url: string;
			// This should be `Component` after lucide-svelte updates types
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			icon: any;
			isExternal?: boolean;
		}[];
	} & ComponentProps<typeof Sidebar.Group> = $props();
</script>

<Sidebar.Group bind:ref {...restProps}>
	<Sidebar.GroupContent>
		<Separator class={sidebar.open ? 'm-2' : 'my-2'} />

		<Sidebar.Menu>
			{#each items as item (item.title)}
				<Sidebar.MenuItem>
					<Sidebar.MenuButton isActive={i18n.route($page.url.pathname) === item.url} size="sm">
						{#snippet tooltipContent()}
							{item.title}
						{/snippet}
						{#snippet child({ props })}
							<a href={item.url} {...props} target={item.isExternal ? '_blank' : ''}>
								<item.icon />
								<span>{item.title}</span>
							</a>
						{/snippet}
					</Sidebar.MenuButton>
					{#if item.isExternal}
						<Sidebar.MenuBadge><ExternalLink class="size-4" /></Sidebar.MenuBadge>
					{/if}
				</Sidebar.MenuItem>
			{/each}
		</Sidebar.Menu>
	</Sidebar.GroupContent>
</Sidebar.Group>
