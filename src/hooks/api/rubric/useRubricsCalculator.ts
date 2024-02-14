import { Sort, Status, useCalculatorRubricsQuery } from '@/__generated__/output'
import type { ISelectItem } from '@/components/ui/common/selects/custom-select/interface/select.interface'

export const useCalculatorRubrics = () => {
	const { data } = useCalculatorRubricsQuery({
		fetchPolicy: 'no-cache',
		variables: {
			query: {
				sort: Sort.Newest,
				status: Status.Published,
			},
		},
	})

	return {
		data: data?.rubrics.map(
			(rubric): ISelectItem<string> => ({
				key: rubric.slug,
				label: rubric.name,
			})
		),
	}
}
