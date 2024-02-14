import {
	CategoriesDocument,
	useCategoriesQuery,
	useCreateCategoryMutation,
	useDeleteCategoryMutation,
	useToggleCategoryMutation,
	type QueryInput,
} from '@/__generated__/output'
import { ITableItem } from '@/components/ui/templates/manage/manage-table/interface/manage-table.interface'
import { ADMIN_EDITS } from '@/constants/url.constants'
import { formatDate } from '@/utils/formats/date/format-date'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export const useManageCategories = (
	queryParams: QueryInput,
	debounceSearch: string
) => {
	const { push } = useRouter()

	const { data } = useCategoriesQuery({
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

	const [createCategory] = useCreateCategoryMutation({
		fetchPolicy: 'no-cache',
		onCompleted: ({ createCategory }) => {
			toast.success('Категория успешно создана.')
			push(`${ADMIN_EDITS.CATEGORY}/${createCategory.id}`)
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [deleteCategory] = useDeleteCategoryMutation({
		fetchPolicy: 'no-cache',
		refetchQueries: [CategoriesDocument],
		onCompleted: () => {
			toast.success('Категория успешно удалена.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [toggleCategory] = useToggleCategoryMutation({
		fetchPolicy: 'no-cache',
		refetchQueries: [CategoriesDocument],
		onCompleted: () => {
			toast.success('Статус категории успешно обновлен.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	return {
		data: data?.categories.map(
			(category): ITableItem => ({
				id: category.id,
				editUrl: `${ADMIN_EDITS.CATEGORY}/${category.id}`,
				preview: {
					src: category.imagePath,
					alt: category.name,
				},
				data: [category.name, formatDate(category.createdAt)],
				status: category.status,
			})
		),
		createCategory,
		deleteCategory,
		toggleCategory,
	}
}
