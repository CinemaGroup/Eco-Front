import {
	OffersDocument,
	useCreateOfferMutation,
	useDeleteOfferMutation,
	useOffersQuery,
	useToggleOfferMutation,
	type QueryInput,
} from '@/__generated__/output'
import type { ITableItem } from '@/components/ui/templates/manage/manage-table/interface/manage-table.interface'
import { ADMIN_EDITS } from '@/constants/url.constants'
import { formatDate } from '@/utils/formats/date/format-date'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export const useManageOffers = (
	queryParams: QueryInput,
	debounceSearch: string
) => {
	const { push } = useRouter()

	const { data } = useOffersQuery({
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

	const [createOffer] = useCreateOfferMutation({
		fetchPolicy: 'no-cache',
		onCompleted: ({ createOffer }) => {
			toast.success('Спец. Предложение успешно создано.')
			push(`${ADMIN_EDITS.OFFER}/${createOffer.id}`)
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [deleteOffer] = useDeleteOfferMutation({
		fetchPolicy: 'no-cache',
		refetchQueries: [OffersDocument],
		onCompleted: () => {
			toast.success('Спец. Предложение успешно удалено.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [toggleOffer] = useToggleOfferMutation({
		fetchPolicy: 'no-cache',
		refetchQueries: [OffersDocument],
		onCompleted: () => {
			toast.success('Статус спец. предложения успешно обновлен.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	return {
		data: data?.offers.map(
			(offer): ITableItem => ({
				id: offer.id,
				editUrl: `${ADMIN_EDITS.OFFER}/${offer.id}`,
				preview: {
					src: offer.imagePath,
					alt: '',
				},
				data: [
					`${offer.sale} %`,
					offer.backgroundColor,
					formatDate(offer.createdAt),
				],
				status: offer.status,
			})
		),
		createOffer,
		deleteOffer,
		toggleOffer,
	}
}
