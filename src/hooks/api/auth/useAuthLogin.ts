import {
	GetNewTokensDocument,
	useLoginMutation,
	type AuthLoginInput,
	type AuthResponse,
} from '@/__generated__/output'
import { setServerSession } from '@/server/auth/get-server-session'
import { CookieService } from '@/services/cookie/cookie.service'
import { useSetAuth } from '@/store/store'
import { useForm, type SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useAuthLogin = () => {
	const {
		register: registerInput,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm<AuthLoginInput>({
		mode: 'onChange',
	})

	const [login] = useLoginMutation({
		refetchQueries: [GetNewTokensDocument],
	})

	const onSubmit: SubmitHandler<AuthLoginInput> = async (data) => {
		const onSuccess = (data: any) => {
			const response = data?.data?.login as AuthResponse

			if (!response) throw new Error('Ошибка при входе в систему')

			useSetAuth(response.user)
			CookieService.setAccessToken(response.accessToken)
			setServerSession(response.user)
			reset()

			return 'Успешно вошли в систему'
		}

		const toastOptions = {
			loading: 'Loading',
			success: onSuccess,
			error: () => {
				return 'Ошибка при входе в систему'
			},
		}

		toast.promise(
			login({
				variables: { data },
			}),
			toastOptions
		)
	}

	return { registerInput, errors, handleSubmit, onSubmit, reset }
}
