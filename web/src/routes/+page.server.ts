import getDirectusInstance from '$lib/directus';
import { languageTag } from '$lib/paraglide/runtime.js';
import { readItems } from '@directus/sdk';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, depends }) => {
	depends('paraglide:lang');

	const directus = getDirectusInstance(fetch);

	const pages = await directus.request(
		readItems('global', {
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
		global: {
			title: pages?.translations[0]?.title?.blocks[0]?.data?.html,
			description: pages?.translations[0]?.description?.blocks[0]?.data?.html
		}
	};
};
