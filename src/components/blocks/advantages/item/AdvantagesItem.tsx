import StaticImage from '@/components/ui/common/image/StaticImage'
import type { FC } from 'react'
import styles from '../Advantages.module.scss'
import { IAdvantagesItem } from './interface/advantages-item.interface'

const AdvantagesItem: FC<IAdvantagesItem> = ({ advantage, number }) => {
	return (
		<li className={styles.item}>
			<div className={styles.content}>
				<div className={styles.about}>
					<span className={styles.number}>{number}</span>
					<div
						className={styles.description}
						dangerouslySetInnerHTML={{ __html: advantage.description }}
					/>
				</div>
				<h3 className={styles.name}>{advantage.name}</h3>
				{advantage.imagePath !== '' && (
					<StaticImage
						src={advantage.imagePath}
						width={100}
						height={100}
						alt={advantage.name}
					/>
				)}
			</div>
		</li>
	)
}

export default AdvantagesItem
