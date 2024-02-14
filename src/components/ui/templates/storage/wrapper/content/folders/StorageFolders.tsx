import Icon from '@/components/ui/common/icon/Icon'
import { useStorageActions } from '@/hooks/api/storage/useStorageActions'
import { formatDate } from '@/utils/formats/date/format-date'
import Image from 'next/image'
import type { FC } from 'react'
import styles from './StorageFolders.module.scss'
import type { IStorageFolders } from './interface/storage-folders.interface'

const StorageFolders: FC<IStorageFolders> = ({ folders, goTo }) => {
	const { deleteFileOrFolder } = useStorageActions('folder')

	return (
		<ul className={styles.folders}>
			{folders.map((folder, index) => (
				<li key={index} className={styles.folder}>
					<button type='button' className={styles.btn} onClick={() => goTo(folder.path)}>
						<Image
							priority
							draggable={false}
							width={40}
							height={30}
							src="/images/other/storage/folder.svg"
							alt={folder.name}
						/>
						<span>{folder.name}</span>
						<div className={styles.info}>
							<span>{formatDate(folder.createdAt)}</span>
							<span>{folder.size}</span>
						</div>
					</button>
					<button
						className={styles.remove}
						onClick={() => {
							deleteFileOrFolder({
								variables: {
									path: folder.path,
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

export default StorageFolders
