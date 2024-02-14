import type { IService } from '@/components/blocks/services/products/interface/services-products.interface'

export enum EnumStorage {
	CART = 'ECO_DRY_CART',
}

export interface ICartItem extends IService {
	count: number
}

export type TypeCartStore = {
	cart: ICartItem[]
	toggle: (service: IService) => void
	isExists: (serviceId: number) => boolean
	remove: (id: number) => void
	removeAll: () => void
	totalPrice: () => number
	changeQuantity: (serviceId: number, type: 'minus' | 'plus') => void
}
