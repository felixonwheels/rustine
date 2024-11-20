<script lang="ts">
	import AppSidebar from '$lib/components/app-sidebar.svelte';
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import WIPBanner from '$lib/components/WIPBanner.svelte';
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { ModeWatcher } from 'mode-watcher';
	import '@fontsource/pacifico';

	import '../app.css';

	let { children } = $props();
</script>

<ModeWatcher />

<ParaglideJS {i18n}>
	<Sidebar.Provider>
		<AppSidebar />

		<Sidebar.Inset>
			<WIPBanner />

			<header class="flex h-16 shrink-0 items-center gap-2">
				<div class="flex items-center gap-2 px-4">
					<Sidebar.Trigger class="-ml-1" />
					<Separator class="mr-2 h-4" orientation="vertical" />
					<Breadcrumb />
				</div>
			</header>

			<div class="container flex flex-1 flex-col gap-4 p-4 pt-0">
				{@render children()}
			</div>
		</Sidebar.Inset>
	</Sidebar.Provider>
</ParaglideJS>
