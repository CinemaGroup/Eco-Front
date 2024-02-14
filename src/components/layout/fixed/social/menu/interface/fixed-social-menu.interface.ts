import type { IImage } from '@/components/ui/common/image/interface/image.interface'

export interface IFixedSocialMenuItem {
	icon: IImage
	href: string
}

export interface IFixedSocialMenu {
	items: IFixedSocialMenuItem[]
}
