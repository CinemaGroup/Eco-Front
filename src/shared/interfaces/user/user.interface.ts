import type { User } from '@/__generated__/output'

export interface IUserState
	extends Pick<User, 'login' | 'email' | 'avatarPath' | 'role'> {}

export interface IAuthResponse {
	accessToken: string
	user: IUserState
}
