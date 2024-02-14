import { useDebounce } from '@/hooks/other/debounce/useDebounce'
import { useState, type ChangeEvent } from 'react'

export const useSearchFilter = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debounceSearch = useDebounce(searchTerm, 500)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	return {
		handleSearch,
		searchTerm,
		debounceSearch,
	}
}
