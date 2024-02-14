import StaticImage from '@/components/ui/common/image/StaticImage'
import Link from 'next/link'
import type { FC } from 'react'
import styles from '../Social.module.scss'
import type { ISocialItem } from '../interface/social.interface'

const SocialItem: FC<{ item: ISocialItem }> = ({ item: { icon, href } }) => {
	return (
		<li className={styles.item}>
			<Link className={styles.link} href={href}>
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

export default SocialItem
