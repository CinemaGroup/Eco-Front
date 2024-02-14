import type { FC } from 'react'
import styles from './Menu.module.scss'
import type { IMenu } from './interface/menu.interface'
import MenuItem from './item/MenuItem'

const Menu: FC<{ menu: IMenu }> = ({ menu: { items } }) => {
	return (
		<nav className={styles.menu}>
			<ul className={styles.list}>
				{items.map((item, index) => (
					<MenuItem key={index} item={item} />
				))}
			</ul>
		</nav>
	)
}

export default Menu
