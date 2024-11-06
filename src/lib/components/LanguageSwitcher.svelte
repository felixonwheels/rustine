<script lang="ts">
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { i18n } from '$lib/i18n';
	import { availableLanguageTags, languageTag } from '$lib/paraglide/runtime.js';
	import { flags } from '$lib/utils/flags';
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger class="w-full">
		<Button class="w-full" size="icon" variant="outline">
			{flags.get(languageTag())}
		</Button>
	</DropdownMenu.Trigger>

	<DropdownMenu.Content align="center">
		{#each availableLanguageTags as lang}
			<a
				aria-current={lang === languageTag() ? 'page' : undefined}
				href={i18n.route($page.url.pathname)}
				hreflang={lang}
			>
				<DropdownMenu.Item>
					<span class="mr-2 size-4">{flags.get(lang)}</span>
					<span>{lang}</span>
				</DropdownMenu.Item>
			</a>
		{/each}
	</DropdownMenu.Content>
</DropdownMenu.Root>
