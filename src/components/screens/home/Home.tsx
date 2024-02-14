import Advantages from '@/components/blocks/advantages/Advantages'
import Calculator from '@/components/blocks/calculator/Calculator'
import Contact from '@/components/blocks/contact/Contact'
import Offers from '@/components/blocks/offers/Offers'
import Request from '@/components/blocks/request/Request'
import Reviews from '@/components/blocks/reviews/Reviews'
import Services from '@/components/blocks/services/Services'
import type { FC } from 'react'

const Home: FC = () => {
	return (
		<>
			<Advantages />
			<Services />
			<Calculator />
			<Offers />
			<Reviews />
			<Request />
			<Contact />
		</>
	)
}

export default Home
