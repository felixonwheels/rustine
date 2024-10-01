<script lang="ts">
	import { page } from '$app/stores';

	let crumbs: Array<{ label: string; href: string }> = [];

	$: {
		// Remove zero-length tokens.
		const tokens = $page.url.pathname.split('/').filter((t) => t !== '');

		// Create { label, href } pairs for each token.
		let tokenPath = '';
		crumbs = tokens.map((t) => {
			tokenPath += '/' + t;
			t = t.charAt(0).toUpperCase() + t.slice(1);
			return { label: t, href: tokenPath };
		});

		// Add a way to get home too.
		crumbs.unshift({ label: 'Home', href: '/' });
	}
</script>

<nav aria-label="breadcrumb">
	<ul>
		{#each crumbs as c, i}
			{#if i == crumbs.length - 1}
				<li>
					<span class="label">
						{c.label}
					</span>
				</li>
			{:else}
				<li><a href={c.href}>{c.label}</a> &gt;&nbsp;</li>
			{/if}
		{/each}
	</ul>
</nav>
