import cn from 'clsx'
import type { FC } from 'react'
import Icon from '../../common/icon/Icon'
import styles from './SearchField.module.scss'
import type { ISearchField } from './interface/search-field.interface'

const SearchField: FC<ISearchField> = ({
	searchTerm,
	handleSearch,
	className,
	placeholder,
	label,
}) => {
	return (
		<div className={styles.field}>
			{label && <label className={styles.label}>{label}</label>}
			<div className={cn(styles.search, className && className)}>
				<input
					placeholder={placeholder || 'Поиск'}
					value={searchTerm}
					onChange={handleSearch}
					className={styles.input}
				/>
				<Icon className={styles.icon} name="Search" />
			</div>
		</div>
	)
}

export default SearchField
