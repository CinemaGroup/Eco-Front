import StaticImage from '@/components/ui/common/image/StaticImage'
import type { FC } from 'react'
import styles from '../Offers.module.scss'
import type { IOffersItem } from './interface/offers-item.interface'
import OffersItemToggle from './toggle/OffersItemToggle'

const OffersItem: FC<IOffersItem> = ({ offer }) => {
	return (
		<div className={styles.item} style={{ background: offer.backgroundColor }}>
			<span className={styles.benefit}>выгода</span>
			<div className={styles.top}>
				<h3 className={styles.sale} style={{ color: offer.color }}>
					{offer.sale}%
				</h3>
				<StaticImage
					src={offer.imagePath}
					width={300}
					height={240}
					alt={`Специальное предложение ${offer.sale}%`}
				/>
			</div>
			<div className={styles.bottom}>
				<div
					className={styles.description}
					dangerouslySetInnerHTML={{ __html: offer.description }}
					style={{ color: offer.color }}
				/>
				<OffersItemToggle about={offer.about} />
			</div>
		</div>
	)
}

export default OffersItem
