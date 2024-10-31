<script lang="ts">
	import RustineLogo from '$lib/assets/rustine-logo.svg?raw';
	import * as m from '$lib/paraglide/messages.js';
	import { BookOpenText, CircleHelp, Wrench, Menu } from 'lucide-svelte';
	import { fade } from 'svelte/transition';
	import RustineTitle from './RustineTitle.svelte';

	let showMenu = $state(false);
</script>

<header class="bg-white">
	<nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
		<div class="flex items-center lg:flex-1">
			<a aria-label="rustine logo" class="w-12" href="/">
				{@html RustineLogo}
			</a>
			<a aria-label="rustine text logo" href="/">
				<RustineTitle />
			</a>
		</div>
		<div class="flex lg:hidden">
			<button
				type="button"
				class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
				onclick={() => (showMenu = !showMenu)}
			>
				<span class="sr-only">Open main menu</span>
				<Menu />
			</button>
		</div>
		<div class="hidden lg:flex lg:gap-x-12">
			<a href="/fix" class="text-sm/6 font-semibold text-gray-900"><Wrench /> {m.fix()}</a>
			<a href="/learn" class="text-sm/6 font-semibold text-gray-900"><BookOpenText /> {m.learn()}</a
			>
			<a href="/about" class="text-sm/6 font-semibold text-gray-900"><CircleHelp /> {m.about()}</a>
		</div>
	</nav>
	{#if showMenu}
		<div class="lg:hidden" role="dialog" aria-modal="true" transition:fade={{ duration: 200 }}>
			<div class="fixed inset-0 z-10"></div>
			<div
				class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white py-6 px-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
			>
				<div class="flex items-center justify-between">
					<div class="flex items-center lg:flex-1">
						<a aria-label="rustine logo" class="w-12" href="/">
							{@html RustineLogo}
						</a>
						<a aria-label="rustine text logo" href="/">
							<RustineTitle />
						</a>
					</div>
					<button
						type="button"
						class="-m-2.5 rounded-md p-2.5 text-gray-700"
						onclick={() => (showMenu = !showMenu)}
					>
						<span class="sr-only">Close menu</span>
						<Menu />
					</button>
				</div>
				<div class="mt-6 flow-root">
					<div class="-my-6 divide-y divide-gray-500/10">
						<div class="space-y-2 py-6">
							<a
								href="/fix"
								class="-mx-3 block rounded-lg py-2 px-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
								><Wrench /> {m.fix()}</a
							>
							<a
								href="/learn"
								class="-mx-3 block rounded-lg py-2 px-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
								><BookOpenText /> {m.learn()}</a
							>
							<a
								href="/about"
								class="-mx-3 block rounded-lg py-2 px-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
								><CircleHelp /> {m.about()}</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</header>
