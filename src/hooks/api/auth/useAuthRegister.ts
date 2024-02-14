import {
	GetNewTokensDocument,
	useRegisterMutation,
	type AuthRegisterInput,
	type AuthResponse,
} from '@/__generated__/output'
import { setServerSession } from '@/server/auth/get-server-session'
import { CookieService } from '@/services/cookie/cookie.service'
import { useSetAuth } from '@/store/store'
import { useForm, type SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useAuthRegister = () => {
	const {
		register: registerInput,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm<AuthRegisterInput>({
		mode: 'onChange',
	})

	const [register] = useRegisterMutation({
		refetchQueries: [GetNewTokensDocument],
	})

	const onSubmit: SubmitHandler<AuthRegisterInput> = async (data) => {
		const onSuccess = (data: any) => {
			const response = data?.data?.register as AuthResponse

			if (!response) throw new Error('Ошибка при регистрации')

			useSetAuth(response.user)
			CookieService.setAccessToken(response.accessToken)
			setServerSession(response.user)
			reset()

			return 'Пользователь успешно зарегистрирован'
		}

		const toastOptions = {
			loading: 'Loading',
			success: onSuccess,
			error: () => {
				return 'Ошибка при регистрации'
			},
		}

		toast.promise(
			register({
				variables: { data },
			}),
			toastOptions
		)
	}

	return { registerInput, errors, handleSubmit, onSubmit, reset }
}
