'use client'

import ManageTemplate from '@/components/ui/templates/manage/manage-template/ManageTemplate'
import { useManageAdvantages } from '@/hooks/api/manage/advantages/useManageAdvantages'
import { useQueryFilters } from '@/hooks/other/filters/useQueryFilters'
import type { FC } from 'react'

const ManageAdvantages: FC = () => {
	const {
		queryParams,
		updateQueryFilters,
		searchTerm,
		handleSearch,
		debounceSearch,
	} = useQueryFilters()
	const { data, createAdvantage, deleteAdvantage, toggleAdvantage } =
		useManageAdvantages(queryParams, debounceSearch)

	return (
		<ManageTemplate
			queryParams={queryParams}
			searchTerm={searchTerm}
			handleSearch={handleSearch}
			updateQueryFilters={updateQueryFilters}
			createHandler={createAdvantage}
			deleteHandler={deleteAdvantage}
			toggleHandler={toggleAdvantage}
			headerItems={['Картинка', 'Название', 'Дата создания']}
			tableItems={data || []}
			heading="Преимущества"
		/>
	)
}

export default ManageAdvantages
