import Link from 'next/link'
import type { FC } from 'react'
import styles from '../FooterMenu.module.scss'
import type { IFooterMenuItem } from '../interface/footer-menu.interface'

const FooterMenuItem: FC<{ item: IFooterMenuItem }> = ({
	item: { href, label },
}) => {
	return (
		<li className={styles.item}>
			<Link href={href} className={styles.link}>
				{label}
			</Link>
		</li>
	)
}

export default FooterMenuItem
