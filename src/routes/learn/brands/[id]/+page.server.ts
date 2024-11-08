import getDirectusInstance from '$lib/directus';
import { languageTag } from '$lib/paraglide/runtime.js';
import { readItem } from '@directus/sdk';
import { error } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, fetch, depends }) => {
	depends('paraglide:lang');

	const directus = getDirectusInstance(fetch);

	const brand = await directus.request(
		readItem('brand', params.id, {
			deep: {
				translations: {
					_filter: {
						languages_code: {
							_eq: languageTag()
						}
					}
				}
			},
			fields: ['*', { translations: ['*'] }]
		})
	);

	if (brand) {
		return brand;
	}

	error(404);
};
