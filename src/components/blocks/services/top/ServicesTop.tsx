import Heading from '@/components/ui/common/heading/Heading'
import type { FC } from 'react'
import styles from './ServicesTop.module.scss'

const ServicesTop: FC = () => {
	return (
		<div className={styles.top}>
			<Heading className={styles.title}>
				Доступные услуги химчистки и ателье с доставкой
			</Heading>
			<p className={styles.description}>
				ECO DRY - полный спектр услуг, который позволит сделать чистоту Вашим
				постоянным спутником. В нашей компании можно заказать все виды чистки и
				ремонта одежды, обуви, кожи, меха и замши.
			</p>
		</div>
	)
}

export default ServicesTop
