import cn from 'clsx'
import type { FC } from 'react'
import styles from './Social.module.scss'
import type { ISocial } from './interface/social.interface'
import SocialItem from './item/SocialItem'

const Social: FC<ISocial> = ({ social: { items }, className }) => {
	return (
		<ul className={cn(styles.list, className && className)}>
			{items.map((item, index) => (
				<SocialItem key={index} item={item} />
			))}
		</ul>
	)
}

export default Social
