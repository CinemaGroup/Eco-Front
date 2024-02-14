import type { QueryOrderInput, QueryRequestInput } from '@/__generated__/output'
import type { IManageFilters } from '../../interface/manage-filters.interface'

export interface IManageMinimalFilters extends IManageFilters {
	queryParams: QueryOrderInput | QueryRequestInput
}
