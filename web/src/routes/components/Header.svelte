<script>
	import RustineLogo from '$lib/assets/rustine_logo.svg?raw';
</script>

<header>
	<nav class="container-fluid">
		<ul>
			<li>
				<a class="rustine-logo" href="/">
					{@html RustineLogo}
				</a>
			</li>
		</ul>
		<ul>
			<li><a href="/learn" class="contrast">learn</a></li>
			<li><a href="/fix" class="contrast">fix</a></li>
		</ul>
	</nav>
</header>

<style>
	.rustine-logo {
		width: 4rem;
	}
</style>
