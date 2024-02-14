import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import ManageOrders from '@/components/screens/manage/pages/orders/ManageOrders'

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE,
}

export default function ManageOrdersPage() {
	return <ManageOrders />
}
