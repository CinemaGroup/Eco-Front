'use client'

import Field from '@/components/ui/form-elements/field/Field'
import MaskedField from '@/components/ui/form-elements/masked-field/MaskedField'
import { useSendRequest } from '@/hooks/api/request/useSendRequest'
import type { FC } from 'react'
import { Controller } from 'react-hook-form'
import styles from '../Request.module.scss'

const RequestForm: FC = () => {
	const { registerInput, errors, control, handleSubmit, onSubmit } =
		useSendRequest()

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<Field
				{...registerInput('name', {
					required: 'Имя обязательное поле',
				})}
				variant="big"
				className={styles.field}
				placeholder="Имя"
				errorColor="white"
				error={errors.name}
			/>
			<Controller
				name="phone"
				control={control}
				defaultValue=""
				render={({ field: { value, onChange }, fieldState: { error } }) => (
					<MaskedField
						className={styles.field}
						mask={'+{7} (000) 000-00-00'}
						variant="big"
						placeholder="Телефон"
						errorColor="white"
						error={error}
						value={String(value)}
						onChange={onChange}
					/>
				)}
				rules={{
					required: 'Телефон обязательное поле',
				}}
			/>
			<button className={styles.send}>Отправить</button>
		</form>
	)
}

export default RequestForm
