'use client'

import '@/assets/styles/react-select.scss'
import cn from 'clsx'
import { ContentState, EditorState, convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import htmlToDraft from 'html-to-draftjs'
import { useEffect, useState, type FC } from 'react'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import styles from './TextEditor.module.scss'
import type { ITextEditor } from './interface/text-editor.interface'

const TextEditor: FC<ITextEditor> = ({
	onChange,
	value,
	placeholder,
	error,
	label,
	className,
}) => {
	const [editorState, setEditorState] = useState(EditorState.createEmpty())
	const [isUpdated, setIsUpdated] = useState(false)

	useEffect(() => {
		if (isUpdated) return

		const defaultValue = value || ''
		const blocksFromHtml = htmlToDraft(defaultValue)

		const contentState = ContentState.createFromBlockArray(
			blocksFromHtml.contentBlocks,
			blocksFromHtml.entityMap
		)

		const newEditorState = EditorState.createWithContent(contentState)
		setEditorState(newEditorState)
	}, [value, isUpdated])

	const onEditorStateChange = (editorState: EditorState) => {
		setIsUpdated(true)
		setEditorState(editorState)

		return onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())))
	}

	return (
		<div className={cn(styles.wrapper, className && className)}>
			{label && <p className={styles.label}>{label}</p>}
			{error && <p className={styles.error}>{error.message}</p>}
			<div className={styles.fill}>
				<Editor
					toolbarClassName={styles.toolbar}
					editorClassName={styles.editor}
					editorState={editorState}
					onEditorStateChange={onEditorStateChange}
					placeholder={placeholder}
					spellCheck
					toolbar={{
						options: ['inline', 'list', 'colorPicker'],
						inline: {
							inDropdown: false,
							options: ['bold', 'italic', 'underline', 'strikethrough'],
						},
						list: {
							inDropdown: false,
							options: ['ordered'],
						},
					}}
				/>
			</div>
		</div>
	)
}

export default TextEditor
