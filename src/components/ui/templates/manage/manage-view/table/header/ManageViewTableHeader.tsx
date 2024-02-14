import type { FC } from 'react'
import styles from '../ManageViewTable.module.scss'
import cn from 'clsx'

const ManageViewTableHeader: FC<{ items: (string | number)[] }> = ({
	items,
}) => {
	return (
		<div className={cn(styles.item, styles.headerItem)}>
			{items.map((item) => (
				<div className={styles.headerValue} key={item}>
					{item}
				</div>
			))}
			<div className={styles.headerValue}>Действия</div>
		</div>
	)
}

export default ManageViewTableHeader
