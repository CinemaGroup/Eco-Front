import { Sort, Status, useReviewsQuery } from '@/__generated__/output'

export const useReviews = () => {
	const { data } = useReviewsQuery({
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
