import StaticImage from '@/components/ui/common/image/StaticImage'
import Link from 'next/link'
import type { FC } from 'react'
import styles from '../Contact.module.scss'
import type { IContactItem } from '../interface/contact.interface'

const ContactItem: FC<{ item: IContactItem }> = ({
	item: { icon, label, href },
}) => {
	return (
		<li className={styles.item}>
			<Link href={href} className={styles.link}>
				{icon ? (
					<StaticImage
						src={icon.src}
						width={icon.width}
						height={icon.height}
						alt={icon.alt}
					/>
				) : (
					<span className={styles.label}>{label}</span>
				)}
			</Link>
		</li>
	)
}

export default ContactItem
