export const ADMIN_PAGES = {
	HOME: '/manage',
	LOGIN: '/auth?type=login',
	REGISTER: '/auth?type=register',
	GROUPS: '/manage/groups',
	CATEGORIES: '/manage/categories',
	OFFERS: '/manage/offers',
	ADVANTAGES: '/manage/advantages',
	REVIEWS: '/manage/reviews',
	SERVICES: '/manage/services',
	RUBRICS: '/manage/rubrics',
	ORDERS: `/manage/orders`,
	REQUESTS: `/manage/requests`,
}

export const ADMIN_EDITS = {
	GROUP: `${ADMIN_PAGES.HOME}/group/edit`,
	CATEGORY: `${ADMIN_PAGES.HOME}/category/edit`,
	OFFER: `${ADMIN_PAGES.HOME}/offer/edit`,
	ADVANTAGE: `${ADMIN_PAGES.HOME}/advantage/edit`,
	REVIEW: `${ADMIN_PAGES.HOME}/review/edit`,
	SERVICE: `${ADMIN_PAGES.HOME}/service/edit`,
	RUBRIC: `${ADMIN_PAGES.HOME}/rubric/edit`,
	ORDER: `${ADMIN_PAGES.HOME}/order/edit`,
	REQUEST: `${ADMIN_PAGES.HOME}/request/edit`,
}

export const ADMIN_VIEWS = {
	ORDER: `${ADMIN_PAGES.HOME}/order/view`,
	REQUEST: `${ADMIN_PAGES.HOME}/request/view`,
}

export const PUBLIC_PAGES = {
	HOME: '/',
}
