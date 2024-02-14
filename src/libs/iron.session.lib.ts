import type { User } from '@/__generated__/output'
import { IS_PRODUCTION } from '@/constants/global.constants'
import {
	IronSessionData,
	IronSessionOptions,
	getIronSession,
	getServerActionIronSession,
} from 'iron-session'

import { cookies } from 'next/headers'

export const sessionOptions: IronSessionOptions = {
	password: process.env.IRON_PASSWORD as string,
	cookieName: 'ECO_DRY-IRON',
	cookieOptions: {
		secure: IS_PRODUCTION,
	},
}

declare module 'iron-session' {
	interface IronSessionData {
		user?: User | null
	}
}

const getSession = async (req: Request, res: Response) => {
	const session = getIronSession<IronSessionData>(req, res, sessionOptions)
	return session
}

const getServerActionSession = async () => {
	const session = getServerActionIronSession<IronSessionData>(
		sessionOptions,
		cookies()
	)
	return session
}

export { getServerActionSession, getSession }
