import type { Metadata } from 'next'

import NotFoundPage from '@/app/not-found'
import ManageAdvantageEdit from '@/components/screens/manage/edits/advantage/ManageAdvantageEdit'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import type { IPageIdParam } from '@/shared/interfaces/param/param.interface'

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE,
}

export default function ManageAdvantageEditPage({ params }: IPageIdParam) {
	return params.id ? (
		<ManageAdvantageEdit queryId={params.id} />
	) : (
		<NotFoundPage />
	)
}
