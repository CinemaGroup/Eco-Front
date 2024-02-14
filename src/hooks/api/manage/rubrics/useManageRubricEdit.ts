import {
	useRubricByIdQuery,
	useUpdateRubricMutation,
	type UpdateRubricInput,
} from '@/__generated__/output'
import { ADMIN_PAGES } from '@/constants/url.constants'
import { getKeys } from '@/utils/helpers/get-keys.util'
import { useRouter } from 'next/navigation'
import { useForm, type SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useManageRubricEdit = (queryId: string) => {
	const {
		register: registerInput,
		control,
		formState: { errors },
		handleSubmit,
		setValue,
	} = useForm<UpdateRubricInput>({
		mode: 'onChange',
	})

	const { push } = useRouter()
	const rubricId = +queryId

	const { data } = useRubricByIdQuery({
		variables: {
			id: rubricId,
		},
		fetchPolicy: 'no-cache',
		onError: (error) => {
			toast.error(error.message)
		},
		onCompleted: ({ rubricById }) => {
			console.log(getKeys(rubricById))
			getKeys(rubricById).forEach(({ key, value }) => {
				setValue(key, value)
			})
		},
	})

	const [updateRubric] = useUpdateRubricMutation({
		fetchPolicy: 'no-cache',
		onCompleted: () => {
			push(ADMIN_PAGES.RUBRICS)
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const onSubmit: SubmitHandler<UpdateRubricInput> = async (data) => {
		await updateRubric({
			variables: {
				id: rubricId,
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
