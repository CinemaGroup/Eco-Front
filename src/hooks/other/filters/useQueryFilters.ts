import { Sort, type QueryInput } from '@/__generated__/output'
import { useState } from 'react'
import { useSearchFilter } from './useSearchFilter'

export const useQueryFilters = () => {
	const { searchTerm, debounceSearch, handleSearch } = useSearchFilter()

	const [queryParams, setQueryParams] = useState<QueryInput>({
		sort: Sort.Newest,
		status: null,
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
