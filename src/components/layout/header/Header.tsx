import CallButton from '@/components/ui/templates/call-btn/CallButton'
import Contact from '@/components/ui/templates/contact/Contact'
import { CONTACT } from '@/components/ui/templates/contact/data/contact.data'
import Social from '@/components/ui/templates/social/Social'
import { SOCIAL } from '@/components/ui/templates/social/data/social.data'
import type { FC } from 'react'
import styles from './Header.module.scss'
import HeaderBand from './band/HeaderBand'
import Menu from './menu/Menu'
import { MENU } from './menu/data/menu.data'
import HeaderVideo from './video/HeaderVideo'

const Header: FC = () => {
	return (
		<header className={styles.header} id="top">
			<HeaderVideo src="/videos/header-video.webm" />
			<div className={styles.inner}>
				<div className={styles.left}>
					<Menu menu={MENU} />
					<HeaderBand />
					<Social social={SOCIAL} className={styles.social} />
				</div>
				<div className={styles.right}>
					<Contact contact={CONTACT} className={styles.contact} />
					<CallButton label="Заказать звонок" className={styles.call} />
				</div>
			</div>
		</header>
	)
}

export default Header
