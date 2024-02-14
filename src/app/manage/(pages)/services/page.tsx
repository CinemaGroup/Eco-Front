import type { Metadata } from 'next'

import ManageServices from '@/components/screens/manage/pages/services/ManageServices'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE,
}

export default function ManageServicesPage() {
	return <ManageServices />
}
