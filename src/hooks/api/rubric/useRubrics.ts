import { Sort, Status, useRubricsQuery } from '@/__generated__/output'

export const useRubrics = () => {
	const { data } = useRubricsQuery({
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
