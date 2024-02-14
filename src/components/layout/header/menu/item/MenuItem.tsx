import Link from 'next/link'
import type { FC } from 'react'
import styles from '../Menu.module.scss'
import type { IMenuItem } from '../interface/menu.interface'

const MenuItem: FC<{ item: IMenuItem }> = ({ item: { label, href } }) => {
	return (
		<li className={styles.item}>
			<Link className={styles.link} href={href}>
				{label}
			</Link>
		</li>
	)
}

export default MenuItem
