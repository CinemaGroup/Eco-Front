import type { Exact, QueryInput, Status } from '@/__generated__/output'
import type { IImage } from '@/components/ui/common/image/interface/image.interface'
import {
	ApolloCache,
	DefaultContext,
	MutationFunctionOptions,
} from '@apollo/client'

export interface ITableItem {
	id: number
	editUrl: string
	preview?: {
		src: string
		alt: string
	}
	data: (string | number)[]
	status: Status
}

export interface IManageTableItem {
	item: ITableItem
	removeHandler: () => void
	toggleHandler: () => void
}

export interface IManageTable {
	items: ITableItem[]
	headerItems: string[]
	queryParams: QueryInput
	toggleHandler: (
		options?:
			| MutationFunctionOptions<
					any,
					Exact<{
						id: number
					}>,
					DefaultContext,
					ApolloCache<any>
			  >
			| undefined
	) => void
	removeHandler: (
		options?:
			| MutationFunctionOptions<
					any,
					Exact<{
						id: number
					}>,
					DefaultContext,
					ApolloCache<any>
			  >
			| undefined
	) => void
	updateQueryFilters: (key: string, value: string | null) => void
}
