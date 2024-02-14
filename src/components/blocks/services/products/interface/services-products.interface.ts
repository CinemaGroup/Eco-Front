import type { ICategory } from '../../categories/interface/services-categories.interface'
import type { IGroup } from '../../groups/interface/services-groups.interface'

export interface IService {
	id: number
	name: string
	description: string
	term: string
	imagePath: string
	price: number
}

export interface IServicesProducts {
	areaId: string
	services: IService[]
	groups: IGroup[]
	categories: ICategory[]
}
