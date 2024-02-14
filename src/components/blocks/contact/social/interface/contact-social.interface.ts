import type { IImage } from '@/components/ui/common/image/interface/image.interface'

export interface IContactSocialItem {
	icon: IImage
	href: string
}

export interface IContactSocial {
	items: IContactSocialItem[]
}