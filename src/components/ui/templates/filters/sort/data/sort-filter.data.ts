import { Sort } from '@/__generated__/output'
import type { ISelectItem } from '@/components/ui/common/selects/custom-select/interface/select.interface'

export const SORT_FILTER_DATA: ISelectItem<Sort>[] = [
	{
		key: Sort.Newest,
		label: 'Новые',
	},
	{
		key: Sort.Oldest,
		label: 'Старые',
	},
]
