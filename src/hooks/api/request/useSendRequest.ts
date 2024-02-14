import {
	useSendRequestMutation,
	type RequestInput,
	RequestType,
} from '@/__generated__/output'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useSendRequest = (type?: RequestType) => {
	const {
		register: registerInput,
		formState: { errors },
		control,
		handleSubmit,
		reset
	} = useForm<RequestInput>({
		mode: 'onChange',
	})

	const [sendRequest] = useSendRequestMutation({
		onCompleted: () => {
			toast.success('Ваша заявка успешно отправлена')
		},
		onError: () => {
			toast.error('Ошибка при отправке заявки')
		},
	})

	const onSubmit: SubmitHandler<RequestInput> = (data) => {
		sendRequest({
			variables: {
				data: {
					name: data.name,
					phone: data.phone,
					type: type ? type : RequestType.Wash
				},
			},
		})

		reset()
	}

	return {registerInput, control, errors, handleSubmit, onSubmit }
}
