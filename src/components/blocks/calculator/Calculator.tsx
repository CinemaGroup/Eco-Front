import Container from '@/components/ui/common/container/Container'
import FilledImage from '@/components/ui/common/image/FilledImage'
import Section from '@/components/ui/common/section/Section'
import type { FC } from 'react'
import styles from './Calculator.module.scss'
import CalculatorForm from './form/CalculatorForm'

const Calculator: FC = () => {
	return (
		<Section className={styles.section}>
			<div className={styles.preview}>
				<FilledImage
					src="/images/other/calculator/calculator.png"
					alt="Calculator"
				/>
			</div>
			<div className={styles.fill}>
				<Container>
					<div className={styles.calculator}>
						<h3 className={styles.title}>
							Бесплатно рассчитаем стоимость услуг
						</h3>
						<CalculatorForm />
					</div>
				</Container>
			</div>
		</Section>
	)
}

export default Calculator
