'use client'

import { useAuthForm } from '@/hooks/api/auth/useAuthForm'
import type { FC } from 'react'
import styles from './Auth.module.scss'
import LoginForm from './forms/LoginForm'
import RegisterForm from './forms/RegisterForm'

const Auth: FC = () => {
	const { isLogin, type, changeType } = useAuthForm()

	return (
		<div className={styles.auth}>
			<h1 className={styles.title}>{isLogin ? 'Вход' : 'Регистрация'}</h1>
			{isLogin ? (
				<LoginForm onClick={() => changeType(type)} />
			) : (
				<RegisterForm onClick={() => changeType(type)} />
			)}
		</div>
	)
}

export default Auth
