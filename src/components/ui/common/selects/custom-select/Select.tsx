'use client'

import cn from 'clsx'
import { useState } from 'react'
import Icon from '../../icon/Icon'
import styles from './Select.module.scss'
import type { ISelect } from './interface/select.interface'

function CustomSelect<K>({
	data,
	onChange,
	value,
	label,
	variant = 'manage',
	placeholder,
	className,
	error,
}: ISelect<K>) {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div
			className={cn(
				styles.wrapper,
				{
					[styles.wrapperManage]: variant === 'manage',
					[styles.wrapperWhite]: variant === 'white',
				},
				className && className
			)}
		>
			{label && (
				<span
					className={cn(styles.label, {
						[styles.labelWhite]: variant === 'white',
						[styles.labelManage]: variant === 'manage',
					})}
				>
					{label}
				</span>
			)}
			{error && <span className={styles.error}>{error.message}</span>}
			<div className={styles.select}>
				<button
					type="button"
					className={cn(styles.opener, {
						[styles.active]: isOpen,
						[styles.openerWhite]: variant === 'white',
						[styles.openerManage]: variant === 'manage',
					})}
					onClick={() => setIsOpen(!isOpen)}
				>
					{value?.label ? value.label : placeholder ? placeholder : 'Select'}
					<Icon name="ChevronDown" />
				</button>
				{isOpen && (
					<ul className={styles.list}>
						{data
							.filter((item) => item.key !== value?.key)
							.map((item, index) => (
								<li
									key={index}
									className={cn(styles.item, {
										[styles.itemWhite]: variant === 'white',
										[styles.itemManage]: variant === 'manage',
									})}
								>
									<button
										type="button"
										className={styles.button}
										onClick={() => {
											onChange(item)
											setIsOpen(false)
										}}
										disabled={item.key === value?.key}
									>
										{item.label}
									</button>
								</li>
							))}
					</ul>
				)}
			</div>
		</div>
	)
}

export default CustomSelect
