'use client'

import ManageTemplate from '@/components/ui/templates/manage/manage-template/ManageTemplate'
import { useManageCategories } from '@/hooks/api/manage/categories/useManageCategories'
import { useQueryFilters } from '@/hooks/other/filters/useQueryFilters'
import type { FC } from 'react'

const ManageCategories: FC = () => {
	const {
		queryParams,
		updateQueryFilters,
		searchTerm,
		handleSearch,
		debounceSearch,
	} = useQueryFilters()
	const { data, createCategory, deleteCategory, toggleCategory } =
		useManageCategories(queryParams, debounceSearch)

	return (
		<ManageTemplate
			queryParams={queryParams}
			searchTerm={searchTerm}
			handleSearch={handleSearch}
			updateQueryFilters={updateQueryFilters}
			createHandler={createCategory}
			deleteHandler={deleteCategory}
			toggleHandler={toggleCategory}
			headerItems={['Картинка', 'Название', 'Дата создания']}
			tableItems={data || []}
			heading="Категории"
		/>
	)
}

export default ManageCategories
