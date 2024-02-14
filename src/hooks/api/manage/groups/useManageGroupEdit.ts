import {
	useGroupByIdQuery,
	useUpdateGroupMutation,
	type UpdateGroupInput,
} from '@/__generated__/output'
import { ADMIN_PAGES } from '@/constants/url.constants'
import { getKeys } from '@/utils/helpers/get-keys.util'
import { useRouter } from 'next/navigation'
import { useForm, type SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useManageGroupEdit = (queryId: string) => {
	const {
		register: registerInput,
		control,
		formState: { errors },
		handleSubmit,
		setValue,
	} = useForm<UpdateGroupInput>({
		mode: 'onChange',
	})

	const { push } = useRouter()
	const groupId = +queryId
	console.log(groupId)

	const { data } = useGroupByIdQuery({
		variables: {
			id: groupId,
		},
		fetchPolicy: 'no-cache',
		onError: (error) => {
			toast.error(error.message)
		},
		onCompleted: ({ groupById }) => {
			console.log(getKeys(groupById))
			getKeys(groupById).forEach(({ key, value }) => {
				setValue(key, value)
			})
		},
	})

	const [updateGroup] = useUpdateGroupMutation({
		fetchPolicy: 'no-cache',
		onCompleted: () => {
			push(ADMIN_PAGES.GROUPS)
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const onSubmit: SubmitHandler<UpdateGroupInput> = async (data) => {
		await updateGroup({
			variables: {
				id: groupId,
				data,
			},
		})
	}

	return {
		registerInput,
		control,
		errors,
		handleSubmit,
		onSubmit,
		data,
	}
}
