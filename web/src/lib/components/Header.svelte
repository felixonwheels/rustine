<script>
	import RustineLogo from '$lib/assets/rustine-logo.svg?raw';
	import * as m from '$lib/paraglide/messages.js';
	import { BookOpenText, CircleHelp, Wrench } from 'lucide-svelte';
</script>

<div class="container-fluid">
	<nav>
		<ul>
			<li>
				<a class="rustine-logo" href="/" aria-label="rustine logo">
					{@html RustineLogo}
				</a>
			</li>
		</ul>
		<ul>
			<li><strong><a href="/learn" class="contrast"><BookOpenText /> {m.learn()}</a></strong></li>
			<li><strong><a href="/fix" class="contrast"><Wrench /> {m.fix()}</a></strong></li>
			<li><strong><a href="/about" class="contrast"><CircleHelp /> {m.about()}</a></strong></li>
		</ul>
	</nav>
</div>

<style>
	.rustine-logo {
		width: 4rem;
	}

	@media (max-width: 576px) {
		.rustine-logo {
			width: 5rem;
		}

		nav {
			flex-direction: column;
			align-items: center;
		}
	}
</style>
