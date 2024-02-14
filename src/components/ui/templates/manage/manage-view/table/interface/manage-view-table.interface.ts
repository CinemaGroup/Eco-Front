import type { QueryOrderInput, QueryRequestInput } from '@/__generated__/output'

export interface IManageViewTableItem {
	id: number
	viewUrl: string
	data: string[]
}

export interface IManageViewItem {
	item: IManageViewTableItem
}

export interface IManageViewTable {
	items: IManageViewTableItem[]
	headerItems: string[]
	queryParams: QueryOrderInput | QueryRequestInput
	updateQueryFilters: (key: string, value: string | null) => void
}
