import type { Metadata } from 'next'

import Home from '@/components/screens/home/Home'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE,
}

export default function HomePage() {
	return <Home />
}
