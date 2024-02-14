import type { IGroup } from '../../groups/interface/services-groups.interface'

export interface ICategory {
	id: number
	name: string
	slug: string
	imagePath: string
	backgroundColor: string
	priceFrom: number
	groups: IGroup[]
}

export interface IServicesCategories {
	areaId: string
	categories: ICategory[]
}
