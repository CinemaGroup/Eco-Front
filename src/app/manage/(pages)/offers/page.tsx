import type { Metadata } from 'next'

import ManageOffers from '@/components/screens/manage/pages/offers/ManageOffers'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE,
}

export default function ManageOffersPage() {
	return <ManageOffers />
}
