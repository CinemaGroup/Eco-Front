import type { QueryOrderInput, QueryRequestInput } from '@/__generated__/output'
import type { ChangeEvent } from 'react'
import type { IManageViewTableItem } from '../table/interface/manage-view-table.interface'

export interface IManageView {
	heading: string
	tableItems: IManageViewTableItem[]
	headerItems: string[]
	queryParams: QueryOrderInput | QueryRequestInput
	searchTerm: string
	handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
	updateQueryFilters: (key: string, value: string | null) => void
}
