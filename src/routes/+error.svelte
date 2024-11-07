<script lang="ts">
	import { page } from '$app/stores';	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
</script>

<Tooltip.Provider>
	<Tooltip.Root>
		<div class="container flex min-h-[50vh] flex-col place-content-center gap-6 text-center">
			<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/{$page.status}">
				<h1 class="font-roboto text-6xl font-extrabold italic">
					{$page.status}
				</h1>
			</a>

			<Tooltip.Trigger><h2 class="animate-spin text-4xl">🌀</h2></Tooltip.Trigger>
			<Tooltip.Content>
				<small>it's gonna be alright</small>
			</Tooltip.Content>
		</div>
	</Tooltip.Root>
</Tooltip.Provider>
