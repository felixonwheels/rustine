<script lang="ts">
	import type { ComponentProps } from 'svelte';

	import RustineLogo from '$lib/assets/rustine-logo.svg?raw';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
	import ModeSwitcher from '$lib/components/ModeSwitcher.svelte';
	import NavMain from '$lib/components/nav-main.svelte';
	import NavSecondary from '$lib/components/nav-secondary.svelte';
	import RustineTitle from '$lib/components/RustineTitle.svelte';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import * as m from '$lib/paraglide/messages.js';
	import BookOpenText from 'lucide-svelte/icons/book-open-text';
	import Bug from 'lucide-svelte/icons/bug';
	import CircleHelp from 'lucide-svelte/icons/circle-help';
	import CodeXml from 'lucide-svelte/icons/code-xml';
	import House from 'lucide-svelte/icons/house';
	import Wrench from 'lucide-svelte/icons/wrench';

	const data = {
		navMain: [
			{
				title: m.home(),
				url: '/',
				icon: House,
				items: []
			},
			{
				title: m.learn(),
				url: '/learn',
				icon: BookOpenText,
				items: [
					{
						title: m.tools(),
						url: '/learn/tools'
					}
				],
				isActive: true
			},
			{
				title: m.fix(),
				url: '/fix',
				icon: Wrench,
				items: [],
				isActive: true
			}
		],
		navSecondary: [
			{
				title: m.about(),
				url: '/about',
				icon: CircleHelp
			},
			{
				title: m.gitlab(),
				url: 'https://gitlab.com/rustine/rustine',
				icon: CodeXml
			},
			{
				title: m.bug(),
				url: 'https://gitlab.com/rustine/rustine/-/issues/new',
				icon: Bug
			}
		]
	};

	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root bind:ref collapsible="icon" variant="inset" {...restProps}>
	<Sidebar.Header>
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<Sidebar.MenuButton class="gap-0" size="lg">
					{#snippet child({ props })}
						<a href="/" {...props}>
							<div class="aspect-square flex size-8 items-center justify-center rounded-lg">
								{@html RustineLogo}
							</div>
							<div class="flex-1 truncate text-center">
								<RustineTitle />
							</div>
						</a>
					{/snippet}
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		</Sidebar.Menu>
	</Sidebar.Header>
	<Sidebar.Content>
		<NavMain items={data.navMain} />
		<NavSecondary class="mt-auto" items={data.navSecondary} />
	</Sidebar.Content>
	<footer>
		<Sidebar.Footer>
			<LanguageSwitcher />
			<ModeSwitcher />
		</Sidebar.Footer>
	</footer>
	<Sidebar.Rail />
</Sidebar.Root>
