import SortFilter from '@/components/ui/templates/filters/sort/SortFilter'
import type { FC } from 'react'
import type { IManageMinimalFilters } from './interface/manage-minimal-filters.interface'

const ManageMinimalFilters: FC<IManageMinimalFilters> = ({
	queryParams,
	updateQueryFilters,
}) => {
	return (
		<>
			<SortFilter
				sort={queryParams.sort}
				updateQueryFilters={updateQueryFilters}
			/>
		</>
	)
}

export default ManageMinimalFilters
