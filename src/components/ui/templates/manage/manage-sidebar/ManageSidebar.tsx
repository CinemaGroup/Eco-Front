import SearchField from '@/components/ui/form-elements/search-field/SearchField'
import type { FC } from 'react'
import styles from './ManageSidebar.module.scss'
import type { IManageSidebar } from './interface/manage-sidebar.interface'
import ManageMenu from './menu/ManageMenu'
import { MANAGE_MENU_DATA } from './menu/data/manage-menu.data'

const ManageSidebar: FC<IManageSidebar> = ({
	handleSearch,
	searchTerm,
	className,
}) => {
	return (
		<div className={className && className}>
			<SearchField
				searchTerm={searchTerm}
				handleSearch={handleSearch}
				label="Поиск"
				placeholder="Найти ..."
				className={styles.search}
			/>
			<h2 className={styles.title}>Страницы</h2>
			<ManageMenu menu={MANAGE_MENU_DATA} />
		</div>
	)
}

export default ManageSidebar
