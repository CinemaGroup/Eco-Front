'use client'

import ManageTemplate from '@/components/ui/templates/manage/manage-template/ManageTemplate'
import { useManageOffers } from '@/hooks/api/manage/offers/useManageOffers'
import { useQueryFilters } from '@/hooks/other/filters/useQueryFilters'
import type { FC } from 'react'

const ManageOffers: FC = () => {
	const {
		queryParams,
		updateQueryFilters,
		searchTerm,
		handleSearch,
		debounceSearch,
	} = useQueryFilters()
	const { data, createOffer, deleteOffer, toggleOffer } = useManageOffers(
		queryParams,
		debounceSearch
	)

	return (
		<ManageTemplate
			queryParams={queryParams}
			searchTerm={searchTerm}
			handleSearch={handleSearch}
			updateQueryFilters={updateQueryFilters}
			createHandler={createOffer}
			deleteHandler={deleteOffer}
			toggleHandler={toggleOffer}
			headerItems={['Картинка', 'Скидка', 'Цвет фона', 'Дата создания']}
			tableItems={data || []}
			heading="Специальные предложения"
		/>
	)
}

export default ManageOffers
