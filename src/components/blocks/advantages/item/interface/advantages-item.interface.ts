import { Advantage } from '@/__generated__/output'

export interface IAdvantagesItem {
	advantage: Pick<Advantage, 'id' | 'name' | 'description' | 'imagePath'>
	number: number
}
