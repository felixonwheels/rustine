<script lang="ts">
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { i18n } from '$lib/i18n';

	import '@picocss/pico/css/pico.indigo.min.css';
	import '@picocss/pico/css/pico.colors.min.css';
	import '../app.css';

	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<ParaglideJS {i18n}>
	<header>
		<Header />
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<Footer />
	</footer>
</ParaglideJS>

<style>
	main {
		margin-top: var(--pico-spacing);
		margin-bottom: var(--pico-spacing);
	}
</style>
