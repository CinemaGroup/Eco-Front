import { useGetCategoryPriceMutation } from '@/__generated__/output'
import type { TypeCalculatorInput } from '@/components/blocks/calculator/types/calculator.type'
import { useState } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'

export const useCalculator = () => {
	const { control, handleSubmit } = useForm<TypeCalculatorInput>({
		mode: 'onChange',
	})
	const [price, setPrice] = useState<number | null>(null)
	const [isShow, setIsShow] = useState(false)

	const [getPrice] = useGetCategoryPriceMutation({
		fetchPolicy: 'no-cache'
	})

	const onSubmit: SubmitHandler<TypeCalculatorInput> = (formData) => {
		getPrice({
			variables: {
				data: {
					slug: formData.category.key,
					quantity: formData.quantity,
				},
			},
		}).then((result) => {
			const data = result.data
			if (data?.categoryPrice) {
				setPrice(data.categoryPrice)
				setIsShow(true)
			}
		})
	}

	return {
		price,
		isShow,
		setIsShow,
		control,
		handleSubmit,
		onSubmit,
	}
}
