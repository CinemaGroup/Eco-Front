import Container from '@/components/ui/common/container/Container'
import Heading from '@/components/ui/common/heading/Heading'
import Section from '@/components/ui/common/section/Section'
import { useOffers } from '@/hooks/api/offer/useOffers'
import type { FC } from 'react'
import styles from './Offers.module.scss'
import OffersItem from './item/OffersItem'

const Offers: FC = async () => {
	const { data } = await useOffers()
	if (!data?.offers || data?.offers.length === 0) return null

	return (
		<Section className={styles.section} id='offers'>
			<Container>
				<div className={styles.offers}>
					<Heading className={styles.heading}>Специальные предложения</Heading>
					<div className={styles.items}>
						{data.offers.map((offer) => (
							<OffersItem key={offer.id} offer={offer} />
						))}
					</div>
				</div>
			</Container>
		</Section>
	)
}

export default Offers
