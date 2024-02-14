import {
	useReviewByIdQuery,
	useUpdateReviewMutation,
	type UpdateReviewInput,
} from '@/__generated__/output'
import { ADMIN_PAGES } from '@/constants/url.constants'
import { getKeys } from '@/utils/helpers/get-keys.util'
import { useRouter } from 'next/navigation'
import { useForm, type SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useManageReviewEdit = (queryId: string) => {
	const {
		register: registerInput,
		control,
		formState: { errors },
		handleSubmit,
		setValue,
	} = useForm<UpdateReviewInput>({
		mode: 'onChange',
	})

	const { push } = useRouter()
	const reviewId = +queryId

	const { data } = useReviewByIdQuery({
		variables: {
			id: reviewId,
		},
		fetchPolicy: 'no-cache',
		onError: (error) => {
			toast.error(error.message)
		},
		onCompleted: ({ reviewById }) => {
			getKeys(reviewById).forEach(({ key, value }) => {
				setValue(key, value)
			})
		},
	})

	const [updateReview] = useUpdateReviewMutation({
		fetchPolicy: 'no-cache',
		onCompleted: () => {
			push(ADMIN_PAGES.REVIEWS)
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const onSubmit: SubmitHandler<UpdateReviewInput> = async (data) => {
		await updateReview({
			variables: {
				id: reviewId,
				data,
			},
		})
	}

	return {
		registerInput,
		control,
		errors,
		handleSubmit,
		onSubmit,
		data,
	}
}
