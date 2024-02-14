import Container from '@/components/ui/common/container/Container'
import CallButton from '@/components/ui/templates/call-btn/CallButton'
import Contact from '@/components/ui/templates/contact/Contact'
import { CONTACT } from '@/components/ui/templates/contact/data/contact.data'
import type { FC } from 'react'
import Logo from '../header/band/logo/Logo'
import styles from './Footer.module.scss'
import FooterLinks from './links/FooterLinks'
import { FOOTER_LINKS } from './links/data/footer-links.data'
import FooterMenu from './menu/FooterMenu'
import { FOOTER_MENU } from './menu/data/footer-menu.data'

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<Container variant="biggest">
				<div className={styles.inner}>
					<div className={styles.left}>
						<div className={styles.menu}>
							<Logo className={styles.logo} />
							<FooterMenu menu={FOOTER_MENU} />
						</div>
						<div className={styles.links}>
							<FooterLinks links={FOOTER_LINKS} />
						</div>
					</div>
					<div className={styles.right}>
						<Contact contact={CONTACT} className={styles.contact} />
						<CallButton className={styles.call} label="Перезвонить" />
					</div>
				</div>
			</Container>
		</footer>
	)
}

export default Footer
