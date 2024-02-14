import type { FC } from 'react'
import styles from './ContactMenu.module.scss'
import type { IContactMenu } from './interface/contact-menu.interface'
import ContactMenuItem from './item/ContactMenuItem'

const ContactMenu: FC<{ menu: IContactMenu }> = ({ menu: { items } }) => {
	return (
		<ul className={styles.list}>
			{items.map((item, index) => (
				<ContactMenuItem key={index} item={item} />
			))}
		</ul>
	)
}

export default ContactMenu
