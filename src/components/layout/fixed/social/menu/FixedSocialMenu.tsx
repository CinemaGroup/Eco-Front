import type { FC } from 'react'
import styles from '../FixedSocial.module.scss'
import type { IFixedSocialMenu } from './interface/fixed-social-menu.interface'
import FixedSocialMenuItem from './item/FixedSocialMenuItem'

const FixedSocialMenu: FC<{ menu: IFixedSocialMenu }> = ({
	menu: { items },
}) => {
	return (
		<ul className={styles.list}>
			{items.map((item) => (
				<FixedSocialMenuItem item={item} />
			))}
		</ul>
	)
}

export default FixedSocialMenu
