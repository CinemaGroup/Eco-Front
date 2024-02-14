import Field from '@/components/ui/form-elements/field/Field'
import PasswordField from '@/components/ui/form-elements/password-field/PasswordField'
import { useAuthRegister } from '@/hooks/api/auth/useAuthRegister'
import { validEmail } from '@/utils/regex/email.regex'
import type { FC } from 'react'
import styles from '../Auth.module.scss'

const RegisterForm: FC<{ onClick: () => void }> = ({ onClick }) => {
	const { handleSubmit, onSubmit, registerInput, errors } = useAuthRegister()

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<Field
				{...registerInput('login', {
					required: 'Логин обязательное поле',
					minLength: {
						value: 5,
						message: 'Минимум 5 символов.',
					},
				})}
				className={styles.field}
				variant="manage"
				label="Логин"
				error={errors.login}
			/>
			<Field
				{...registerInput('email', {
					required: 'E-mail обязательное поле',
					pattern: {
						value: validEmail,
						message: 'Пожалуйста введите корректный E-mail',
					},
				})}
				className={styles.field}
				variant="manage"
				label="E-mail"
				error={errors.email}
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
				Войти
			</button>
			<button className={styles.submit}>Зарегистрироваться</button>
		</form>
	)
}

export default RegisterForm
