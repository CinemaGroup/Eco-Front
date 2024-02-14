import { Sort, Status, useCategoriesQuery } from '@/__generated__/output'

export const useCategories = () => {
	const { data } = useCategoriesQuery({
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
