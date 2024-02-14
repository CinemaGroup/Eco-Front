import type { IImage } from '@/components/ui/common/image/interface/image.interface'

export interface ISocialItem {
	icon: IImage
	href: string
}

export interface ISocialMenu {
	items: ISocialItem[]
}

export interface ISocial {
	social: ISocialMenu
	className?: string
}
