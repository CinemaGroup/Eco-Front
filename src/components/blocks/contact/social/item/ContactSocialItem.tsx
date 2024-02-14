import StaticImage from '@/components/ui/common/image/StaticImage'
import Link from 'next/link'
import type { FC } from 'react'
import styles from '../ContactSocial.module.scss'
import type { IContactSocialItem } from '../interface/contact-social.interface'

const ContactSocialItem: FC<{ item: IContactSocialItem }> = ({
	item: { icon, href },
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
			</Link>
		</li>
	)
}

export default ContactSocialItem
