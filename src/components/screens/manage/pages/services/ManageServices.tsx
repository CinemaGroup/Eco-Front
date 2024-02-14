'use client'

import ManageTemplate from '@/components/ui/templates/manage/manage-template/ManageTemplate'
import { useManageServices } from '@/hooks/api/manage/services/useManageServices'
import { useQueryFilters } from '@/hooks/other/filters/useQueryFilters'
import type { FC } from 'react'

const ManageServices: FC = () => {
	const {
		queryParams,
		updateQueryFilters,
		searchTerm,
		handleSearch,
		debounceSearch,
	} = useQueryFilters()
	const { data, createService, deleteService, toggleService } =
		useManageServices(queryParams, debounceSearch)

	return (
		<ManageTemplate
			queryParams={queryParams}
			searchTerm={searchTerm}
			handleSearch={handleSearch}
			updateQueryFilters={updateQueryFilters}
			createHandler={createService}
			deleteHandler={deleteService}
			toggleHandler={toggleService}
			headerItems={['Картинка', 'Название', 'Цена', 'Дата создания']}
			tableItems={data || []}
			heading="Услуги"
		/>
	)
}

export default ManageServices
