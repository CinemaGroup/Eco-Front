import StaticImage from '@/components/ui/common/image/StaticImage'
import { SITE_NAME } from '@/constants/seo.constants'
import Link from 'next/link'
import type { FC } from 'react'
import { ILogo } from './interface/logo.interface'

const Logo: FC<ILogo> = ({ className }) => {
	return (
		<Link href="/" className={className && className}>
			<StaticImage
				src="/images/global/logo.png"
				width={205}
				height={55}
				alt={SITE_NAME}
			/>
		</Link>
	)
}

export default Logo
