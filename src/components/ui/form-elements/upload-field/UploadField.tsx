import cn from 'clsx'
import Image from 'next/image'
import { useState, type FC } from 'react'
import Icon from '../../common/icon/Icon'
import Storage from '../../templates/storage/Storage'
import styles from './UploadField.module.scss'
import type { IUploadField } from './interface/upload-field.interface'

const UploadField: FC<IUploadField> = ({
	label,
	error,
	value,
	className,
	isNoImage = false,
	variant = 'poster',
	onChange,
}) => {
	const [isOpen, setIsOpen] = useState(false)

	const removeFile = () => {
		onChange(null)
	}

	const selectFile = (fileUrl: string) => {
		onChange(fileUrl)
		setIsOpen(false)
	}

	return (
		<div className={cn(styles.upload, className && className)}>
			<div className={styles.uploadWrapper}>
				<div className={styles.uploadFill}>
					{label && <p className={styles.label}>{label}</p>}
					{error && <p className={styles.error}>{error.message}</p>}
					<button
						type="button"
						className={styles.uploadBtn}
						onClick={() => setIsOpen(!isOpen)}
					>
						Выбрать файл
					</button>
					{value && (
						<button
							type="button"
							className={styles.remove}
							onClick={removeFile}
						>
							<Icon name="Trash2" />
						</button>
					)}
				</div>
				{!isNoImage && (
					<div
						className={cn(styles.uploadImage, {
							[styles.poster]: variant === 'poster',
							[styles.bigPoster]: variant === 'bigPoster',
							[styles.photo]: variant === 'photo',
							[styles.active]: value,
						})}
					>
						{value && (
							<Image
								quality={100}
								priority
								draggable={false}
								src={value}
								fill
								alt=""
							/>
						)}
					</div>
				)}
			</div>
			{isOpen && (
				<Storage
					onFileSelect={selectFile}
					closeModal={() => setIsOpen(false)}
				/>
			)}
		</div>
	)
}

export default UploadField
