<script>
	import GitlabLogo from '$lib/assets/gitlab-logo.svg?raw';
</script>

<footer>
	<div class="container footer">
		<section>
			<nav>
				<a class="logo" href="https://gitlab.com/rustine/rustine">
					{@html GitlabLogo}
				</a>
			</nav>
		</section>

		<section class="love">
			<small>made with 🧡 by omni</small>
		</section>
	</div>
</footer>

<style>
	.logo {
		width: 5rem;
	}

	.footer {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.love {
		margin-bottom: calc(var(--pico-spacing) * 4);
	}
</style>
