import type { IFixedSocialMenu } from '../interface/fixed-social-menu.interface'

export const FIXED_SOCIAL_MENU: IFixedSocialMenu = {
	items: [
		{
			icon: {
				src: '/images/icons/phone-fixed.png',
				width: 40,
				height: 40,
				alt: 'Phone',
			},
			href: 'tel: 74953571753',
		},
		{
			icon: {
				src: '/images/icons/whatsapp-fixed.png',
				width: 40,
				height: 40,
				alt: 'Whatsapp',
			},
			href: 'https://api.whatsapp.com/send?phone=79253919535',
		},
		{
			icon: {
				src: '/images/icons/telegram-fixed.png',
				width: 40,
				height: 40,
				alt: 'Telegram',
			},
			href: 'https://t.me/+79253919535',
		},
	],
}
