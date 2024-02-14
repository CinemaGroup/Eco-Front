interface IImageProps {
	quality?: number
	src: string
	alt: string
	className?: string
}

export interface IImage extends IImageProps {
	width: number
	height: number
	sizes?: string
}

export interface IFilledImage extends IImageProps {}
