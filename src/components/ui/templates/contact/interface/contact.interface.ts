import { IImage } from '@/components/ui/common/image/interface/image.interface'

export interface IContactItem {
	icon?: IImage
	label: string
	href: string
}

export interface IContactMenu {
	items: IContactItem[]
}

export interface IContact {
	contact: IContactMenu
	className?: string
}
