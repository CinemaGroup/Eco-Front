import {
	ServicesDocument,
	useCreateServiceMutation,
	useDeleteServiceMutation,
	useServicesQuery,
	useToggleServiceMutation,
	type QueryInput,
} from '@/__generated__/output'
import type { ITableItem } from '@/components/ui/templates/manage/manage-table/interface/manage-table.interface'
import { ADMIN_EDITS } from '@/constants/url.constants'
import { formatDate } from '@/utils/formats/date/format-date'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export const useManageServices = (
	queryParams: QueryInput,
	debounceSearch: string
) => {
	const { push } = useRouter()

	const { data } = useServicesQuery({
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

	const [createService] = useCreateServiceMutation({
		fetchPolicy: 'no-cache',
		onCompleted: ({ createService }) => {
			toast.success('Услуга успешно создана.')
			push(`${ADMIN_EDITS.SERVICE}/${createService.id}`)
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [deleteService] = useDeleteServiceMutation({
		fetchPolicy: 'no-cache',
		refetchQueries: [ServicesDocument],
		onCompleted: () => {
			toast.success('Услуга успешно удалена.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [toggleService] = useToggleServiceMutation({
		fetchPolicy: 'no-cache',
		refetchQueries: [ServicesDocument],
		onCompleted: () => {
			toast.success('Статус услуги успешно обновлен.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	return {
		data: data?.services.map(
			(service): ITableItem => ({
				id: service.id,
				editUrl: `${ADMIN_EDITS.SERVICE}/${service.id}`,
				preview: {
					src: service.imagePath,
					alt: service.name,
				},
				data: [
					service.name,
					service.price,
					formatDate(service.createdAt),
				],
				status: service.status,
			})
		),
		createService,
		deleteService,
		toggleService,
	}
}
