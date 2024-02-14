import { InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'
import type { IMaskMixinProps } from 'react-imask'

export interface IFieldProps {
	labelSize?: 'small' | 'big'
	errorColor?: 'white' | 'red'
	error?: FieldError | undefined
	className?: string
}

export type TypeField = InputHTMLAttributes<HTMLInputElement> &
	IFieldProps & {
		label?: string
		variant: 'big' | 'small' | 'manage'
		theme?: 'white' | 'black'
		labelColor?: 'white' | 'black'
	}

export type TypeMaskedInputPropsField = IMaskMixinProps<HTMLInputElement> &
	IFieldProps & {
		placeholder?: string
		label?: string
		variant: 'big' | 'small' | 'manage'
		onChange: () => void
	}
