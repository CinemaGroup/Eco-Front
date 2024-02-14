'use client'

import { useState, type FC } from 'react'
import Modal from '../modal/Modal'
import type { ICallButton } from './interface/call-button.interface'
import CallPopup from './popup/CallPopup'

const CallButton: FC<ICallButton> = ({ label, className }) => {
	const [isShow, setIsShow] = useState(false)

	return (
		<>
			<button
				className={className && className}
				onClick={() => setIsShow(!isShow)}
			>
				{label}
			</button>
			{isShow && (
				<Modal closeModal={() => setIsShow(false)}>
					<CallPopup label={label} />
				</Modal>
			)}
		</>
	)
}

export default CallButton
