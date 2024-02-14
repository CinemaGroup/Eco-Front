import {
	useOfferByIdQuery,
	useUpdateOfferMutation,
	type UpdateOfferInput,
} from '@/__generated__/output'
import { ADMIN_PAGES } from '@/constants/url.constants'
import { getKeys } from '@/utils/helpers/get-keys.util'
import { useRouter } from 'next/navigation'
import { useForm, type SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useManageOfferEdit = (queryId: string) => {
	const { control, handleSubmit, setValue } = useForm<UpdateOfferInput>({
		mode: 'onChange',
	})

	const { push } = useRouter()
	const offerId = +queryId

	useOfferByIdQuery({
		variables: {
			id: offerId,
		},
		fetchPolicy: 'no-cache',
		onError: (error) => {
			toast.error(error.message)
		},
		onCompleted: ({ offerById }) => {
			getKeys(offerById).forEach(({ key, value }) => {
				setValue(key, value)
			})
		},
	})

	const [updateOffer] = useUpdateOfferMutation({
		fetchPolicy: 'no-cache',
		onCompleted: () => {
			push(ADMIN_PAGES.OFFERS)
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const onSubmit: SubmitHandler<UpdateOfferInput> = async (data) => {
		await updateOffer({
			variables: {
				id: offerId,
				data,
			},
		})
	}

	return {
		control,
		handleSubmit,
		onSubmit,
	}
}
