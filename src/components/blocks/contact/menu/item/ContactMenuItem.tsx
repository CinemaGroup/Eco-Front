import StaticImage from '@/components/ui/common/image/StaticImage'
import Link from 'next/link'
import type { FC } from 'react'
import styles from '../ContactMenu.module.scss'
import type { IContactMenuItem } from '../interface/contact-menu.interface'

const ContactMenuItem: FC<{ item: IContactMenuItem }> = ({
	item: { href, label, icon },
}) => {
	return (
		<li className={styles.item}>
			<Link href={href} className={styles.link}>
				<StaticImage
					src={icon.src}
					width={icon.width}
					height={icon.height}
					alt={icon.alt}
				/>
				{label}
			</Link>
		</li>
	)
}

export default ContactMenuItem
