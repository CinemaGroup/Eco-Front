import type { FC } from 'react'
import styles from './ManageCreateButton.module.scss'
import Icon from '@/components/ui/common/icon/Icon'

const ManageCreateButton: FC<{ onClick: () => void }> = ({ onClick }) => {
	return (
		<button className={styles.button} onClick={onClick} type='button'>
			<Icon name="ListPlus" />
			Создать
		</button>
	)
}

export default ManageCreateButton
