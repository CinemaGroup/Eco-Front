import {
	GroupsDocument,
	Sort,
	Status,
	type GroupsQuery,
	type GroupsQueryVariables,
} from '@/__generated__/output'
import { apolloClient } from '@/api/apollo.client'
import { gql } from '@apollo/client'

export const useGroups = async () => {
	const query = gql`
		${GroupsDocument.loc?.source.body}
	`

	const { data } = await apolloClient().query<
		GroupsQuery,
		GroupsQueryVariables
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
