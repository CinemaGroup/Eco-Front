import type { ICategory } from '../../categories/interface/services-categories.interface'
import type { IService } from '../../products/interface/services-products.interface'

export interface IGroup {
	id: number
	name: string
	imagePath: string
	services: IService[]
}

export interface IServicesGroups {
	areaId: string
	groups: IGroup[]
	categories: ICategory[]
}
