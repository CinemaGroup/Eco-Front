import type { QueryInput } from '@/__generated__/output'

export interface IManageHeader {
	onClick?: () => void
	updateQueryFilters: (key: string, value: string | null) => void
	queryParams: QueryInput
}
