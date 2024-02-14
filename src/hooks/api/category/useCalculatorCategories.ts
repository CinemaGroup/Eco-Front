import {
	Sort,
	Status,
	useCalculatorCategoriesQuery,
} from '@/__generated__/output'
import type { ISelectItem } from '@/components/ui/common/selects/custom-select/interface/select.interface'

export const useCalculatorCategories = () => {
	const { data } = useCalculatorCategoriesQuery({
		fetchPolicy: 'no-cache',
		variables: {
			query: {
				sort: Sort.Newest,
				status: Status.Published,
			},
		},
	})

	return {
		data: data?.categories.map(
			(category): ISelectItem<string> => ({
				key: category.slug,
				label: category.name,
			})
		),
	}
}
