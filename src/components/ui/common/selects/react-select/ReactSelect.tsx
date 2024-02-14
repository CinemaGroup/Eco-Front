'use client'

import '@/assets/styles/react-select.scss'
import cn from 'clsx'
import { useId, type FC } from 'react'
import Select, { type OnChangeValue } from 'react-select'
import makeAnimated from 'react-select/animated'
import CreatableSelect from 'react-select/creatable'
import styles from './ReactSelect.module.scss'
import type {
	IOption,
	IReactSelect,
	IReactSelectValue,
} from './interface/react-select.interface'

const animatedComponents = makeAnimated()

const ReactSelect: FC<IReactSelect> = ({
	placeholder,
	label,
	error,
	isMulti = true,
	isSearchable = true,
	isCreatable = false,
	isClearable = true,
	options,
	field,
	isLoading,
	className,
	errorColor = 'red',
}) => {
	const onChange = (newValue: unknown | OnChangeValue<IOption, boolean>) => {
		if (!newValue) return field.onChange(isMulti ? [] : '')

		if (isMulti) {
			field.onChange(
				(newValue as IOption[]).map((item) => ({
					name: item.label,
					id: item.value,
				}))
			)
		} else {
			field.onChange(newValue as IReactSelectValue)
		}
	}

	const getValue = () => {
		if (field.value) {
			if (isMulti) {
				const fieldIds = field.value.map((item: IReactSelectValue) => item.id)
				const filteredOptions = options.filter((option) =>
					fieldIds.includes(option.value)
				)

				return filteredOptions
			} else {
				return options.find((option) => option.value === field.value.id)
			}
		} else {
			return isMulti ? [] : ''
		}
	}

	return (
		<div className={cn(styles.selectContainer, className && className)}>
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
			{isCreatable ? (
				<CreatableSelect
					instanceId={useId()}
					classNamePrefix={`react-select`}
					options={options}
					isMulti={isMulti}
					onChange={onChange}
					value={getValue()}
					components={animatedComponents}
					isClearable={isClearable}
					isLoading={isLoading}
					placeholder={placeholder || ''}
					menuPosition={'fixed'}
				/>
			) : (
				<Select
					instanceId={useId()}
					classNamePrefix={`react-select`}
					options={options}
					value={getValue()}
					isMulti={isMulti}
					isSearchable={isSearchable}
					isClearable={isClearable}
					onChange={onChange}
					components={animatedComponents}
					isLoading={isLoading}
					placeholder={placeholder || ''}
					menuPosition="fixed"
				/>
			)}
		</div>
	)
}

export default ReactSelect
