'use client'

import Container from '@/components/ui/common/container/Container'
import ReactSelect from '@/components/ui/common/selects/react-select/ReactSelect'
import Field from '@/components/ui/form-elements/field/Field'
import UploadField from '@/components/ui/form-elements/upload-field/UploadField'
import { useCategoriesSelect } from '@/hooks/api/category/useCategoriesSelect'
import { useManageGroupEdit } from '@/hooks/api/manage/groups/useManageGroupEdit'
import type { FC } from 'react'
import { Controller } from 'react-hook-form'
import styles from './ManageGroupEdit.module.scss'

const ManageGroupEdit: FC<{ queryId: string }> = ({ queryId }) => {
	const { registerInput, control, errors, data, handleSubmit, onSubmit } =
		useManageGroupEdit(queryId)
	const { data: categoriesData } = useCategoriesSelect()

	return (
		<div className={styles.edit}>
			<Container>
				<div className={styles.wrapper}>
					<h1 className={styles.heading}>
						Редактирование - <span>{data?.groupById.name ? data.groupById.name : 'Группы'}</span>
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
							name="categories"
							defaultValue={[]}
							control={control}
							render={({ field, fieldState: { error } }) => (
								<ReactSelect
									field={field}
									options={categoriesData || []}
									label="Родительские категории"
									error={error}
									className={styles.select}
								/>
							)}
							rules={{
								required: 'Родительские категории обязательное поле',
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
						<div className={styles.button}>
							<button className={styles.update}>Обновить</button>
						</div>
					</form>
				</div>
			</Container>
		</div>
	)
}

export default ManageGroupEdit
