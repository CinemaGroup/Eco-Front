import type { FC } from 'react'
import styles from './FooterLinks.module.scss'
import type { IFooterLinks } from './interface/footer-links.interface'
import FooterLinksItem from './item/FooterLinksItem'

const FooterLinks: FC<{ links: IFooterLinks }> = ({ links: { items } }) => {
	return (
		<ul className={styles.list}>
			{items.map((item, index) => (
				<FooterLinksItem key={index} item={item} />
			))}
		</ul>
	)
}

export default FooterLinks
