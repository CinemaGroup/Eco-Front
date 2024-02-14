'use client'

import Container from '@/components/ui/common/container/Container'
import Field from '@/components/ui/form-elements/field/Field'
import UploadField from '@/components/ui/form-elements/upload-field/UploadField'
import { useManageRubricEdit } from '@/hooks/api/manage/rubrics/useManageRubricEdit'
import type { FC } from 'react'
import { Controller } from 'react-hook-form'
import styles from './ManageRubricEdit.module.scss'

const ManageRubricEdit: FC<{ queryId: string }> = ({ queryId }) => {
	const { registerInput, control, errors, data, handleSubmit, onSubmit } =
		useManageRubricEdit(queryId)

	return (
		<div className={styles.edit}>
			<Container>
				<div className={styles.wrapper}>
					<h1 className={styles.heading}>
						Редактирование -{' '}
						<span>
							{data?.rubricById.name ? data.rubricById.name : 'Рубрики'}
						</span>
					</h1>
					<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
						<Field
							{...registerInput('name', {
								required: 'Название обязательное поле',
							})}
							theme="black"
							variant="manage"
							className={styles.field}
							label="Название"
							error={errors.name}
						/>
						<Controller
							name="imagePath"
							control={control}
							defaultValue=""
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<UploadField
									className={styles.upload}
									onChange={onChange}
									value={value}
									error={error}
									label="Картинка"
									variant="poster"
								/>
							)}
							rules={{
								required: 'Картинка обязательное поле',
							}}
						/>
						<button className={styles.update}>Обновить</button>
					</form>
				</div>
			</Container>
		</div>
	)
}

export default ManageRubricEdit
