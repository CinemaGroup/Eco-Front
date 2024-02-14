import type { FieldError } from 'react-hook-form'

export interface IColorPalette {
	label?: string
	error?: FieldError | undefined
	className?: string
	errorColor?: 'white' | 'red'
	value: string
	onChange: () => void
}
