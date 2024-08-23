<script>
	import RustineLogo from '$lib/assets/rustine_logo.svg?raw';
</script>

<div class="container">
	<footer class="d-flex flex-wrap justify-content-between align-items-center py-4 my-4 border-top">
		<p class="col-md-4 mb-0 text-body-secondary">&copy; {new Date().getFullYear()} rustine</p>

		<a
			href="/"
			class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none rustine-logo"
		>
			{@html RustineLogo}
		</a>

		<ul class="nav col-md-4 justify-content-end">
			<li class="nav-item"><a href="/" class="nav-link px-2 text-body-secondary">Home</a></li>
			<li class="nav-item"><a href="/" class="nav-link px-2 text-body-secondary">Features</a></li>
			<li class="nav-item"><a href="/" class="nav-link px-2 text-body-secondary">Pricing</a></li>
			<li class="nav-item"><a href="/" class="nav-link px-2 text-body-secondary">FAQs</a></li>
			<li class="nav-item"><a href="/about" class="nav-link px-2 text-body-secondary">About</a></li>
		</ul>
	</footer>
</div>

<style>
	.rustine-logo {
		width: 4rem;
	}
</style>
