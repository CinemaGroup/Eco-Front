import Icon from '@/components/ui/common/icon/Icon'
import type { FC } from 'react'
import styles from './ToTop.module.scss'
import Link from 'next/link'

const ToTop: FC = () => {
	return (
		<Link className={styles.top} href='#top'>
			<Icon name="ArrowUp" />
		</Link>
	)
}

export default ToTop
