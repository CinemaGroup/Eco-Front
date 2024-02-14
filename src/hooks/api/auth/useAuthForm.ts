import { UserRole } from '@/__generated__/output'
import {
	ADMIN_PAGES,
	PUBLIC_PAGES,
} from '@/constants/url.constants'
import type { TypeAuth } from '@/shared/types/auth/auth.type'
import { useAuthStore } from '@/store/store'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

// TODO: Remove redirectTo if not used
export const useAuthForm = () => {
	const { user } = useAuthStore()
	const { replace } = useRouter()
	const searchParams = useSearchParams()

	const type: TypeAuth = (searchParams.get('type') || 'login') as TypeAuth
	const isLogin = type === 'login'

	const changeType = (type: TypeAuth) => {
		replace(type === 'login' ? ADMIN_PAGES.REGISTER : ADMIN_PAGES.LOGIN)
	}

	const redirectTo = searchParams.get('to')

	useEffect(() => {
		if (!user) return

		if (redirectTo) {
			replace(redirectTo)
			return
		}

		replace(user.role === UserRole.Admin ? ADMIN_PAGES.GROUPS : PUBLIC_PAGES.HOME)
	}, [user, redirectTo, replace])

	return { isLogin, type, changeType }
}
