import { Sort, Status, useOffersQuery } from '@/__generated__/output'

export const useOffers = () => {
	const { data } = useOffersQuery({
		variables: {
			query: {
				sort: Sort.Oldest,
				status: Status.Published,
			},
		},
		fetchPolicy: 'no-cache',
	})

	return { data }
}
