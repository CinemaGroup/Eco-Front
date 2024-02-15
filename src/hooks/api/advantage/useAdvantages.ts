import { Sort, Status, useAdvantagesQuery } from '@/__generated__/output'

export const useAdvantages = () => {
	const { data } = useAdvantagesQuery({
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
