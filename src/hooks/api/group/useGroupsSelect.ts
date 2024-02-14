import type { IOption } from '@/components/ui/common/selects/react-select/interface/react-select.interface'
import { useGroupsManage } from './useGroupsManage'

export const useGroupsSelect = (excludeName?: string) => {
	const { data } = useGroupsManage()

	return {
		data: data?.groups
			.filter((group) => group.name !== excludeName)
			.map(
				(group): IOption => ({
					label: group.name,
					value: group.id,
				})
			),
	}
}
