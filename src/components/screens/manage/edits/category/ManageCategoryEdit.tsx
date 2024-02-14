'use client'

import Container from '@/components/ui/common/container/Container'
import ReactSelect from '@/components/ui/common/selects/react-select/ReactSelect'
import ColorPalette from '@/components/ui/form-elements/color-palette/ColorPalette'
import Field from '@/components/ui/form-elements/field/Field'
import UploadField from '@/components/ui/form-elements/upload-field/UploadField'
import { useManageCategoryEdit } from '@/hooks/api/manage/categories/useManageCategoryEdit'
import { useRubricsSelect } from '@/hooks/api/rubric/useRubricsSelect'
import type { FC } from 'react'
import { Controller } from 'react-hook-form'
import styles from './ManageCategoryEdit.module.scss'

const ManageCategoryEdit: FC<{ queryId: string }> = ({ queryId }) => {
	const { registerInput, control, errors, data, handleSubmit, onSubmit } =
		useManageCategoryEdit(queryId)

	const { data: rubricsData } = useRubricsSelect()

	return (
		<div className={styles.edit}>
			<Container>
				<div className={styles.wrapper}>
					<h1 className={styles.heading}>
						Редактирование -{' '}
						<span>
							{data?.categoryById.name ? data.categoryById.name : 'Категории'}
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
							name="priceFrom"
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
									label="Цена от"
									error={error}
								/>
							)}
							rules={{
								required: 'Цена обязательно поле',
							}}
						/>
						<Controller
							name="rubrics"
							defaultValue={[]}
							control={control}
							render={({ field, fieldState: { error } }) => (
								<ReactSelect
									field={field}
									options={rubricsData || []}
									label="Родительские рубрики"
									error={error}
									className={styles.select}
								/>
							)}
							rules={{
								required: 'Родительские рубрики обязательное поле',
							}}
						/>
						<Controller
							name="backgroundColor"
							defaultValue=""
							control={control}
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<ColorPalette
									className={styles.palette}
									value={value}
									onChange={onChange}
									error={error}
									label="Фоновый цвет"
								/>
							)}
							rules={{
								required: 'Фоновый цвет обязательное поле',
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
						<button className={styles.update}>Обновить</button>
					</form>
				</div>
			</Container>
		</div>
	)
}

export default ManageCategoryEdit
