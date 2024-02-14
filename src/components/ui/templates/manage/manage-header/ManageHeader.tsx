import type { FC } from 'react'
import styles from './ManageHeader.module.scss'
import ManageCreateButton from './create-button/ManageCreateButton'
import ManageQueryFilters from './filters/query/ManageQueryFilters'
import type { IManageHeader } from './interface/manage-header.interface'

const ManageHeader: FC<IManageHeader> = ({
	onClick,
	queryParams,
	updateQueryFilters,
}) => {
	return (
		<div className={styles.header}>
			<div className={styles.filters}>
				<ManageQueryFilters
					queryParams={queryParams}
					updateQueryFilters={updateQueryFilters}
				/>
			</div>
			{onClick && <ManageCreateButton onClick={onClick} />}
		</div>
	)
}

export default ManageHeader
