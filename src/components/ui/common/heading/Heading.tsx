import cn from 'clsx'
import type { FC, PropsWithChildren } from 'react'
import styles from './Heading.module.scss'
import type { IHeading } from './interface/heading.interface'

const Heading: FC<PropsWithChildren<IHeading>> = ({ children, className }) => {
	return (
		<h2 className={cn(styles.heading, className && className)}>{children}</h2>
	)
}

export default Heading
