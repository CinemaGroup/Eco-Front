'use client'

import cn from 'clsx'
import { forwardRef, useState } from 'react'
import Icon from '../../common/icon/Icon'
import Field from '../field/Field'
import type { TypeField } from '../interface/field.interface'
import styles from './PasswordField.module.scss'

const PasswordField = forwardRef<HTMLInputElement, Omit<TypeField, 'variant'>>(
	(
		{
			label,
			className,
			placeholder,
			error,
			style,
			errorColor = 'red',
			...rest
		},
		ref
	) => {
		const [isShow, setIsShow] = useState(false)

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
				<div className={styles.box}>
					<input
						ref={ref}
						type={isShow ? 'text' : 'password'}
						{...rest}
						placeholder={placeholder}
						className={styles.input}
					/>
					<button
						type="button"
						className={styles.show}
						onClick={() => setIsShow(!isShow)}
					>
						{isShow ? <Icon name="EyeOff" /> : <Icon name="Eye" />}
					</button>
				</div>
			</div>
		)
	}
)

Field.displayName = 'PasswordField'

export default PasswordField
