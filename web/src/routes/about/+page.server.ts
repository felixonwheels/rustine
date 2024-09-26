import getDirectusInstance from '$lib/directus';
import { languageTag } from '$lib/paraglide/runtime.js';
import { readItems } from '@directus/sdk';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, depends }) => {
	depends('paraglide:lang');

	const directus = getDirectusInstance(fetch);

	const pages = await directus.request(
		readItems('about', {
			deep: {
				translations: {
					_filter: {
						_and: [
							{
								languages_code: { _eq: languageTag() }
							}
						]
					}
				}
			},
			fields: ['*', { translations: ['*'] }],
			limit: 1
		})
	);

	return {
		about: pages
	};
};
