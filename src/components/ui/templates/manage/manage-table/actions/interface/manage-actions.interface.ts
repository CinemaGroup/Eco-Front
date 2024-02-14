import { Status } from '@/__generated__/output'

export interface IManageActions {
	status: Status
	editUrl: string
	toggleHandler: () => void
	removeHandler: () => void
}