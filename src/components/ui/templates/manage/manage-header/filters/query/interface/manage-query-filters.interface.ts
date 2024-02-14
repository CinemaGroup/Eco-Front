import type { QueryInput } from '@/__generated__/output'
import type { IManageFilters } from '../../interface/manage-filters.interface'

export interface IManageQueryFilters extends IManageFilters {
	queryParams: QueryInput
}
