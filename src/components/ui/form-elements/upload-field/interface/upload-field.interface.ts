import type { FieldError } from 'react-hook-form'

export interface IUploadField {
	value?: string | null
	label?: string
	error?: FieldError
	className?: string
	isNoImage?: boolean
	variant?: 'poster' | 'bigPoster' | 'photo'
	onChange: (...event: any[]) => void
}
