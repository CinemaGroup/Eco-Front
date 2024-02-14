import type { IFieldProps } from '@/components/ui/form-elements/interface/field.interface'
import type { ControllerRenderProps } from 'react-hook-form'
import type { Options } from 'react-select'

export interface IReactSelectValue {
	id: number
	name: string
}

export interface IOption {
	label: string
	value: string | number
}

export interface IReactSelect extends IFieldProps {
	label?: string
	placeholder?: string
	options: Options<IOption>
	isMulti?: boolean
	field: ControllerRenderProps<any, any>
	isLoading?: boolean
	isSearchable?: boolean
	isCreatable?: boolean
	isClearable?: boolean
	errorColor?: 'white' | 'red'
}
