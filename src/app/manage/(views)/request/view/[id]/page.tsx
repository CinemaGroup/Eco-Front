import type { Metadata } from 'next'

import ManageRequestView from '@/components/screens/manage/views/request/ManageRequestView'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import NotFoundPage from '@/app/not-found'
import type { IPageIdParam } from '@/shared/interfaces/param/param.interface'

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE,
}

export default function ManageRequestViewPage({ params }: IPageIdParam) {
	return params.id ? (
		<ManageRequestView queryId={params.id} />
	) : (
		<NotFoundPage />
	)
}
