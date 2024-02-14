'use client'

import StaticImage from '@/components/ui/common/image/StaticImage'
import CustomSelect from '@/components/ui/common/selects/custom-select/Select'
import Field from '@/components/ui/form-elements/field/Field'
import Modal from '@/components/ui/templates/modal/Modal'
import { useCalculatorCategories } from '@/hooks/api/category/useCalculatorCategories'
import { useCalculatorGroups } from '@/hooks/api/group/useCalculatorGroups'
import { useCalculator } from '@/hooks/helpers/calculator/useCalculator'
import { type FC } from 'react'
import { Controller } from 'react-hook-form'
import styles from '../Calculator.module.scss'

const CalculatorForm: FC = () => {
	const { price, isShow, setIsShow, handleSubmit, onSubmit, control } =
		useCalculator()
	const { data: categoriesData } = useCalculatorCategories()
	const { data: groupsData, handleRefetch } = useCalculatorGroups()

	if (!groupsData || groupsData.length < 1) return null

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<Controller
					name="category"
					control={control}
					render={({ field: { onChange, value }, fieldState: { error } }) => (
						<CustomSelect<string>
							className={styles.select}
							label="Категория"
							placeholder="Выберите категорию"
							data={categoriesData || []}
							onChange={(value) => {
								handleRefetch(value.key)
								onChange({
									label: value.label,
									key: value.key,
								})
							}}
							value={value}
							error={error}
							variant="white"
						/>
					)}
					rules={{
						required: 'Категория обязательное поле',
					}}
				/>
				<Controller
					name="group"
					control={control}
					render={({ field: { onChange, value }, fieldState: { error } }) => (
						<CustomSelect<string>
							className={styles.select}
							label="Группа"
							placeholder="Выберите группу"
							data={groupsData || []}
							onChange={onChange}
							value={value}
							variant="white"
							error={error}
						/>
					)}
					rules={{
						required: 'Группа обязательное поле',
					}}
				/>
				<Controller
					name="quantity"
					control={control}
					render={({ field: { value, onChange }, fieldState: { error } }) => (
						<Field
							onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
							value={value}
							className={styles.field}
							variant="big"
							label="Количество"
							labelColor="black"
							labelSize="big"
							placeholder="Введите количество предметов"
							error={error}
						/>
					)}
					rules={{
						required: 'Количество обязательное поле',
					}}
				/>
				<div className={styles.sendBox}>
					<button className={styles.send}>Отправить</button>
				</div>
			</form>
			{isShow && (
				<Modal closeModal={() => setIsShow(false)}>
					<div className={styles.popup}>
						<h2 className={styles.popupTitle}>Примерная цена</h2>
						<p className={styles.popupPrice}>
							От {price}
							<StaticImage
								src="/images/icons/currency.png"
								width={25}
								height={25}
								alt="Currency"
							/>
						</p>
					</div>
				</Modal>
			)}
		</>
	)
}

export default CalculatorForm
