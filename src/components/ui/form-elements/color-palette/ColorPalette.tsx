import cn from 'clsx'
import { type FC } from 'react'
import ColorPicker from 'react-best-gradient-color-picker'
import styles from './ColorPalette.module.scss'
import type { IColorPalette } from './interface/color-palette.interface'

const ColorPalette: FC<IColorPalette> = ({
	label,
	className,
	error,
	errorColor = 'red',
	value,
	onChange,
}) => {
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
			<ColorPicker
				className={className && className}
				value={value}
				onChange={onChange}
			/>
		</div>
	)
}

export default ColorPalette
