import type { Metadata } from 'next'

import NotFoundPage from '@/app/not-found'
import ManageGroupEdit from '@/components/screens/manage/edits/group/ManageGroupEdit'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import type { IPageIdParam } from '@/shared/interfaces/param/param.interface'

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE,
}

export default function ManageGroupEditPage({ params }: IPageIdParam) {
	return params.id ? <ManageGroupEdit queryId={params.id} /> : <NotFoundPage />
}
