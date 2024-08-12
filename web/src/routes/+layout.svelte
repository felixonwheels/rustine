<script>
	import '../app.scss';
	import Footer from './components/Footer.svelte';
	import Header from './components/Header.svelte';
</script>

<div class="app">
	<Header />

	<main class="container">
		<slot />
	</main>

	<Footer />
</div>
