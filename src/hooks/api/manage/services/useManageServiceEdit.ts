import {
	useServiceByIdQuery,
	useUpdateServiceMutation,
	type UpdateServiceInput,
} from '@/__generated__/output'
import { ADMIN_PAGES } from '@/constants/url.constants'
import { getKeys } from '@/utils/helpers/get-keys.util'
import { useRouter } from 'next/navigation'
import { useForm, type SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useManageServiceEdit = (queryId: string) => {
	const {
		register: registerInput,
		control,
		formState: { errors },
		handleSubmit,
		setValue,
	} = useForm<UpdateServiceInput>({
		mode: 'onChange',
	})

	const { push } = useRouter()
	const serviceId = +queryId

	const { data } = useServiceByIdQuery({
		variables: {
			id: serviceId,
		},
		fetchPolicy: 'no-cache',
		onError: (error) => {
			toast.error(error.message)
		},
		onCompleted: ({ serviceById }) => {
			getKeys(serviceById).forEach(({ key, value }) => {
				setValue(key, value)
			})
		},
	})

	const [updateService] = useUpdateServiceMutation({
		fetchPolicy: 'no-cache',
		onCompleted: () => {
			push(ADMIN_PAGES.SERVICES)
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const onSubmit: SubmitHandler<UpdateServiceInput> = async (data) => {
		await updateService({
			variables: {
				id: serviceId,
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
