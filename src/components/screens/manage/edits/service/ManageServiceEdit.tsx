'use client'

import Container from '@/components/ui/common/container/Container'
import ReactSelect from '@/components/ui/common/selects/react-select/ReactSelect'
import Field from '@/components/ui/form-elements/field/Field'
import TextEditor from '@/components/ui/form-elements/text-editor/TextEditor'
import UploadField from '@/components/ui/form-elements/upload-field/UploadField'
import { useGroupsSelect } from '@/hooks/api/group/useGroupsSelect'
import { useManageServiceEdit } from '@/hooks/api/manage/services/useManageServiceEdit'
import type { FC } from 'react'
import { Controller } from 'react-hook-form'
import { stripHtml } from 'string-strip-html'
import styles from './ManageServiceEdit.module.scss'

const ManageServiceEdit: FC<{ queryId: string }> = ({ queryId }) => {
	const { registerInput, control, errors, data, handleSubmit, onSubmit } =
		useManageServiceEdit(queryId)
	const { data: groupsData } = useGroupsSelect()

	return (
		<div className={styles.edit}>
			<Container>
				<div className={styles.wrapper}>
					<h1 className={styles.heading}>
						Редактирование -{' '}
						<span>
							{data?.serviceById.name ? data.serviceById.name : 'Услуги'}
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
							name="price"
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
									label="Цена"
									error={error}
								/>
							)}
							rules={{
								required: 'Цена обязательно поле',
							}}
						/>
						<Field
							{...registerInput('term', {
								required: 'Срок обязательное поле',
							})}
							theme="black"
							variant="manage"
							className={styles.field}
							label="Срок"
							error={errors.term}
						/>
						<Controller
							name="groups"
							control={control}
							render={({ field, fieldState: { error } }) => (
								<ReactSelect
									field={field}
									options={groupsData || []}
									label="Родительские группы"
									error={error}
									className={styles.select}
								/>
							)}
							rules={{
								required: 'Родительские группы обязательное поле',
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

export default ManageServiceEdit
