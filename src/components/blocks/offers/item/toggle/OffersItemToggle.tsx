'use client'

import Icon from '@/components/ui/common/icon/Icon'
import Modal from '@/components/ui/templates/modal/Modal'
import { useState, type FC } from 'react'
import styles from '../../Offers.module.scss'
import OffersItemAbout from '../about/OffersItemAbout'

const OffersItemToggle: FC<{ about: string }> = ({ about }) => {
	const [isShow, setIsShow] = useState(false)

	return (
		<>
			<button className={styles.toggle} onClick={() => setIsShow(true)}>
				<Icon name="ChevronRight" />
			</button>
			{isShow && (
				<Modal closeModal={() => setIsShow(false)}>
					<OffersItemAbout about={about} />
				</Modal>
			)}
		</>
	)
}

export default OffersItemToggle
