import cn from 'clsx'
import type { FC, PropsWithChildren } from 'react'
import styles from './Container.module.scss'
import { IContainer } from './interface/container.interface'

const Container: FC<PropsWithChildren<IContainer>> = ({
	children,
	variant = 'medium',
	className,
}) => {
	return (
		<div
			className={cn(
				styles.container,
				{
					[styles.biggest]: variant === 'biggest',
					[styles.large]: variant === 'large',
					[styles.medium]: variant === 'medium',
					[styles.small]: variant === 'small',
					[styles.right]: variant === 'right',
					[styles.left]: variant === 'left',
				},
				className && className
			)}
		>
			{children}
		</div>
	)
}

export default Container
