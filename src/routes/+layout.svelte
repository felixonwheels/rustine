<script lang="ts">
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';

	import '../app.pcss';

	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<header>
		<Header />
	</header>

	<main class="container">
		<Breadcrumb />

		{@render children()}
	</main>

	<footer>
		<Footer />
	</footer>
</ParaglideJS>
