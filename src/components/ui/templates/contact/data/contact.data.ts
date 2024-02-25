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
			href: 'https://api.whatsapp.com/send?phone=79253919535',
		},
		{
			icon: {
				src: '/images/icons/telegram.png',
				width: 23,
				height: 23,
				alt: 'Telegram',
			},
			label: '',
			href: 'https://t.me/+79253919535',
		},
		{
			label: '+7 495 357 17 53',
			href: 'tel: 74953571753',
		},
		{
			label: '+7 925 391 95 35',
			href: 'tel: 79253919535',
		},
	],
}
