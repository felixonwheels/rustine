<script>
	import RustineLogo from '$lib/assets/rustine_logo.svg?raw';
</script>

<header class="p-3">
	<div class="container">
		<div
			class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
		>
			<a class="navbar-brand rustine-logo" href="/">
				{@html RustineLogo}
			</a>

			<ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
				<li><a href="/" class="nav-link px-2 text-secondary">Home</a></li>
				<li><a href="/about" class="nav-link px-2 text-secondary">About</a></li>
			</ul>

			<form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
				<input type="search" class="form-control" placeholder="Search..." aria-label="Search" />
			</form>
		</div>
	</div>
</header>

<style>
	.rustine-logo {
		width: 4rem;
	}
</style>
