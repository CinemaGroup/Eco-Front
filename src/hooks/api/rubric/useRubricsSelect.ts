import type { IOption } from '@/components/ui/common/selects/react-select/interface/react-select.interface'
import { useRubrics } from './useRubrics'

export const useRubricsSelect = (excludeName?: string) => {
	const { data } = useRubrics()

	return {
		data: data?.rubrics
			.filter((rubric) => rubric.name !== excludeName)
			.map(
				(rubric): IOption => ({
					label: rubric.name,
					value: rubric.id,
				})
			),
	}
}
