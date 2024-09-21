import type { PageServerLoad } from './$types';
import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';

export const load: PageServerLoad = async ({ fetch }) => {
	const directus = getDirectusInstance(fetch);

	return {
		about: await directus.request(
			readItems('About', {
				deep: {
					translations: {
						_filter: {
							_and: [
								{
									languages_code: { _eq: 'en-US' }
								}
							]
						}
					}
				},
				fields: ['*', { translations: ['*'] }]
			})
		)
	};
};
