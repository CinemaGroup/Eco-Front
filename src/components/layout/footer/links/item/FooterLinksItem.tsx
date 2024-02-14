import Link from 'next/link'
import type { FC } from 'react'
import styles from '../FooterLinks.module.scss'
import type { IFooterLinksItem } from '../interface/footer-links.interface'

const FooterLinksItem: FC<{ item: IFooterLinksItem }> = ({
	item: { label, href },
}) => {
	return (
		<li className={styles.item}>
			{href ? (
				<Link href={href} className={styles.link}>
					{label}
				</Link>
			) : (
				label
			)}
		</li>
	)
}

export default FooterLinksItem
