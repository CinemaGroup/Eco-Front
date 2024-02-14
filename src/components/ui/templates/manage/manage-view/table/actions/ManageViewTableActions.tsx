import Icon from '@/components/ui/common/icon/Icon'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './ManageViewTableActions.module.scss'

const ManageViewTableActions: FC<{ viewUrl: string }> = ({ viewUrl }) => {
	return (
		<div className={styles.actions}>
			<Link className={styles.button} href={viewUrl}>
				<Icon name="Eye" size={20} />
			</Link>
		</div>
	)
}

export default ManageViewTableActions
