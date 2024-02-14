import type { FieldError } from 'react-hook-form'

export interface ISelectItem<K = string> {
	label: string
	key: K
}

export interface ISelect<K = string> {
	variant?: 'white' | 'manage'
	data: ISelectItem<K>[]
	onChange: (item: ISelectItem<K>) => void
	value?: ISelectItem<K>
	label?: string
	placeholder?: string
	error?: FieldError | undefined
	className?: string
}
