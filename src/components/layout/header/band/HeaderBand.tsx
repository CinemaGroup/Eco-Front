import StaticImage from '@/components/ui/common/image/StaticImage'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './HeaderBand.module.scss'
import HeaderForm from './form/HeaderForm'
import Logo from './logo/Logo'

const HeaderBand: FC = () => {
	return (
		<div className={styles.band}>
			<Logo className={styles.logo} />
			<div className={styles.box}>
				<h1 className={styles.heading}>Заказать химчистку с доставкой</h1>
				<HeaderForm />
				<div className={styles.policy}>
					<StaticImage
						src="/images/icons/success.svg"
						width={17}
						height={17}
						alt="Policy"
					/>
					<p className={styles.policyText}>
						Отправляя заявку, вы даете свое{' '}
						<Link href="/policy">
							согласие на обработку персональных данных
						</Link>
					</p>
				</div>
			</div>
		</div>
	)
}

export default HeaderBand
