import {
	AdvantagesDocument,
	useAdvantagesQuery,
	useCreateAdvantageMutation,
	useDeleteAdvantageMutation,
	useToggleAdvantageMutation,
	type QueryInput,
} from '@/__generated__/output'
import type { ITableItem } from '@/components/ui/templates/manage/manage-table/interface/manage-table.interface'
import { ADMIN_EDITS } from '@/constants/url.constants'
import { formatDate } from '@/utils/formats/date/format-date'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export const useManageAdvantages = (
	queryParams: QueryInput,
	debounceSearch: string
) => {
	const { push } = useRouter()

	const { data } = useAdvantagesQuery({
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

	const [createAdvantage] = useCreateAdvantageMutation({
		fetchPolicy: 'no-cache',
		onCompleted: ({ createAdvantage }) => {
			toast.success('Преимущество было успешно создано.')
			push(`${ADMIN_EDITS.ADVANTAGE}/${createAdvantage.id}`)
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [deleteAdvantage] = useDeleteAdvantageMutation({
		fetchPolicy: 'no-cache',
		refetchQueries: [AdvantagesDocument],
		onCompleted: () => {
			toast.success('Преимущество было успешно удалено.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [toggleAdvantage] = useToggleAdvantageMutation({
		fetchPolicy: 'no-cache',
		refetchQueries: [AdvantagesDocument],
		onCompleted: () => {
			toast.success('Статус преимущества был успешно обновлен.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	return {
		data: data?.advantages.map(
			(advantage): ITableItem => ({
				id: advantage.id,
				editUrl: `${ADMIN_EDITS.ADVANTAGE}/${advantage.id}`,
				preview: {
					src: advantage.imagePath,
					alt: advantage.name,
				},
				data: [advantage.name, formatDate(advantage.createdAt)],
				status: advantage.status,
			})
		),
		createAdvantage,
		deleteAdvantage,
		toggleAdvantage,
	}
}
