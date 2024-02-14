import StaticImage from '@/components/ui/common/image/StaticImage'
import type { FC } from 'react'
import styles from '../Reviews.module.scss'
import { IReviewsItem } from './interface/reviews-item.interface'

const ReviewsItem: FC<IReviewsItem> = ({ review }) => {
	return (
		<>
			<div className={styles.content}>
				<ul className={styles.rating}>
					{Array.from({ length: 5 }, (_, index) => (
						<li key={index}>
							<StaticImage
								src={`/images/icons/star-${
									index < review.rating ? 'red' : 'gray'
								}.png`}
								width={30}
								height={30}
								alt="Star"
							/>
						</li>
					))}
				</ul>
				<div
					className={styles.description}
					dangerouslySetInnerHTML={{ __html: review.review }}
				/>
				<div className={styles.author}>
					{review.authorAvatar !== '' && (
						<StaticImage
							className={styles.avatar}
							src={review.authorAvatar}
							width={70}
							height={70}
							alt={review.author}
						/>
					)}
					<div className={styles.info}>
						<h3 className={styles.name}>{review.author}</h3>
						<span className={styles.date}>{review.date}</span>
					</div>
				</div>
			</div>
		</>
	)
}

export default ReviewsItem
