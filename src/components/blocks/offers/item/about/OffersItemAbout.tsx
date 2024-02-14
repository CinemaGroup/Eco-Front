import type { FC } from 'react'
import styles from './OffersItemAbout.module.scss'

const OffersItemAbout: FC<{ about: string }> = ({ about }) => {
	return (
		<div className={styles.about}>
			<h2 className={styles.title}>Описание</h2>
			<div
				className={styles.description}
				dangerouslySetInnerHTML={{ __html: about }}
			/>
		</div>
	)
}

export default OffersItemAbout
