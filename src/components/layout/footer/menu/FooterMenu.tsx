import type { FC } from 'react'
import styles from './FooterMenu.module.scss'
import type { IFooterMenu } from './interface/footer-menu.interface'
import FooterMenuItem from './item/FooterMenuItem'

const FooterMenu: FC<{ menu: IFooterMenu }> = ({ menu: { items } }) => {
	return (
		<ul className={styles.list}>
			{items.map((item, index) => (
				<FooterMenuItem key={index} item={item} />
			))}
		</ul>
	)
}

export default FooterMenu
