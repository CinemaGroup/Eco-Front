'use client'

import ManageTemplate from '@/components/ui/templates/manage/manage-template/ManageTemplate'
import { useManageReviews } from '@/hooks/api/manage/reviews/useManageReviews'
import { useQueryFilters } from '@/hooks/other/filters/useQueryFilters'
import type { FC } from 'react'

const ManageReviews: FC = () => {
	const {
		queryParams,
		updateQueryFilters,
		searchTerm,
		handleSearch,
		debounceSearch,
	} = useQueryFilters()
	const { data, createReview, deleteReview, toggleReview } = useManageReviews(
		queryParams,
		debounceSearch
	)

	return (
		<ManageTemplate
			queryParams={queryParams}
			searchTerm={searchTerm}
			handleSearch={handleSearch}
			updateQueryFilters={updateQueryFilters}
			createHandler={createReview}
			deleteHandler={deleteReview}
			toggleHandler={toggleReview}
			headerItems={[
				'Аватарка',
				'Автор',
				'Рейтинг',
				'Дата создания',
			]}
			tableItems={data || []}
			heading="Отзывы"
		/>
	)
}

export default ManageReviews
