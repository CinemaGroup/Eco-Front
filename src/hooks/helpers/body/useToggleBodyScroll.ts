export const useToggleBodyScroll = (type: 'on' | 'off') => {
	const body = document.querySelector('body')

	if (!body) {
		return
	}

	type === 'on'
		? (body.style.overflow = 'hidden')
		: (body.style.overflow = 'visible')
}
