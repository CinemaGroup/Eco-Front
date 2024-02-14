import { useState } from 'react'
import { useSwiper } from 'swiper/react'

export const useSlider = () => {
	const [swiper, setSwiper] = useState(useSwiper())

	const next = () => {
		swiper.slideNext()
	}

	const previous = () => {
		swiper.slidePrev()
	}

	return {
		setSwiper,
		previous,
		next,
	}
}
