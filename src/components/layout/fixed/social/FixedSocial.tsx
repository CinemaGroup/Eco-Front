'use client'

import StaticImage from '@/components/ui/common/image/StaticImage'
import { useState, type FC } from 'react'
import styles from './FixedSocial.module.scss'
import FixedSocialMenu from './menu/FixedSocialMenu'
import { FIXED_SOCIAL_MENU } from './menu/data/fixed-social-menu.data'

const FixedSocial: FC = () => {
	const [isShow, setIsShow] = useState(false)

	return (
		<div className={styles.social}>
			{isShow && <FixedSocialMenu menu={FIXED_SOCIAL_MENU} />}
			<button className={styles.toggle} onClick={() => setIsShow(!isShow)}>
				<StaticImage
					src="/images/icons/chat.svg"
					width={33}
					height={33}
					alt="Chat"
				/>
			</button>
		</div>
	)
}

export default FixedSocial
