'use client'

import StaticImage from '@/components/ui/common/image/StaticImage'
import { useToggleBodyScroll } from '@/hooks/helpers/body/useToggleBodyScroll'
import { useCartStore } from '@/store/cart-store'
import { useEffect, useState, type FC } from 'react'
import styles from './Cart.module.scss'
import CartWrapper from './wrapper/CartWrapper'

const Cart: FC = () => {
	const [isShow, setIsShow] = useState(false)
	const { cart } = useCartStore()

	useEffect(() => {
		useToggleBodyScroll(isShow ? 'on' : 'off')
	}, [isShow, useToggleBodyScroll])

	if (cart.length === 0) return null

	return (
		<div className={styles.cart}>
			<button className={styles.toggle} onClick={() => setIsShow(!isShow)}>
				<StaticImage
					src="/images/icons/cart.svg"
					width={35}
					height={35}
					alt="Cart"
				/>
				<span className={styles.toggleCount}>{cart.length}</span>
			</button>
			{isShow && <CartWrapper closeCart={() => setIsShow(false)} />}
		</div>
	)
}

export default Cart
