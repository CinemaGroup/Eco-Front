import type { IImage } from '@/components/ui/common/image/interface/image.interface'

export interface IContactMenuItem {
	icon: IImage
	label: string
	href: string
}

export interface IContactMenu {
	items: IContactMenuItem[]
}
