import type { IContactSocial } from '../interface/contact-social.interface'

export const CONTACT_SOCIAL: IContactSocial = {
	items: [
		{
			icon: {
				src: '/images/icons/instagram-red.png',
				width: 45,
				height: 45,
				alt: 'Instagram'
			},
			href: '/'
		},
		{
			icon: {
				src: '/images/icons/vkontakte-red.png',
				width: 45,
				height: 45,
				alt: 'Vkontakte'
			},
			href: '/'
		}
	]
}