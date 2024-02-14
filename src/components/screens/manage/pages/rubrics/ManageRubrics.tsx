'use client'

import ManageTemplate from '@/components/ui/templates/manage/manage-template/ManageTemplate'
import { useManageRubrics } from '@/hooks/api/manage/rubrics/useManageRubric'
import { useQueryFilters } from '@/hooks/other/filters/useQueryFilters'
import type { FC } from 'react'

const ManageRubrics: FC = () => {
	const {
		queryParams,
		updateQueryFilters,
		searchTerm,
		handleSearch,
		debounceSearch,
	} = useQueryFilters()
	const { data, createRubric, deleteRubric, toggleRubric } = useManageRubrics(
		queryParams,
		debounceSearch
	)

	return (
		<ManageTemplate
			queryParams={queryParams}
			searchTerm={searchTerm}
			handleSearch={handleSearch}
			updateQueryFilters={updateQueryFilters}
			createHandler={createRubric}
			deleteHandler={deleteRubric}
			toggleHandler={toggleRubric}
			headerItems={['Картинка', 'Название', 'Дата создания']}
			tableItems={data || []}
			heading="Рубрики"
		/>
	)
}

export default ManageRubrics
