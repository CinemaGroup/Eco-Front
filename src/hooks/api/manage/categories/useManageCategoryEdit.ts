import {
	useCategoryByIdQuery,
	useUpdateCategoryMutation,
	type UpdateCategoryInput,
} from '@/__generated__/output'
import { ADMIN_PAGES } from '@/constants/url.constants'
import { getKeys } from '@/utils/helpers/get-keys.util'
import { useRouter } from 'next/navigation'
import { useForm, type SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useManageCategoryEdit = (queryId: string) => {
	const {
		register: registerInput,
		control,
		formState: { errors },
		handleSubmit,
		setValue,
	} = useForm<UpdateCategoryInput>({
		mode: 'onChange',
	})

	const { push } = useRouter()
	const categoryId = +queryId

	const { data } = useCategoryByIdQuery({
		variables: {
			id: categoryId,
		},
		fetchPolicy: 'no-cache',
		onError: (error) => {
			toast.error(error.message)
		},
		onCompleted: ({ categoryById }) => {
			getKeys(categoryById).forEach(({ key, value }) => {
				setValue(key, value)
			})
		},
	})

	const [updateCategory] = useUpdateCategoryMutation({
		fetchPolicy: 'no-cache',
		onCompleted: () => {
			push(ADMIN_PAGES.CATEGORIES)
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const onSubmit: SubmitHandler<UpdateCategoryInput> = async (data) => {
		await updateCategory({
			fetchPolicy: 'no-cache',
			variables: {
				id: categoryId,
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
