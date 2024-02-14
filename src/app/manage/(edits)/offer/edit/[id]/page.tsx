import type { Metadata } from 'next'

import NotFoundPage from '@/app/not-found'
import ManageOfferEdit from '@/components/screens/manage/edits/offer/ManageOfferEdit'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import type { IPageIdParam } from '@/shared/interfaces/param/param.interface'

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE,
}

export default function ManageOfferEditPage({ params }: IPageIdParam) {
	return params.id ? <ManageOfferEdit queryId={params.id} /> : <NotFoundPage />
}
