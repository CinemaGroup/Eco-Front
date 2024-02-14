'use client'

import ManageTemplate from '@/components/ui/templates/manage/manage-template/ManageTemplate'
import { useManageGroups } from '@/hooks/api/manage/groups/useManageGroups'
import { useQueryFilters } from '@/hooks/other/filters/useQueryFilters'
import type { FC } from 'react'

const ManageGroups: FC = () => {
	const {
		queryParams,
		updateQueryFilters,
		searchTerm,
		handleSearch,
		debounceSearch,
	} = useQueryFilters()
	const { data, createGroup, deleteGroup, toggleGroup } = useManageGroups(
		queryParams,
		debounceSearch
	)

	return (
		<ManageTemplate
			queryParams={queryParams}
			searchTerm={searchTerm}
			handleSearch={handleSearch}
			updateQueryFilters={updateQueryFilters}
			createHandler={createGroup}
			deleteHandler={deleteGroup}
			toggleHandler={toggleGroup}
			headerItems={['Картинка', 'Название', 'Дата создания']}
			tableItems={data || []}
			heading="Группы"
		/>
	)
}

export default ManageGroups
