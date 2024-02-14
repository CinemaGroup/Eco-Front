import { RequestType } from '@/__generated__/output'
import Field from '@/components/ui/form-elements/field/Field'
import MaskedField from '@/components/ui/form-elements/masked-field/MaskedField'
import { useSendRequest } from '@/hooks/api/request/useSendRequest'
import type { FC } from 'react'
import { Controller } from 'react-hook-form'
import styles from './CallPopup.module.scss'

const CallPopup: FC<{ label: string }> = ({ label }) => {
	const { handleSubmit, control, onSubmit, errors, registerInput } =
		useSendRequest(RequestType.Null)

	return (
		<div className={styles.call}>
			<h2 className={styles.title}>{label}</h2>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<Field
					{...registerInput('name', {
						required: 'Имя обязательное поле',
					})}
					variant="small"
					className={styles.field}
					placeholder="Имя"
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
		</div>
	)
}

export default CallPopup
