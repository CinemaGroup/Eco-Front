import type { IContactMenu } from '../interface/contact.interface'

export const CONTACT: IContactMenu = {
	items: [
		{
			icon: {
				src: '/images/icons/whatsapp.png',
				width: 23,
				height: 23,
				alt: 'Whatsapp',
			},
			label: '',
			href: '/',
		},
		{
			icon: {
				src: '/images/icons/telegram.png',
				width: 23,
				height: 23,
				alt: 'Telegram',
			},
			label: '',
			href: '/',
		},
		{
			label: '+7 495 357 13 53',
			href: 'tel: 74953571353',
		},
	],
}
