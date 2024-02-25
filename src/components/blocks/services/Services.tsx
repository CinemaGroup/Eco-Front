'use client'

import Container from '@/components/ui/common/container/Container'
import StaticImage from '@/components/ui/common/image/StaticImage'
import Section from '@/components/ui/common/section/Section'
import Catalog from '@/components/ui/templates/catalog/Catalog'
import { useCatalogRubrics } from '@/hooks/api/rubric/useCatalogRubrics'
import { type FC } from 'react'
import styles from './Services.module.scss'
import ServicesCategories from './categories/ServicesCategories'
import ServicesTop from './top/ServicesTop'

const Services: FC = () => {
	const { data } = useCatalogRubrics()
	if (!data?.rubrics || data.rubrics.length === 0) return null

	return (
		<Section className={styles.section} id="services">
			<Container>
				<ServicesTop />
				<div className={styles.rubrics}>
					{data.rubrics.map((rubric, index) => (
						<div className={styles.rubric} key={rubric.id}>
							<div className={styles.banner}>
								<StaticImage
									src={rubric.imagePath}
									width={365}
									height={1000}
									alt={rubric.name}
								/>
								<h3 className={styles.name}>{rubric.name}</h3>
							</div>
							<div id={`area-${index}`} className={styles.area}></div>
							<Catalog areaId={`area-${index}`}>
								<ServicesCategories
									categories={rubric.categories}
									areaId={`area-${index}`}
								/>
							</Catalog>
						</div>
					))}
				</div>
			</Container>
		</Section>
	)
}

export default Services
