import type { ParaglideLocals } from '@inlang/paraglide-sveltekit';

import type { AvailableLanguageTag } from '../../lib/paraglide/runtime';

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			paraglide: ParaglideLocals<AvailableLanguageTag>;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
