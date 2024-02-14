import Field from '@/components/ui/form-elements/field/Field'
import PasswordField from '@/components/ui/form-elements/password-field/PasswordField'
import { useAuthLogin } from '@/hooks/api/auth/useAuthLogin'
import type { FC } from 'react'
import styles from '../Auth.module.scss'

const LoginForm: FC<{ onClick: () => void }> = ({ onClick }) => {
	const { handleSubmit, onSubmit, errors, registerInput } = useAuthLogin()

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<Field
				{...registerInput('loginOrEmail', {
					required: 'Логин или E-mail обязательное поле',
					minLength: {
						value: 5,
						message: 'Минимум 5 символов.',
					},
				})}
				className={styles.field}
				variant="manage"
				label="Логин или E-mail"
				error={errors.loginOrEmail}
			/>
			<PasswordField
				{...registerInput('password', {
					required: 'Пароль обязательное поле',
					minLength: {
						value: 6,
						message: 'Минимум 6 символов.',
					},
				})}
				className={styles.field}
				label="Пароль"
				error={errors.password}
			/>
			<button type="button" className={styles.change} onClick={onClick}>
				Зарегистрироваться
			</button>
			<button className={styles.submit}>Войти</button>
		</form>
	)
}

export default LoginForm
