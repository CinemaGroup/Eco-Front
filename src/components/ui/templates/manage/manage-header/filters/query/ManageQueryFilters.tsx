import PublishedFilter from '@/components/ui/templates/filters/published/PublishedFilter'
import SortFilter from '@/components/ui/templates/filters/sort/SortFilter'
import type { FC } from 'react'
import type { IManageQueryFilters } from './interface/manage-query-filters.interface'

const ManageQueryFilters: FC<IManageQueryFilters> = ({
	queryParams,
	updateQueryFilters,
}) => {
	return (
		<>
			<SortFilter
				sort={queryParams.sort}
				updateQueryFilters={updateQueryFilters}
			/>
			<PublishedFilter
				status={queryParams.status}
				updateQueryFilters={updateQueryFilters}
			/>
		</>
	)
}

export default ManageQueryFilters
