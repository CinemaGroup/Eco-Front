'use client'

import Icon from '@/components/ui/common/icon/Icon'
import StaticImage from '@/components/ui/common/image/StaticImage'
import Catalog from '@/components/ui/templates/catalog/Catalog'
import { useState, type FC } from 'react'
import styles from '../Services.module.scss'
import ServicesGroups from '../groups/ServicesGroups'
import type { IServicesCategories } from './interface/services-categories.interface'

const ServicesCategories: FC<IServicesCategories> = ({
	categories,
	areaId,
}) => {
	const [openCategories, setOpenCategories] = useState<{
		[key: string]: boolean
	}>({})

	const handleToggleCategory = (categoryId: string) => {
		setOpenCategories((prevState) => ({
			...prevState,
			[categoryId]: !prevState[categoryId],
		}))
	}

	return (
		<div className={styles.categories}>
			{categories.map((_, index) => {
				if (index % 5 === 0) {
					const groupIndex = Math.floor(index / 5)
					const categoriesInGroup = categories.slice(index, index + 5)
					return (
						<div key={groupIndex} className={styles.categoriesGroup}>
							{categoriesInGroup.map((categoryInGroup, categoryIndex) => (
								<div
									key={categoryInGroup.id}
									className={styles.category}
									style={{ background: categoryInGroup.backgroundColor }}
								>
									{categoryIndex % 3 === 0 && categoryIndex !== 0 ? (
										<div className={styles.categoryContent}>
											<h4 className={styles.categoryName}>
												{categoryInGroup.name}
											</h4>
											<StaticImage
												className={styles.categoryImage}
												src={categoryInGroup.imagePath}
												width={250}
												height={220}
												alt={categoryInGroup.name}
											/>
										</div>
									) : (
										<>
											<h4 className={styles.categoryName}>
												{categoryInGroup.name}
											</h4>
											<StaticImage
												className={styles.categoryImage}
												src={categoryInGroup.imagePath}
												width={250}
												height={220}
												alt={categoryInGroup.name}
											/>
										</>
									)}
									<div className={styles.bottom}>
										<div className={styles.priceBox}>
											<p className={styles.priceLabel}>стоимость от</p>
											<span className={styles.priceFrom}>
												{categoryInGroup.priceFrom}
												<StaticImage
													src="/images/icons/currency.png"
													width={25}
													height={25}
													alt="Currency"
												/>
											</span>
										</div>
										<button
											className={styles.arrow}
											onClick={() =>
												handleToggleCategory(String(categoryInGroup.id))
											}
										>
											<Icon name="ChevronRight" />
										</button>
										{openCategories[categoryInGroup.id] && (
											<Catalog areaId={areaId}>
												<ServicesGroups
													categories={categories}
													groups={categoryInGroup.groups}
													areaId={areaId}
												/>
											</Catalog>
										)}
									</div>
								</div>
							))}
						</div>
					)
				}
				return null
			})}
		</div>
	)
}

export default ServicesCategories
