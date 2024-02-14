'use client'

import { RequestType } from '@/__generated__/output'
import Field from '@/components/ui/form-elements/field/Field'
import MaskedField from '@/components/ui/form-elements/masked-field/MaskedField'
import { useSendRequest } from '@/hooks/api/request/useSendRequest'
import type { FC } from 'react'
import { Controller } from 'react-hook-form'
import styles from '../HeaderBand.module.scss'

const HeaderForm: FC = () => {
	const { registerInput, control, errors, handleSubmit, onSubmit } =
		useSendRequest(RequestType.DryCleaning)

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<Field
				{...registerInput('name', {
					required: 'Имя обязательное поле',
				})}
				variant="small"
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
						variant="small"
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

export default HeaderForm
