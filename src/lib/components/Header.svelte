<script lang="ts">
	import RustineLogo from '$lib/assets/rustine-logo.svg?raw';
	import * as Drawer from '$lib/components/ui/drawer/index.js';
	import * as m from '$lib/paraglide/messages.js';
	import { nav_open } from '$lib/stores';
	import { BookOpenText, CircleHelp, Wrench, Menu } from 'lucide-svelte';

	import RustineTitle from './RustineTitle.svelte';
</script>

<Drawer.Root>
	<nav class="mx-auto flex items-center justify-between p-4 lg:p-8">
		<div class="flex items-center">
			<a aria-label="rustine logo" class="w-12" href="/">
				{@html RustineLogo}
			</a>
			<a aria-label="rustine text logo" href="/">
				<RustineTitle />
			</a>
		</div>
		<div class="flex md:hidden">
			<button class="cursor-pointer" onclick={() => ($nav_open = true)}>
				<span class="sr-only">open main menu</span>
				<Drawer.Trigger><Menu /></Drawer.Trigger>
			</button>
		</div>
		<div class="hidden md:flex md:gap-x-12">
			<a class="text-sm/6 font-semibold text-gray-900" href="/fix"><Wrench /> {m.fix()}</a>
			<a class="text-sm/6 font-semibold text-gray-900" href="/learn"><BookOpenText /> {m.learn()}</a
			>
			<a class="text-sm/6 font-semibold text-gray-900" href="/about"><CircleHelp /> {m.about()}</a>
		</div>
	</nav>
	<Drawer.Content>
		<Drawer.Header>
			<Drawer.Description>
				<div class="mt-6 flex flex-col items-end space-y-2">
					{#each [{ title: m.fix(), href: '/fix', icon: Wrench }, { title: m.learn(), href: '/learn', icon: BookOpenText }, { title: m.about(), href: '/about', icon: CircleHelp }] as { title, href, icon }}
						<Drawer.Close>
							<a
								class="flex items-center space-y-4 px-3 py-2 font-semibold"
								{href}
								onclick={() => ($nav_open = false)}
							>
								{#if icon}
									{@const IconComponent = icon}
									<IconComponent />
								{/if}
								<div>{title}</div>
							</a>
						</Drawer.Close>
					{/each}
				</div>
			</Drawer.Description>
		</Drawer.Header>
		<Drawer.Footer>
			<Drawer.Close>Cancel</Drawer.Close>
		</Drawer.Footer>
	</Drawer.Content>
</Drawer.Root>
