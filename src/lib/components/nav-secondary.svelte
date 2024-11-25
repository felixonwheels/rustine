<script lang="ts">
	import { page } from '$app/stores';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { useSidebar } from '$lib/components/ui/sidebar/index.js';
	import { i18n } from '$lib/i18n.js';
	import * as m from '$lib/paraglide/messages.js';
	import Bug from 'lucide-svelte/icons/bug';
	import CircleHelp from 'lucide-svelte/icons/circle-help';
	import CodeXml from 'lucide-svelte/icons/code-xml';
	import ExternalLink from 'lucide-svelte/icons/external-link';

	const sidebar = useSidebar();

	const navSecondaryItems = $state([
		{
			title: m.about(),
			url: '/about',
			icon: CircleHelp
		},
		{
			title: m.github(),
			url: 'https://github.com/omnitrogen/rustine',
			icon: CodeXml,
			isExternal: true
		},
		{
			title: m.bug(),
			url: 'https://github.com/omnitrogen/rustine/issues/new?labels=bug',
			icon: Bug,
			isExternal: true
		}
	]);
</script>

<Sidebar.Group class="mt-auto">
	<Sidebar.GroupContent>
		<Separator class={sidebar.open ? 'm-2' : 'my-2'} />

		<Sidebar.Menu>
			{#each navSecondaryItems as item (item.title)}
				<Sidebar.MenuItem>
					<Sidebar.MenuButton
						isActive={i18n.route($page.url.pathname) === item.url}
						onclick={() => sidebar.setOpenMobile(false)}
						size="sm"
					>
						{#snippet tooltipContent()}
							{item.title}
						{/snippet}
						{#snippet child({ props })}
							<a href={item.url} {...props} target={item.isExternal ? '_blank' : ''}>
								<item.icon strokeWidth={1} />
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
