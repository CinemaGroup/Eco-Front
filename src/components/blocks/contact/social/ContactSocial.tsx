import type { FC } from 'react'
import styles from './ContactSocial.module.scss'
import type { IContactSocial } from './interface/contact-social.interface'
import ContactSocialItem from './item/ContactSocialItem'

const ContactSocial: FC<{ social: IContactSocial }> = ({
	social: { items },
}) => {
	return (
		<ul className={styles.list}>
			{items.map((item, index) => (
				<ContactSocialItem key={index} item={item} />
			))}
		</ul>
	)
}

export default ContactSocial
