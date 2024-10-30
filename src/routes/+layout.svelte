<script lang="ts">
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';

	import '../app.css';

	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<div class="container flex flex-col bg-white dark:bg-gray-800">
		<header>
			<Header />
		</header>

		<main>
			<Breadcrumb />

			{@render children()}
		</main>

		<footer class="pb-4">
			<Footer />
		</footer>
	</div>
</ParaglideJS>
