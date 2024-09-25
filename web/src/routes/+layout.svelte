<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '@picocss/pico/css/pico.colors.min.css';
	import '@picocss/pico/css/pico.indigo.min.css';

	import '../app.css';
</script>

<ParaglideJS {i18n}>
	<header>
		<Header />
	</header>

	<main class="container">
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
