import {
	OffersDocument,
	type OffersQuery,
	type OffersQueryVariables,
	Sort,
	Status,
} from '@/__generated__/output'
import { apolloClient } from '@/api/apollo.client'
import { gql } from '@apollo/client'

export const useOffers = async () => {
	const query = gql`
		${OffersDocument.loc?.source.body}
	`

	const { data } = await apolloClient().query<
		OffersQuery,
		OffersQueryVariables
	>({
		query,
		fetchPolicy: 'no-cache',
		variables: {
			query: {
				sort: Sort.Oldest,
				status: Status.Published,
			},
		},
	})

	return { data }
}
