import type { FC } from 'react'
import styles from './ManageViewTable.module.scss'
import ManageViewTableHeader from './header/ManageViewTableHeader'
import type { IManageViewTable } from './interface/manage-view-table.interface'
import ManageViewTableItem from './item/ManageViewTableItem'

const ManageViewTable: FC<IManageViewTable> = ({
	items,
	headerItems,
	queryParams,
	updateQueryFilters,
}) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.table}>
				<ManageViewTableHeader items={headerItems} />
				<div className={styles.items}>
					{items.length > 0 ? (
						items.map((item) => (
							<ManageViewTableItem key={item.id} item={item} />
						))
					) : (
						<div className={styles.notFound}>Ничего не найдено</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default ManageViewTable
