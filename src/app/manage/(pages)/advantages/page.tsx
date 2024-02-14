import type { Metadata } from 'next'

import ManageAdvantages from '@/components/screens/manage/pages/advantages/ManageAdvantages'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE,
}

export default function ManageAdvantagesPage() {
	return <ManageAdvantages />
}
