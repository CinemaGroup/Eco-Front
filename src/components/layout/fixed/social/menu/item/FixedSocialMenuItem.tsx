import StaticImage from '@/components/ui/common/image/StaticImage'
import Link from 'next/link'
import type { FC } from 'react'
import styles from '../../FixedSocial.module.scss'
import type { IFixedSocialMenuItem } from '../interface/fixed-social-menu.interface'

const FixedSocialMenuItem: FC<{ item: IFixedSocialMenuItem }> = ({
	item: { href, icon },
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

export default FixedSocialMenuItem
