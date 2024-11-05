<script lang="ts">
	import { page } from '$app/stores';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import * as m from '$lib/paraglide/messages.js';
	import { languageTag } from '$lib/paraglide/runtime';

	const tokens = $derived($page.url.pathname.split('/').slice(2));

	let tokenPath = $derived.by(() => {
		let paths: Array<string> = [];
		let path = '';

		for (let token of tokens) {
			path += '/' + token;

			paths.push(path);
		}

		return paths;
	});

	let crumbs: Array<{ label: string; href: string }> = $derived.by(() => {
		let crumbs = tokens.map((t, i) => ({ label: decodeURIComponent(t), href: tokenPath[i] }));

		crumbs.unshift({ label: m.home(), href: '/' });

		return crumbs;
	});
</script>

{#key languageTag()}
	{#if crumbs.length > 1 && $page.error?.message === undefined}
		<Breadcrumb.Root>
			<Breadcrumb.List>
				{#each crumbs as c, i}
					<Breadcrumb.Item class="hidden md:block">
						{#if i == crumbs.length - 1}
							<Breadcrumb.Page>{c.label}</Breadcrumb.Page>
						{:else}
							<Breadcrumb.Link href={c.href}>{c.label}</Breadcrumb.Link>
						{/if}
					</Breadcrumb.Item>
					{#if i < crumbs.length - 1}<Breadcrumb.Separator class="hidden md:block" />{/if}
				{/each}
			</Breadcrumb.List>
		</Breadcrumb.Root>
	{/if}
{/key}
