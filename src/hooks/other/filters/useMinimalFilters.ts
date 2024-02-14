import {
	type QueryOrderInput,
	type QueryRequestInput,
	Sort,
} from '@/__generated__/output'
import { useState } from 'react'
import { useSearchFilter } from './useSearchFilter'

export const useMinimalFilters = () => {
	const { searchTerm, debounceSearch, handleSearch } = useSearchFilter()

	const [queryParams, setQueryParams] = useState<
		QueryOrderInput | QueryRequestInput
	>({
		sort: Sort.Newest,
	})

	const updateQueryFilters = (key: string, value: string | null) => {
		setQueryParams((prevParams) => ({ ...prevParams, [key]: value }))
	}

	return {
		updateQueryFilters,
		handleSearch,
		queryParams,
		searchTerm,
		debounceSearch,
	}
}
