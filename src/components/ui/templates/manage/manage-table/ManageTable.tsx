import type { FC } from 'react'
import styles from './ManageTable.module.scss'
import ManageTableHeader from './header/ManageTableHeader'
import type { IManageTable } from './interface/manage-table.interface'
import ManageTableItem from './item/ManageTableItem'

const ManageTable: FC<IManageTable> = ({
	items,
	headerItems,
	removeHandler,
	toggleHandler,
	queryParams,
	updateQueryFilters,
}) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.table}>
				<ManageTableHeader items={headerItems} />
				<div className={styles.items}>
					{items.length > 0 ? (
						items.map((item) => (
							<ManageTableItem
								key={item.id}
								toggleHandler={() =>
									toggleHandler({
										variables: {
											id: item.id,
										},
									})
								}
								removeHandler={() =>
									removeHandler({
										variables: {
											id: item.id,
										},
									})
								}
								item={item}
							/>
						))
					) : (
						<div className={styles.notFound}>Ничего не найдено</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default ManageTable
