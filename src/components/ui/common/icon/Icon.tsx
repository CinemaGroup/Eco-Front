import { icons } from 'lucide-react'
import { FC } from 'react'
import { IIcon } from './interface/icon.interface'

const Icon: FC<IIcon> = ({ name, color, size, className }) => {
	const LucideIcon = icons[name]

	return (
		<LucideIcon color={color} size={size} className={className && className} />
	)
}

export default Icon
