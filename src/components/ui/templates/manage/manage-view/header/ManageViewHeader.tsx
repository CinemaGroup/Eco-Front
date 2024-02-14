import type { FC } from 'react'
import ManageMinimalFilters from '../../manage-header/filters/minimal/ManageMinimalFilters'
import type { IManageMinimalFilters } from '../../manage-header/filters/minimal/interface/manage-minimal-filters.interface'
import styles from './ManageViewHeader.module.scss'

const ManageViewHeader: FC<IManageMinimalFilters> = ({
	queryParams,
	updateQueryFilters,
}) => {
	return (
		<div className={styles.header}>
			<div className={styles.filters}>
				<ManageMinimalFilters
					queryParams={queryParams}
					updateQueryFilters={updateQueryFilters}
				/>
			</div>
		</div>
	)
}

export default ManageViewHeader
