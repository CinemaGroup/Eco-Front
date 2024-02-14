import { useOrdersQuery, type QueryOrderInput } from '@/__generated__/output'
import type { IManageViewTableItem } from '@/components/ui/templates/manage/manage-view/table/interface/manage-view-table.interface'
import { ADMIN_VIEWS } from '@/constants/url.constants'
import { formatDate } from '@/utils/formats/date/format-date'
import toast from 'react-hot-toast'

export const useManageOrders = (
	queryParams: QueryOrderInput,
	debounceSearch: string
) => {
	const { data } = useOrdersQuery({
		variables: {
			query: {
				...queryParams,
				searchTerm: debounceSearch,
			},
		},
		fetchPolicy: 'no-cache',
		onError: (error) => {
			toast.error(error.message)
		},
	})

	return {
		data: data?.orders.map(
			(order): IManageViewTableItem => ({
				id: order.id,
				viewUrl: `${ADMIN_VIEWS.ORDER}/${order.id}`,
				data: [
					order.name,
					order.phone,
					`${order.total} ₽`,
					formatDate(order.createdAt),
				],
			})
		),
	}
}
