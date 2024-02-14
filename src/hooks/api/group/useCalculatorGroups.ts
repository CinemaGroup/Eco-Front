import { Sort, Status, useGroupsQuery } from '@/__generated__/output'
import type { ISelectItem } from '@/components/ui/common/selects/custom-select/interface/select.interface'

export const useCalculatorGroups = () => {
	const { data, refetch } = useGroupsQuery({
		fetchPolicy: 'no-cache',
		variables: {
			query: {
				sort: Sort.Newest,
				status: Status.Published,
			},
		},
	})

	const handleRefetch = (categorySlug: string) => {
		refetch({
			query: {
				categorySlug,
				sort: Sort.Newest,
				status: Status.Published,
			},
		})
	}

	return {
		data: data?.groups.map(
			(group): ISelectItem => ({
				label: group.name,
				key: group.slug
			})
		),
		handleRefetch,
	}
}
