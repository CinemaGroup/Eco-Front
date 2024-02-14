'use client'

import Container from '@/components/ui/common/container/Container'
import ColorPalette from '@/components/ui/form-elements/color-palette/ColorPalette'
import Field from '@/components/ui/form-elements/field/Field'
import TextEditor from '@/components/ui/form-elements/text-editor/TextEditor'
import UploadField from '@/components/ui/form-elements/upload-field/UploadField'
import { useManageOfferEdit } from '@/hooks/api/manage/offers/useManageOfferEdit'
import type { FC } from 'react'
import { Controller } from 'react-hook-form'
import { stripHtml } from 'string-strip-html'
import styles from './ManageOfferEdit.module.scss'

const ManageOfferEdit: FC<{ queryId: string }> = ({ queryId }) => {
	const { control, handleSubmit, onSubmit } = useManageOfferEdit(queryId)

	return (
		<div className={styles.edit}>
			<Container>
				<div className={styles.wrapper}>
					<h1 className={styles.heading}>
						Редактирование - <span>Специального Предложения</span>
					</h1>
					<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
						<Controller
							name="sale"
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
									label="Скидка"
									error={error}
								/>
							)}
							rules={{
								required: 'Скидка обязательное поле',
							}}
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
									label="Краткое описание"
								/>
							)}
							rules={{
								validate: {
									required: (v) =>
										(v && stripHtml(v).result.length > 0) ||
										'Краткое описание обязательное поле',
								},
							}}
						/>
						<Controller
							name="about"
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
									label="Полное описание"
								/>
							)}
							rules={{
								validate: {
									required: (v) =>
										(v && stripHtml(v).result.length > 0) ||
										'Полное описание обязательное поле',
								},
							}}
						/>
						<Controller
							name="backgroundColor"
							control={control}
							defaultValue="#ffffff"
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<ColorPalette
									className={styles.palette}
									value={value}
									onChange={onChange}
									error={error}
									label='Фоновый цвет'
								/>
							)}
							rules={{
								required: 'Фоновый цвет обязательное поле',
							}}
						/>
						<Controller
							name="color"
							control={control}
							defaultValue="#ffffff"
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<ColorPalette
									className={styles.palette}
									value={value}
									onChange={onChange}
									error={error}
									label='Цвет текстов'
								/>
							)}
							rules={{
								required: 'Цвет текстов обязательное поле',
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

export default ManageOfferEdit
