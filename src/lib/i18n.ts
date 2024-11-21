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

		'/learn/brands': {
			'fr-FR': '/apprendre/marques',
			'en-US': '/learn/brands'
		},

		'/learn/brands/[id]': {
			'fr-FR': '/apprendre/marques/[id]',
			'en-US': '/learn/brands/[id]'
		},

		'/learn/issues': {
			'fr-FR': '/apprendre/problèmes',
			'en-US': '/learn/issues'
		},

		'/learn/procedures': {
			'fr-FR': '/apprendre/procédures',
			'en-US': '/learn/procedures'
		},

		'/auto-repair': {
			'fr-FR': '/auto-réparation',
			'en-US': '/auto-repair'
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
