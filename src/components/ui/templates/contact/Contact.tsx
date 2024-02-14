import cn from 'clsx'
import type { FC } from 'react'
import styles from './Contact.module.scss'
import type { IContact } from './interface/contact.interface'
import ContactItem from './item/ContactItem'

const Contact: FC<IContact> = ({ contact: { items }, className }) => {
	return (
		<ul className={cn(styles.list, className && className)}>
			{items.map((item, index) => (
				<ContactItem key={index} item={item} />
			))}
		</ul>
	)
}

export default Contact
