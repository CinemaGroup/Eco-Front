import Icon from '@/components/ui/common/icon/Icon'
import StaticImage from '@/components/ui/common/image/StaticImage'
import Catalog from '@/components/ui/templates/catalog/Catalog'
import { useState, type FC } from 'react'
import ServicesCategories from '../categories/ServicesCategories'
import ServicesProducts from '../products/ServicesProducts'
import styles from './ServicesGroups.module.scss'
import type { IServicesGroups } from './interface/services-groups.interface'

const ServicesGroups: FC<IServicesGroups> = ({
	groups,
	categories,
	areaId,
}) => {
	const [openGroups, setOpenGroups] = useState<{
		[key: string]: boolean
	}>({})
	const [isShow, setIsShow] = useState(false)

	const handleToggleGroup = (groupId: string) => {
		setOpenGroups((prevState) => ({
			...prevState,
			[groupId]: !prevState[groupId],
		}))
	}

	return (
		<>
			<button className={styles.prev} onClick={() => setIsShow(true)}>
				<Icon name="ChevronLeft" />
				Назад
			</button>
			{isShow && (
				<Catalog areaId={areaId}>
					<ServicesCategories areaId={areaId} categories={categories} />
				</Catalog>
			)}
			<div className={styles.groups}>
				{groups.map((group) => (
					<div key={group.id} className={styles.group}>
						<StaticImage
							src={group.imagePath}
							width={250}
							height={300}
							alt={group.name}
						/>
						<div className={styles.bottom}>
							<h4 className={styles.name}>{group.name}</h4>
							<button
								className={styles.arrow}
								onClick={() => handleToggleGroup(String(group.id))}
							>
								<Icon name="ChevronRight" />
							</button>
						</div>
						{openGroups[group.id] && (
							<Catalog areaId={areaId}>
								<ServicesProducts
									areaId={areaId}
									services={group.services}
									groups={groups}
									categories={categories}
								/>
							</Catalog>
						)}
					</div>
				))}
			</div>
		</>
	)
}

export default ServicesGroups
