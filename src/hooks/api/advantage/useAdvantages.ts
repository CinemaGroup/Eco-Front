import {
	AdvantagesDocument,
	Sort,
	Status,
	type AdvantagesQuery,
	type AdvantagesQueryVariables,
} from '@/__generated__/output'
import { apolloClient } from '@/api/apollo.client'
import { gql } from '@apollo/client'

export const useAdvantages = async () => {
	const query = gql`
		${AdvantagesDocument.loc?.source.body}
	`

	const { data } = await apolloClient().query<
		AdvantagesQuery,
		AdvantagesQueryVariables
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
