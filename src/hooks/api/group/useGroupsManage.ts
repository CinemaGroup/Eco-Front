import { Sort, Status, useGroupsQuery } from '@/__generated__/output'

export const useGroupsManage = () => {
	const { data } = useGroupsQuery({
		fetchPolicy: 'no-cache',
		variables: {
			query: {
				sort: Sort.Newest,
				status: Status.Published,
			},
		},
	})

	return { data }
}
