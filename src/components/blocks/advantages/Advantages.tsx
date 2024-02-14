import Container from '@/components/ui/common/container/Container'
import FilledImage from '@/components/ui/common/image/FilledImage'
import Section from '@/components/ui/common/section/Section'
import { useAdvantages } from '@/hooks/api/advantage/useAdvantages'
import type { FC } from 'react'
import styles from './Advantages.module.scss'
import AdvantagesItem from './item/AdvantagesItem'

const Advantages: FC = async () => {
	const { data } = await useAdvantages()
	if (data.advantages.length === 0) return null

	return (
		<Section className={styles.section}>
			<Container>
				<div className={styles.advantages}>
					<div className={styles.preview}>
						<div className={styles.gradient}>
							<FilledImage
								src="/images/backgrounds/advantages-bg.png"
								alt="Advantages"
							/>
						</div>
					</div>
					<ul className={styles.items}>
						{data.advantages.map((advantage, index) => (
							<AdvantagesItem
								key={advantage.id}
								advantage={advantage}
								number={index + 1}
							/>
						))}
					</ul>
				</div>
			</Container>
		</Section>
	)
}

export default Advantages
