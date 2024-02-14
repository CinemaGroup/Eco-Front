import type { Metadata } from 'next'

import ManageGroups from '@/components/screens/manage/pages/groups/ManageGroups'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE,
}

export default function ManageGroupsPage() {
	return <ManageGroups />
}
