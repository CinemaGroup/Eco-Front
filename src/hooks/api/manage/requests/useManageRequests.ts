import {
	RequestType,
	useRequestsQuery,
	type QueryRequestInput,
} from '@/__generated__/output'
import type { IManageViewTableItem } from '@/components/ui/templates/manage/manage-view/table/interface/manage-view-table.interface'
import { ADMIN_VIEWS } from '@/constants/url.constants'
import { formatDate } from '@/utils/formats/date/format-date'
import toast from 'react-hot-toast'

export const useManageRequests = (
	queryParams: QueryRequestInput,
	debounceSearch: string
) => {
	const { data } = useRequestsQuery({
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
		data: data?.requests.map(
			(request): IManageViewTableItem => ({
				id: request.id,
				viewUrl: `${ADMIN_VIEWS.REQUEST}/${request.id}`,
				data: [
					request.name,
					request.phone,
					request.type === RequestType.Wash
						? 'Стирка'
						: request.type === RequestType.DryCleaning
						? 'Химчистка'
						: 'Не выбрана',
					formatDate(request.createdAt),
				],
			})
		),
	}
}
