import type { Metadata } from 'next'

import ManageRequests from '@/components/screens/manage/pages/requests/ManageRequests'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE,
}

export default function ManageRequestsPage() {
	return <ManageRequests />
}
