'use client'

import ManageView from '@/components/ui/templates/manage/manage-view/ManageView'
import { useManageRequests } from '@/hooks/api/manage/requests/useManageRequests'
import { useMinimalFilters } from '@/hooks/other/filters/useMinimalFilters'
import type { FC } from 'react'

const ManageRequests: FC = () => {
	const {
		queryParams,
		updateQueryFilters,
		searchTerm,
		handleSearch,
		debounceSearch,
	} = useMinimalFilters()
	const { data } = useManageRequests(queryParams, debounceSearch)

	return (
		<ManageView
			queryParams={queryParams}
			searchTerm={searchTerm}
			handleSearch={handleSearch}
			updateQueryFilters={updateQueryFilters}
			headerItems={['Имя', 'Телефон', 'Услуга', 'Дата создания']}
			tableItems={data || []}
			heading="Запросы"
		/>
	)
}

export default ManageRequests
