'use client'

import { useEffect, useRef, type FC } from 'react'
import styles from './HeaderVideo.module.scss'

const HeaderVideo: FC<{ src: string }> = ({ src }) => {
	const videoRef = useRef<HTMLVideoElement | null>(null)

	useEffect(() => {
		const video = videoRef.current
		if (video) {
			const handleEnded = () => {
				if (video) {
					video.play()
				}
			}

			video.addEventListener('ended', handleEnded)

			return () => {
				video.removeEventListener('ended', handleEnded)
			}
		}
	}, [])

	return (
		<video
			className={styles.video}
			ref={videoRef}
			src={src}
			autoPlay
			loop
			muted
		/>
	)
}

export default HeaderVideo
