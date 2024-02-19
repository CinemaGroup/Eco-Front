import StaticImage from '@/components/ui/common/image/StaticImage'
import { SITE_NAME } from '@/constants/seo.constants'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './HeaderBand.module.scss'
import HeaderForm from './form/HeaderForm'
import Logo from './logo/Logo'

const HeaderBand: FC = () => {
	return (
		<div className={styles.band}>
			<div className={styles.top}>
				<Logo className={styles.logo} />
				<StaticImage
					className={styles.group}
					src="/images/global/group.png"
					width={210}
					height={210}
					alt={SITE_NAME}
				/>
			</div>
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
