'use client'

import Icon from '@/components/ui/common/icon/Icon'
import StaticImage from '@/components/ui/common/image/StaticImage'
import Catalog from '@/components/ui/templates/catalog/Catalog'
import { useCartStore } from '@/store/cart-store'
import { useState, type FC } from 'react'
import ServicesGroups from '../groups/ServicesGroups'
import styles from './ServicesProducts.module.scss'
import type { IServicesProducts } from './interface/services-products.interface'

const ServicesProducts: FC<IServicesProducts> = ({
	services,
	groups,
	categories,
	areaId,
}) => {
	const [isShow, setIsShow] = useState(false)
	const { toggle, isExists } = useCartStore()

	return (
		<>
			<button className={styles.prev} onClick={() => setIsShow(true)}>
				<Icon name="ChevronLeft" />
				Назад
			</button>
			{isShow && (
				<Catalog areaId={areaId}>
					<ServicesGroups
						areaId={areaId}
						groups={groups}
						categories={categories}
					/>
				</Catalog>
			)}
			<div className={styles.services}>
				{services.map((service) => (
					<div key={service.id} className={styles.service}>
						<div className={styles.top}>
							<h4 className={styles.name}>{service.name}</h4>
							<div
								className={styles.description}
								dangerouslySetInnerHTML={{ __html: service.description }}
							/>
							<p className={styles.term}>
								Срок: <span>{service.term}</span>
							</p>
							<StaticImage
								className={styles.image}
								src={service.imagePath}
								width={250}
								height={300}
								alt={service.name}
							/>
						</div>
						<div className={styles.bottom}>
							<span className={styles.price}>
								{service.price}
								<StaticImage
									src="/images/icons/currency.png"
									width={25}
									height={25}
									alt="Currency"
								/>
							</span>
							<button className={styles.buy} onClick={() => toggle(service)}>
								{isExists(service.id) ? (
									<Icon name="Minus" />
								) : (
									<Icon name="Plus" />
								)}
							</button>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default ServicesProducts
