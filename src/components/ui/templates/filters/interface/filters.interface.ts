import type { Sort, Status } from '@/__generated__/output'

export interface IFilterProps {
	updateQueryFilters: (key: string, value: string | null) => void
}

export interface IPublishedFilter extends IFilterProps {
	status?: Status | null
}

export interface ISortFilter extends IFilterProps {
	sort?: Sort | null
}

export interface IPerPageFilter extends IFilterProps {
	perPage?: string | null
}
