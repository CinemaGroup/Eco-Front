import { useStorage } from '@/hooks/helpers/storage/useStorage'
import type { FC } from 'react'
import styles from './StorageWrapper.module.scss'
import StorageActions from './actions/StorageActions'
import StorageContent from './content/StorageContent'
import type { IStorageWrapper } from './interface/storage-wrapper.interface'

const StorageWrapper: FC<IStorageWrapper> = ({ onFileSelect }) => {
	const { folderPath, data, goTo, previous, isFirst } = useStorage()

	return (
		<div className={styles.wrapper}>
			<StorageActions folderPath={folderPath} />
			<StorageContent
				folderPath={folderPath}
				onFileSelect={onFileSelect}
				data={data}
				goTo={goTo}
				previous={previous}
				isFirst={isFirst}
			/>
		</div>
	)
}

export default StorageWrapper
