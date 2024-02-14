import {
	GroupsDocument,
	useCreateGroupMutation,
	useDeleteGroupMutation,
	useGroupsQuery,
	useToggleGroupMutation,
	type QueryInput,
} from '@/__generated__/output'
import { ITableItem } from '@/components/ui/templates/manage/manage-table/interface/manage-table.interface'
import { ADMIN_EDITS, ADMIN_PAGES } from '@/constants/url.constants'
import { formatDate } from '@/utils/formats/date/format-date'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export const useManageGroups = (
	queryParams: QueryInput,
	debounceSearch: string
) => {
	const { push } = useRouter()

	const { data } = useGroupsQuery({
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

	const [createGroup] = useCreateGroupMutation({
		fetchPolicy: 'no-cache',
		onCompleted: ({ createGroup }) => {
			toast.success('Группа успешно создана.')
			push(`${ADMIN_EDITS.GROUP}/${createGroup.id}`)
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [deleteGroup] = useDeleteGroupMutation({
		fetchPolicy: 'no-cache',
		refetchQueries: [GroupsDocument],
		onCompleted: () => {
			toast.success('Группа успешно удалена.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [toggleGroup] = useToggleGroupMutation({
		fetchPolicy: 'no-cache',
		refetchQueries: [GroupsDocument],
		onCompleted: () => {
			toast.success('Статус группы успешно обновлен.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	return {
		data: data?.groups.map(
			(group): ITableItem => ({
				id: group.id,
				editUrl: `${ADMIN_EDITS.GROUP}/${group.id}`,
				preview: {
					src: group.imagePath,
					alt: group.name,
				},
				data: [group.name, formatDate(group.createdAt)],
				status: group.status,
			})
		),
		createGroup,
		deleteGroup,
		toggleGroup,
	}
}
