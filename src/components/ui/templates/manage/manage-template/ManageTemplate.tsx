import type { FC } from 'react'
import ManageHeader from '../manage-header/ManageHeader'
import ManageSidebar from '../manage-sidebar/ManageSidebar'
import ManageTable from '../manage-table/ManageTable'
import styles from './ManageTemplate.module.scss'
import type { IManageTemplate } from './interface/manage-template.interface'

const ManageTemplate: FC<IManageTemplate> = ({
	createHandler,
	deleteHandler,
	toggleHandler,
	headerItems,
	tableItems,
	heading,
	queryParams,
	updateQueryFilters,
	searchTerm,
	handleSearch,
}) => {
	return (
		<div className={styles.wrapper}>
			<ManageSidebar className={styles.sidebar} searchTerm={searchTerm} handleSearch={handleSearch} />
			<div className={styles.fill}>
				<h1 className={styles.heading}>{heading}</h1>
				<ManageHeader
					queryParams={queryParams}
					updateQueryFilters={updateQueryFilters}
					onClick={createHandler}
				/>
				<ManageTable
					queryParams={queryParams}
					updateQueryFilters={updateQueryFilters}
					toggleHandler={toggleHandler}
					removeHandler={deleteHandler}
					headerItems={headerItems}
					items={tableItems}
				/>
			</div>
		</div>
	)
}

export default ManageTemplate
