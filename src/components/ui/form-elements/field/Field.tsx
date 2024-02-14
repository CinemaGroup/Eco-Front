import cn from 'clsx'
import { forwardRef } from 'react'
import type { TypeField } from '../interface/field.interface'
import styles from './Field.module.scss'

const Field = forwardRef<HTMLInputElement, TypeField>(
	(
		{
			variant,
			className,
			label,
			placeholder,
			error,
			type = 'text',
			theme = 'white',
			style,
			errorColor = 'red',
			labelColor = 'white',
			labelSize = 'small',
			...rest
		},
		ref
	) => {
		return (
			<div className={cn(styles.field, className && className)}>
				{label && (
					<p
						className={cn(styles.label, {
							[styles.labelBlack]: labelColor === 'black',
							[styles.labelWhite]: labelColor === 'white',
							[styles.labelSmall]: labelSize === 'small',
							[styles.labelBig]: labelSize === 'big',
						})}
					>
						{label}
					</p>
				)}
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
				<input
					ref={ref}
					type={type}
					{...rest}
					placeholder={placeholder}
					className={cn(styles.input, {
						[styles.big]: variant === 'big',
						[styles.small]: variant === 'small',
						[styles.manage]: variant === 'manage',
						[styles.white]: theme === 'white',
						[styles.black]: theme === 'black',
					})}
				/>
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field
