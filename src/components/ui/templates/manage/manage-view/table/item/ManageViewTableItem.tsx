import type { FC } from 'react'
import styles from '../ManageViewTable.module.scss'
import ManageViewTableActions from '../actions/ManageViewTableActions'
import type { IManageViewItem } from '../interface/manage-view-table.interface'

const ManageViewTableItem: FC<IManageViewItem> = ({ item }) => {
	return (
		<div className={styles.item}>
			{item.data.map((value, index) => (
				<div className={styles.value} key={index}>
					{value}
				</div>
			))}
			<ManageViewTableActions viewUrl={item.viewUrl} />
		</div>
	)
}

export default ManageViewTableItem
