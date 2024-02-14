import type { FC } from 'react'
import styles from './ManageMenu.module.scss'
import type { IManageMenu } from './interface/manage-menu.interface'
import ManageMenuItem from './item/ManageMenuItem'

const ManageMenu: FC<{ menu: IManageMenu }> = ({ menu: { items } }) => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.menu}>
				{items.map((item, index) => (
					<ManageMenuItem key={index} item={item} />
				))}
			</ul>
		</nav>
	)
}

export default ManageMenu
