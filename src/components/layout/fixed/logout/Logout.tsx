'use client'

import { useLogoutMutation } from '@/__generated__/output'
import Icon from '@/components/ui/common/icon/Icon'
import { PUBLIC_PAGES } from '@/constants/url.constants'
import { AuthService } from '@/services/auth/auth.service'
import { useGetAuth } from '@/store/store'
import { useRouter } from 'next/navigation'
import type { FC } from 'react'
import styles from './Logout.module.scss'

const Logout: FC = () => {
	const user = useGetAuth()
	const { push } = useRouter()

	const [logout] = useLogoutMutation({
		onCompleted() {
			AuthService.removeUser()
			push(PUBLIC_PAGES.HOME)
		},
	})

	return (
		user && (
			<button onClick={() => logout()} title="Logout" className={styles.logout}>
				<Icon name="LogOut" />
			</button>
		)
	)
}

export default Logout
