import {
	RubricsDocument,
	useCreateRubricMutation,
	useDeleteRubricMutation,
	useRubricsQuery,
	useToggleRubricMutation,
	type QueryInput,
} from '@/__generated__/output'
import { ITableItem } from '@/components/ui/templates/manage/manage-table/interface/manage-table.interface'
import { ADMIN_EDITS } from '@/constants/url.constants'
import { formatDate } from '@/utils/formats/date/format-date'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export const useManageRubrics = (
	queryParams: QueryInput,
	debounceSearch: string
) => {
	const { push } = useRouter()

	const { data } = useRubricsQuery({
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

	const [createRubric] = useCreateRubricMutation({
		fetchPolicy: 'no-cache',
		onCompleted: ({ createRubric }) => {
			toast.success('Рубрика успешно создана.')
			push(`${ADMIN_EDITS.RUBRIC}/${createRubric.id}`)
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [deleteRubric] = useDeleteRubricMutation({
		fetchPolicy: 'no-cache',
		refetchQueries: [RubricsDocument],
		onCompleted: () => {
			toast.success('Рубрика успешно удалена.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [toggleRubric] = useToggleRubricMutation({
		fetchPolicy: 'no-cache',
		refetchQueries: [RubricsDocument],
		onCompleted: () => {
			toast.success('Статус рубрики успешно обновлен.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	return {
		data: data?.rubrics.map(
			(rubric): ITableItem => ({
				id: rubric.id,
				editUrl: `${ADMIN_EDITS.RUBRIC}/${rubric.id}`,
				preview: {
					src: rubric.imagePath,
					alt: rubric.name,
				},
				data: [rubric.name, formatDate(rubric.createdAt)],
				status: rubric.status,
			})
		),
		createRubric,
		deleteRubric,
		toggleRubric,
	}
}
