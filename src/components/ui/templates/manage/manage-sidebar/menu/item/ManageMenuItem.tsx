import Link from 'next/link'
import type { FC } from 'react'
import styles from '../ManageMenu.module.scss'
import type { IManageMenuItem } from '../interface/manage-menu.interface'

const ManageMenuItem: FC<{ item: IManageMenuItem }> = ({
	item: { label, href },
}) => {
	return (
		<li className={styles.item}>
			<Link className={styles.link} href={href}>
				{label}
			</Link>
		</li>
	)
}

export default ManageMenuItem
