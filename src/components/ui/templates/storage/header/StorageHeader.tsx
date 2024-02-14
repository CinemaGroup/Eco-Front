import Icon from '@/components/ui/common/icon/Icon'
import type { FC } from 'react'
import styles from './StorageHeader.module.scss'
import type { IStorageHeader } from './interface/storage-header.interface'

const StorageHeader: FC<IStorageHeader> = ({ closeModal }) => {
	return (
		<div className={styles.header}>
			<div className={styles.box}>
				<div className={styles.icon}>
					<Icon name="Folder" />
				</div>
				<div className={styles.heading}>
					<span className={styles.supTitle}>Apps</span>
					<h3 className={styles.title}>File Manager</h3>
				</div>
			</div>
			<button type='button' className={styles.close} onClick={closeModal}>
				<Icon name="X" />
			</button>
		</div>
	)
}

export default StorageHeader
