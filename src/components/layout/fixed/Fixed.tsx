import cn from 'clsx'
import type { FC } from 'react'
import styles from './Fixed.module.scss'
import Cart from './cart/Cart'
import Logout from './logout/Logout'
import FixedSocial from './social/FixedSocial'
import ToTop from './to-top/ToTop'

const Fixed: FC = () => {
	return (
		<>
			<div className={cn(styles.fixed, styles.left)}>
				<Logout />
				<ToTop />
			</div>
			<div className={cn(styles.fixed, styles.right)}>
				<FixedSocial />
				<Cart />
			</div>
		</>
	)
}

export default Fixed
