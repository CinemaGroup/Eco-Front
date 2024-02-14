import Field from '@/components/ui/form-elements/field/Field'
import MaskedField from '@/components/ui/form-elements/masked-field/MaskedField'
import { usePlaceOrder } from '@/hooks/api/order/usePlaceOrder'
import { useCartStore } from '@/store/cart-store'
import type { FC } from 'react'
import { Controller } from 'react-hook-form'
import styles from './CartForm.module.scss'

const CartForm: FC = () => {
	const { cart, totalPrice } = useCartStore()
	const { registerInput, control, errors, handleSubmit, onSubmit } =
		usePlaceOrder(cart, totalPrice())
	return (
		<div className={styles.formWrapper}>
			<p className={styles.formText}>
				Для оформления заказа заполните форму ниже
			</p>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<Field
					{...registerInput('name', {
						required: 'Ваше имя обязательное поле',
					})}
					className={styles.field}
					variant="small"
					placeholder="Ваше имя"
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
				<button className={styles.place}>Оформить заказ</button>
			</form>
		</div>
	)
}

export default CartForm
