import { type FC, useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import styles from './Catalog.module.scss'
import type { ICatalog } from './interface/catalog.interface'

const Catalog: FC<ICatalog> = ({ children, areaId }) => {
	const modalRef = useRef<HTMLElement | null>(null)
	const [ref, setRef] = useState(modalRef.current)

	useEffect(() => {
		if (areaId) {
			const element = document.getElementById(areaId)
			if (element) {
				element.innerHTML = ''
				setRef(element)
			} else {
				setRef(null)
			}
		} else {
			setRef(null)
		}
	}, [areaId])

	if (!ref) return null

	return ReactDOM.createPortal(
		<div className={styles.catalog}>{children}</div>,
		ref
	)
}

export default Catalog
