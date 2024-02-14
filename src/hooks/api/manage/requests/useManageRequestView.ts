import { useRequestByIdQuery } from '@/__generated__/output'
import toast from 'react-hot-toast'

export const useManageRequestView = (queryId: string) => {
	const requestId = +queryId

	const { data } = useRequestByIdQuery({
		variables: {
			id: requestId,
		},
		fetchPolicy: 'no-cache',
		onError: (error) => {
			toast.error(error.message)
		},
	})

	return { data }
}
