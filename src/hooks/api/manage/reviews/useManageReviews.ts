import {
	ReviewsDocument,
	useCreateReviewMutation,
	useDeleteReviewMutation,
	useReviewsQuery,
	useToggleReviewMutation,
	type QueryInput,
} from '@/__generated__/output'
import type { ITableItem } from '@/components/ui/templates/manage/manage-table/interface/manage-table.interface'
import { ADMIN_EDITS } from '@/constants/url.constants'
import { formatDate } from '@/utils/formats/date/format-date'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export const useManageReviews = (
	queryParams: QueryInput,
	debounceSearch: string
) => {
	const { push } = useRouter()

	const { data } = useReviewsQuery({
		variables: {
			query: {
				...queryParams,
				searchTerm: debounceSearch,
			},
		},
		fetchPolicy: 'no-cache',
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [createReview] = useCreateReviewMutation({
		fetchPolicy: 'no-cache',
		onCompleted: ({ createReview }) => {
			toast.success('Отзыв успешно создан.')
			push(`${ADMIN_EDITS.REVIEW}/${createReview.id}`)
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [deleteReview] = useDeleteReviewMutation({
		fetchPolicy: 'no-cache',
		refetchQueries: [ReviewsDocument],
		onCompleted: () => {
			toast.success('Отзыв успешно удален.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [toggleReview] = useToggleReviewMutation({
		fetchPolicy: 'no-cache',
		refetchQueries: [ReviewsDocument],
		onCompleted: () => {
			toast.success('Статус отзыва успешно обновлен.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	return {
		data: data?.reviews.map(
			(review): ITableItem => ({
				id: review.id,
				editUrl: `${ADMIN_EDITS.REVIEW}/${review.id}`,
				preview: {
					src: review.authorAvatar,
					alt: review.author,
				},
				data: [review.author, review.rating, formatDate(review.createdAt)],
				status: review.status,
			})
		),
		createReview,
		deleteReview,
		toggleReview,
	}
}
