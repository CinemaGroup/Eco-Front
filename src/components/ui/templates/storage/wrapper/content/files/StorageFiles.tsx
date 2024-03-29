import Icon from '@/components/ui/common/icon/Icon'
import { useStorageActions } from '@/hooks/api/storage/useStorageActions'
import { formatDate } from '@/utils/formats/date/format-date'
import Image from 'next/image'
import type { FC } from 'react'
import styles from './StorageFiles.module.scss'
import type { IStorageFiles } from './interface/storage-files.interface'
import { STORAGE_MIME_TYPES } from './mime-types/mime-type.data'

const StorageFiles: FC<IStorageFiles> = ({ files, onFileSelect }) => {
	const { deleteFileOrFolder } = useStorageActions('file')

	return (
		<ul className={styles.files}>
			{files.map((file, index) => (
				<li key={index} className={styles.file}>
					<button
						type='button'
						className={styles.btn}
						onClick={() => onFileSelect(`/${file.path}`)}
					>
						<Image
							priority
							draggable={false}
							width={30}
							height={40}
							src={
								STORAGE_MIME_TYPES[file.extension] ||
								STORAGE_MIME_TYPES['default']
							}
							alt={file.name}
						/>
						<span>{file.name}</span>
						<div className={styles.info}>
							<span>{formatDate(file.createdAt)}</span>
							<span>{file.size}</span>
						</div>
					</button>
					<button
						type='button'
						className={styles.remove}
						onClick={() => {
							deleteFileOrFolder({
								variables: {
									path: file.path,
								},
							})
						}}
					>
						<Icon name="X" />
					</button>
				</li>
			))}
		</ul>
	)
}

export default StorageFiles
