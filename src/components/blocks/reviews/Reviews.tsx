'use client'

import Container from '@/components/ui/common/container/Container'
import Heading from '@/components/ui/common/heading/Heading'
import StaticImage from '@/components/ui/common/image/StaticImage'
import Section from '@/components/ui/common/section/Section'
import { useReviews } from '@/hooks/api/review/useReviews'
import { useSlider } from '@/hooks/other/slider/useSlider'
import { type FC } from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './Reviews.module.scss'
import ReviewsItem from './item/ReviewsItem'

const Reviews: FC = () => {
	const { data } = useReviews()
	const { setSwiper, previous, next } = useSlider()
	if (!data?.reviews || data?.reviews.length === 0) return null

	return (
		<Section className={styles.section} id='reviews'>
			<Container variant="right">
				<div className={styles.reviews}>
					<div className={styles.container}>
						<div className={styles.top}>
							<Heading className={styles.heading}>
								Что клиенты говорят о нас
							</Heading>
							<div className={styles.arrows}>
								<button className={styles.arrow} onClick={previous}>
									<StaticImage
										src="/images/icons/slider-arrow-left.png"
										width={45}
										height={45}
										alt="Arrow Left"
									/>
								</button>
								<button className={styles.arrow} onClick={next}>
									<StaticImage
										src="/images/icons/slider-arrow-right.png"
										width={45}
										height={45}
										alt="Arrow Right"
									/>
								</button>
							</div>
						</div>
					</div>
					<Swiper
						className={styles.slider}
						spaceBetween={30}
						slidesPerView="auto"
						speed={300}
						onSwiper={(swiper) => setSwiper(swiper)}
					>
						{data.reviews.map((review) => (
							<SwiperSlide key={review.id} className={styles.item}>
								<ReviewsItem review={review} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</Container>
		</Section>
	)
}

export default Reviews
