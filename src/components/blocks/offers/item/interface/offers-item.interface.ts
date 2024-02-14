import type { Offer } from '@/__generated__/output'

export interface IOffersItem {
	offer: Pick<
		Offer,
		'id' | 'sale' | 'description' | 'about' | 'imagePath' | 'backgroundColor' | 'color'
	>
}
