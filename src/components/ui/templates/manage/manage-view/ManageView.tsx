import type { FC } from 'react'
import ManageSidebar from '../manage-sidebar/ManageSidebar'
import styles from './ManageView.module.scss'
import ManageViewHeader from './header/ManageViewHeader'
import type { IManageView } from './interface/manage-view.interface'
import ManageViewTable from './table/ManageViewTable'

const ManageView: FC<IManageView> = ({
	searchTerm,
	handleSearch,
	heading,
	tableItems,
	headerItems,
	queryParams,
	updateQueryFilters,
}) => {
	return (
		<div className={styles.wrapper}>
			<ManageSidebar
				className={styles.sidebar}
				searchTerm={searchTerm}
				handleSearch={handleSearch}
			/>
			<div className={styles.fill}>
				<h1 className={styles.heading}>{heading}</h1>
				<ManageViewHeader
					queryParams={queryParams}
					updateQueryFilters={updateQueryFilters}
				/>
				<ManageViewTable
					queryParams={queryParams}
					updateQueryFilters={updateQueryFilters}
					headerItems={headerItems}
					items={tableItems}
				/>
			</div>
		</div>
	)
}

export default ManageView
