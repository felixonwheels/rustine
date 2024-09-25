/** @type { import("eslint").Linter.Config } */
module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'prettier'
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'perfectionist'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
	],
	rules: {
		'perfectionist/sort-imports': [
			'error',
			{
				type: 'natural'
			}
		],
		'perfectionist/sort-svelte-attributes': [
			'error',
			{
				type: 'alphabetical',
				order: 'asc',
				ignoreCase: true,
				groups: [],
				customGroups: {}
			}
		]
	}
};
