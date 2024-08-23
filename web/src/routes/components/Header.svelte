<script>
	import RustineLogo from '$lib/assets/rustine_logo.svg?raw';
</script>

<header class="px-3 py-4">
	<div class="container">
		<div
			class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
		>
			<a class="navbar-brand rustine-logo" href="/">
				{@html RustineLogo}
			</a>

			<ul class="nav col-12 col-lg-auto me-lg-auto ms-lg-2 mb-2 justify-content-center mb-md-0">
				<li><a href="/learn" class="nav-link px-2 text-secondary">learn</a></li>
				<li><a href="/fix" class="nav-link px-2 text-secondary">fix</a></li>
			</ul>
		</div>
	</div>
</header>

<style>
	.rustine-logo {
		width: 4rem;
	}
</style>
