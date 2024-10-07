import * as runtime from '$lib/paraglide/runtime.js';
import { createI18n } from '@inlang/paraglide-sveltekit';

export const i18n = createI18n(runtime, {
	pathnames: {
		'/learn': {
			'fr-FR': '/apprendre',
			'en-US': '/learn'
		},

		'/learn/tools': {
			'fr-FR': '/apprendre/outils',
			'en-US': '/learn/tools'
		},

		'/fix': {
			'fr-FR': '/réparer',
			'en-US': '/fix'
		},

		'/about': {
			'fr-FR': '/a-propos',
			'en-US': '/about'
		}
	},
	prefixDefaultLanguage: 'always',
	defaultLanguageTag: 'fr-FR'
});
