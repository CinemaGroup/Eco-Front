import type { IService } from '@/components/blocks/services/products/interface/services-products.interface'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import {
	EnumStorage,
	type ICartItem,
	type TypeCartStore,
} from './types/cart-type'

const toggleCart = (service: IService, cart: ICartItem[]): ICartItem[] => {
	const isExistsIndex = cart.findIndex((item) => item.id === service.id)

	if (isExistsIndex !== -1) {
		const updatedCart = [...cart]
		updatedCart.splice(isExistsIndex, 1)
		return updatedCart
	} else {
		return [...cart, { ...service, count: 1 }]
	}
}

const removeCart = (id: number, cart: ICartItem[]): ICartItem[] => {
	return cart.filter((item) => item.id !== id)
}

const changeQuantity = (
	id: number,
	type: 'minus' | 'plus',
	cart: ICartItem[]
): ICartItem[] => {
	return cart.map((item) => {
		const newQuantity = type === 'minus' ? item.count - 1 : item.count + 1
		if (item.id === id) {
			return { ...item, count: newQuantity }
		}
		return item
	})
}

export const useCartStore = create<TypeCartStore>()(
	persist<TypeCartStore>(
		(set, get) => {
			return {
				cart: [],
				isExists: (serviceId: number) => {
					const { cart } = get()
					const isExists = cart.some((service) => service.id === serviceId)
					return isExists ? true : false
				},
				toggle: (service: IService) => {
					const { cart } = get()
					const updatedCart = toggleCart(service, cart)
					set({ cart: updatedCart })
				},
				remove: (id: number) => {
					const { cart } = get()
					const updatedCart = removeCart(id, cart)
					set({ cart: updatedCart })
				},
				removeAll: () => {
					set({ cart: [] })
				},
				changeQuantity: (serviceId: number, type: 'minus' | 'plus') => {
					const { cart } = get()
					const updatedCart = changeQuantity(serviceId, type, cart)
					set({ cart: updatedCart })
				},
				totalPrice: () => {
					const { cart } = get()
					const totalPrice = cart.reduce(
						(acc, item) => acc + item.price * item.count,
						0
					)
					return totalPrice
				},
			}
		},
		{ name: EnumStorage.CART }
	)
)
