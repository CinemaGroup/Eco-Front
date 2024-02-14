'use client'

import { RequestType } from '@/__generated__/output'
import Container from '@/components/ui/common/container/Container'
import Section from '@/components/ui/common/section/Section'
import { useManageRequestView } from '@/hooks/api/manage/requests/useManageRequestView'
import type { FC } from 'react'
import styles from './ManageRequestView.module.scss'

const ManageRequestView: FC<{ queryId: string }> = ({ queryId }) => {
	const { data } = useManageRequestView(queryId)

	return (
		<Section className={styles.edit}>
			<Container>
				<div className={styles.tableWrapper}>
					<h2 className={styles.heading}>Детали запроса</h2>
					<div className={styles.customer}>
						<p className={styles.username}>
							Имя: <span>{data?.requestById.name}</span>
						</p>
						<p className={styles.phone}>
							Телефон: <span>{data?.requestById.phone}</span>
						</p>
						<p className={styles.type}>
							Услуга:{' '}
							<span>
								{data?.requestById.type === RequestType.Wash
									? 'Стирка'
									: data?.requestById.type === RequestType.DryCleaning
									? 'Химчистка'
									: 'Не выбрана'}
							</span>
						</p>
					</div>
				</div>
			</Container>
		</Section>
	)
}

export default ManageRequestView
