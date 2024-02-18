import type { IContactMenu } from '../interface/contact-menu.interface'

export const CONTACT_MENU: IContactMenu = {
	items: [
		{
			label: '+7 495 357 17 53',
			href: 'tel: 74953571753',
			icon: {
				src: '/images/icons/phone.png',
				width: 45,
				height: 45,
				alt: 'Phone',
			},
		},
		{
			label: 'ул Летниковская д 4 стр 5',
			href: '/',
			icon: {
				src: '/images/icons/map.png',
				width: 45,
				height: 45,
				alt: 'Map',
			},
		},
		{
			label: 'info@eco-dry.ru',
			href: 'mailto: info@eco-dry.ru',
			icon: {
				src: '/images/icons/e-mail.png',
				width: 45,
				height: 45,
				alt: 'E-mail',
			},
		},
	],
}
