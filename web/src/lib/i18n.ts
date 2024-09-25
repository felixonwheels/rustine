import { createI18n } from '@inlang/paraglide-sveltekit';
import * as runtime from '$lib/paraglide/runtime.js';

export const i18n = createI18n(runtime, {
	pathnames: {
		'/learn': {
			en: '/learn',
			fr: '/apprendre'
		},

		'/fix': {
			en: '/fix',
			fr: '/réparer'
		},

		'/about': {
			en: '/about',
			fr: '/a-propos'
		}
	},
	prefixDefaultLanguage: 'always'
});
