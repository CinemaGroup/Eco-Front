import { Sort, Status, useRubricsCatalogQuery } from '@/__generated__/output'

export const useCatalogRubrics = () => {
	const { data } = useRubricsCatalogQuery({
		fetchPolicy: 'no-cache',
		variables: {
			query: {
				sort: Sort.Oldest,
				status: Status.Published,
			},
			type: 'catalog',
		},
	})

	return { data }
}
