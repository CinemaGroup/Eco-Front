'use client'

import Container from '@/components/ui/common/container/Container'
import Field from '@/components/ui/form-elements/field/Field'
import TextEditor from '@/components/ui/form-elements/text-editor/TextEditor'
import UploadField from '@/components/ui/form-elements/upload-field/UploadField'
import { useManageReviewEdit } from '@/hooks/api/manage/reviews/useManageReviewEdit'
import type { FC } from 'react'
import { Controller } from 'react-hook-form'
import { stripHtml } from 'string-strip-html'
import styles from './ManageReviewEdit.module.scss'

const ManageReviewEdit: FC<{ queryId: string }> = ({ queryId }) => {
	const { registerInput, control, errors, data, handleSubmit, onSubmit } =
		useManageReviewEdit(queryId)

	return (
		<div className={styles.edit}>
			<Container>
				<div className={styles.wrapper}>
					<h1 className={styles.heading}>
						Редактирование -{' '}
						<span>
							{data?.reviewById.author ? data.reviewById.author : 'Отзыва'}
						</span>
					</h1>
					<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
						<Field
							{...registerInput('author', {
								required: 'Автор обязательное поле',
							})}
							theme="black"
							variant="manage"
							className={styles.field}
							label="Автор"
							error={errors.author}
						/>
						<Controller
							name="rating"
							control={control}
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<Field
									onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
									value={value}
									theme="black"
									variant="manage"
									className={styles.field}
									label="Рейтинг"
									error={error}
								/>
							)}
							rules={{
								required: 'Рейтинг обязательное поле',
							}}
						/>
						<Field
							{...registerInput('date', {
								required: 'Дата обязательное поле',
							})}
							theme="black"
							variant="manage"
							className={styles.field}
							label="Дата"
							error={errors.date}
						/>
						<Controller
							name="review"
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
									label="Текст"
								/>
							)}
							rules={{
								validate: {
									required: (v) =>
										(v && stripHtml(v).result.length > 0) ||
										'Текст обязательное поле',
								},
							}}
						/>
						<Controller
							name="authorAvatar"
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
									label="Аватарка"
									variant="photo"
								/>
							)}
							rules={{
								required: 'Аватарка обязательное поле',
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

export default ManageReviewEdit
