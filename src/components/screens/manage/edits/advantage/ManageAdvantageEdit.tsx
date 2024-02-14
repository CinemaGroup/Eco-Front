'use client'

import Container from '@/components/ui/common/container/Container'
import Field from '@/components/ui/form-elements/field/Field'
import TextEditor from '@/components/ui/form-elements/text-editor/TextEditor'
import UploadField from '@/components/ui/form-elements/upload-field/UploadField'
import { useManageAdvantageEdit } from '@/hooks/api/manage/advantages/useManageAdvantageEdit'
import type { FC } from 'react'
import { Controller } from 'react-hook-form'
import { stripHtml } from 'string-strip-html'
import styles from './ManageAdvantageEdit.module.scss'

const ManageAdvantageEdit: FC<{ queryId: string }> = ({ queryId }) => {
	const { registerInput, control, errors, data, handleSubmit, onSubmit } =
		useManageAdvantageEdit(queryId)

	return (
		<div className={styles.edit}>
			<Container>
				<div className={styles.wrapper}>
					<h1 className={styles.heading}>
						Редактирование -{' '}
						<span>
							{data?.advantageById.name
								? data.advantageById.name
								: 'Преимущества'}
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
						<Controller
							name="description"
							control={control}
							defaultValue=""
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<TextEditor
									className={styles.editor}
									onChange={onChange}
									error={error}
									value={value}
									label="Описание"
								/>
							)}
							rules={{
								validate: {
									required: (v) =>
										(v && stripHtml(v).result.length > 0) ||
										'Описание обязательное поле',
								},
							}}
						/>
						<div className={styles.button}>
							<button className={styles.update}>Обновить</button>
						</div>
					</form>
				</div>
			</Container>
		</div>
	)
}

export default ManageAdvantageEdit
