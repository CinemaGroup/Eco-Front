'use client'

import type { QueryOrderInput } from '@/__generated__/output'
import ManageView from '@/components/ui/templates/manage/manage-view/ManageView'
import { useManageOrders } from '@/hooks/api/manage/orders/useManageOrders'
import { useMinimalFilters } from '@/hooks/other/filters/useMinimalFilters'
import type { FC } from 'react'

const ManageOrders: FC = () => {
	const {
		queryParams,
		updateQueryFilters,
		searchTerm,
		handleSearch,
		debounceSearch,
	} = useMinimalFilters()
	const { data } = useManageOrders(
		queryParams as QueryOrderInput,
		debounceSearch
	)

	return (
		<ManageView
			queryParams={queryParams}
			searchTerm={searchTerm}
			handleSearch={handleSearch}
			updateQueryFilters={updateQueryFilters}
			headerItems={['Имя', 'Телефон', 'Итого', 'Дата создания']}
			tableItems={data || []}
			heading="Заказы"
		/>
	)
}

export default ManageOrders
