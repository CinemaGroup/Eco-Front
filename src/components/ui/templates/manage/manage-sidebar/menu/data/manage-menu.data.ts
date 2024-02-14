import { ADMIN_PAGES } from '@/constants/url.constants'
import type { IManageMenu } from '../interface/manage-menu.interface'

export const MANAGE_MENU_DATA: IManageMenu = {
	items: [
		{
			label: 'Рубрики',
			href: `${ADMIN_PAGES.RUBRICS}`,
		},
		{
			label: 'Категории',
			href: `${ADMIN_PAGES.CATEGORIES}`,
		},
		{
			label: 'Группы',
			href: `${ADMIN_PAGES.GROUPS}`,
		},
		{
			label: 'Услуги',
			href: `${ADMIN_PAGES.SERVICES}`,
		},
		{
			label: 'Преимущества',
			href: `${ADMIN_PAGES.ADVANTAGES}`,
		},
		{
			label: 'Спец. Предложения',
			href: `${ADMIN_PAGES.OFFERS}`,
		},
		{
			label: 'Отзывы',
			href: `${ADMIN_PAGES.REVIEWS}`,
		},
		{
			label: 'Запросы',
			href: `${ADMIN_PAGES.REQUESTS}`,
		},
		{
			label: 'Заказы',
			href: `${ADMIN_PAGES.ORDERS}`,
		},
	],
}
