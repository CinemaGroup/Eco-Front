import Icon from '@/components/ui/common/icon/Icon'
import cn from 'clsx'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './ManageTableActions.module.scss'
import type { IManageActions } from './interface/manage-actions.interface'
import { Status } from '@/__generated__/output'

const ManageTableActions: FC<IManageActions> = ({
	status,
	editUrl,
	removeHandler,
	toggleHandler,
}) => {
	return (
		<div className={styles.actions}>
			<button onClick={toggleHandler}>
				<div
					className={cn(styles.toggle, {
						[styles.visible]: status === Status.Published,
					})}
				>
					<span className={styles.switch} />
				</div>
			</button>
			<Link className={styles.button} href={editUrl}>
				<Icon name="Pencil" size={20} />
			</Link>
			<button className={styles.button} onClick={removeHandler}>
				<Icon name="X" size={22} />
			</button>
		</div>
	)
}

export default ManageTableActions
