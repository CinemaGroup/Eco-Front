import Container from '@/components/ui/common/container/Container'
import Heading from '@/components/ui/common/heading/Heading'
import Section from '@/components/ui/common/section/Section'
import type { FC } from 'react'
import styles from './Contact.module.scss'
import ContactMenu from './menu/ContactMenu'
import { CONTACT_MENU } from './menu/data/contact-menu.data'
import ContactSocial from './social/ContactSocial'
import { CONTACT_SOCIAL } from './social/data/contact-social.data'

const Contact: FC = () => {
	return (
		<Section className={styles.section} id='contacts'>
			<Container variant="small">
				<div className={styles.contact}>
					<Heading className={styles.heading}>КОНТАКТЫ</Heading>
					<ContactMenu menu={CONTACT_MENU} />
					<ContactSocial social={CONTACT_SOCIAL} />
				</div>
			</Container>
		</Section>
	)
}

export default Contact
