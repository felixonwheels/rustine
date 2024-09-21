<script>
	import RustineLogo from '$lib/assets/rustine-logo.svg?raw';
	import { BookOpenText, CircleHelp, Wrench } from 'lucide-svelte';

	import * as m from '$lib/paraglide/messages.js';
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
			<li><a href="/learn" class="contrast"><BookOpenText /> {m.learn()}</a></li>
			<li><a href="/fix" class="contrast"><Wrench /> {m.fix()}</a></li>
			<li><a href="/about" class="contrast"><CircleHelp /> {m.about()}</a></li>
		</ul>
	</nav>
</header>

<style>
	.rustine-logo {
		width: 4rem;
	}

	@media (max-width: 576px) {
		.container-fluid {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}

		.rustine-logo {
			width: 6rem;
		}
	}
</style>
