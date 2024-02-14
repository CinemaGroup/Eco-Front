import type { EditorProps } from 'draft-js'
import type { IFieldProps } from '../../interface/field.interface'

type TypeEditorPropsField = EditorProps & IFieldProps

export interface ITextEditor extends Omit<TypeEditorPropsField, 'editorState'> {
	label?: string
	onChange: (...event: any[]) => void
	value?: string | null
}
