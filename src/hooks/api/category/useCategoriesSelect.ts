import type { IOption } from '@/components/ui/common/selects/react-select/interface/react-select.interface'
import { useCategories } from './useCategories'

export const useCategoriesSelect = (excludeName?: string) => {
	const { data } = useCategories()

	return {
		data: data?.categories
			.filter((category) => category.name !== excludeName)
			.map(
				(category): IOption => ({
					label: category.name,
					value: category.id,
				})
			),
	}
}
