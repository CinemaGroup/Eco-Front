import cn from 'clsx'
import { forwardRef } from 'react'
import { IMaskInput } from 'react-imask'
import type { TypeMaskedInputPropsField } from '../interface/field.interface'
import styles from './MaskedField.module.scss'

const MaskedField = forwardRef<HTMLInputElement, TypeMaskedInputPropsField>(
	(
		{
			placeholder,
			label,
			variant,
			error,
			errorColor = 'red',
			className,
			onChange,
			value,
			...rest
		},
		ref
	) => {
		return (
			<div className={cn(styles.field, className && className)}>
				{label && <p className={styles.label}>{label}</p>}
				{error && (
					<p
						className={cn(styles.error, {
							[styles.errorRed]: errorColor === 'red',
							[styles.errorWhite]: errorColor === 'white',
						})}
					>
						{error.message}
					</p>
				)}
				<IMaskInput
					ref={ref}
					placeholder={placeholder}
					{...rest}
					className={cn(styles.input, {
						[styles.big]: variant === 'big',
						[styles.small]: variant === 'small',
					})}
					value={value}
					onChange={onChange}
				/>
			</div>
		)
	}
)

MaskedField.displayName = 'MaskedField'

export default MaskedField
