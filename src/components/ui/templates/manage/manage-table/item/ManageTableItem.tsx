import StaticImage from '@/components/ui/common/image/StaticImage'
import cn from 'clsx'
import type { FC } from 'react'
import styles from '../ManageTable.module.scss'
import ManageTableActions from '../actions/ManageTableActions'
import type { IManageTableItem } from '../interface/manage-table.interface'

const ManageTableItem: FC<IManageTableItem> = ({
	item,
	removeHandler,
	toggleHandler,
}) => {
	return (
		<div className={styles.item}>
			{item.preview && item.preview.src !== '' && (
				<div className={cn(styles.image, styles.value)}>
					<StaticImage
						src={item.preview.src}
						width={40}
						height={40}
						alt={item.preview.alt}
					/>
				</div>
			)}
			{item.data.map((value, index) => (
				<div className={styles.value} key={index}>
					{value}
				</div>
			))}
			<ManageTableActions
				status={item.status}
				editUrl={item.editUrl}
				toggleHandler={toggleHandler}
				removeHandler={removeHandler}
			/>
		</div>
	)
}

export default ManageTableItem
