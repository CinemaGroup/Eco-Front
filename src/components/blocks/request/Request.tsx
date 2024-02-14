import Container from '@/components/ui/common/container/Container'
import FilledImage from '@/components/ui/common/image/FilledImage'
import Section from '@/components/ui/common/section/Section'
import type { FC } from 'react'
import styles from './Request.module.scss'
import RequestForm from './form/RequestForm'

const Request: FC = () => {
	return (
		<Section className={styles.section}>
			<div className={styles.preview}>
				<FilledImage src="/images/other/request/request-bg.png" alt="Request" />
			</div>
			<div className={styles.fill}>
				<Container variant="left">
					<div className={styles.request}>
						<div className={styles.box}>
							<h2 className={styles.title}>Не хватает времени на стирку?</h2>
							<p className={styles.description}>
								Оставьте заявку и мы бесплатно <br />
								Вас проконсультируем и рассчитаем стоимость
							</p>
						</div>
						<RequestForm />
					</div>
				</Container>
			</div>
		</Section>
	)
}

export default Request
