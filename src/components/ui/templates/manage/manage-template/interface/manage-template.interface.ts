import type { QueryInput } from '@/__generated__/output'
import type { ChangeEvent } from 'react'
import type { ITableItem } from '../../manage-table/interface/manage-table.interface'

export interface IManageTemplate {
	heading: string
	tableItems: ITableItem[]
	headerItems: string[]
	queryParams: QueryInput
	searchTerm: string
	handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
	updateQueryFilters: (key: string, value: string | null) => void
	createHandler?: () => void
	deleteHandler: () => void
	toggleHandler: () => void
}
