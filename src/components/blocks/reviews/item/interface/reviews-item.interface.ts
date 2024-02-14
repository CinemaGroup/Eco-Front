import type { Review } from '@/__generated__/output'

export interface IReviewsItem {
	review: Omit<Review, 'updatedAt'>
}