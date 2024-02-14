import {
	useAdvantageByIdQuery,
	useUpdateAdvantageMutation,
	type UpdateAdvantageInput,
} from '@/__generated__/output'
import { ADMIN_PAGES } from '@/constants/url.constants'
import { getKeys } from '@/utils/helpers/get-keys.util'
import { useRouter } from 'next/navigation'
import { useForm, type SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useManageAdvantageEdit = (queryId: string) => {
	const {
		register: registerInput,
		control,
		formState: { errors },
		handleSubmit,
		setValue,
	} = useForm<UpdateAdvantageInput>({
		mode: 'onChange',
	})

	const { push } = useRouter()
	const advantageId = +queryId

	const { data } = useAdvantageByIdQuery({
		variables: {
			id: advantageId,
		},
		fetchPolicy: 'no-cache',
		onError: (error) => {
			toast.error(error.message)
		},
		onCompleted: ({ advantageById }) => {
			getKeys(advantageById).forEach(({ key, value }) => {
				setValue(key, value)
			})
		},
	})

	const [updateAdvantage] = useUpdateAdvantageMutation({
		fetchPolicy: 'no-cache',
		onCompleted: () => {
			push(ADMIN_PAGES.ADVANTAGES)
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const onSubmit: SubmitHandler<UpdateAdvantageInput> = async (data) => {
		await updateAdvantage({
			variables: {
				id: advantageId,
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
