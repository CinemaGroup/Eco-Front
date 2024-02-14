import type { GetFolderItemsQuery } from '@/__generated__/output'

export interface IStorageContent {
	data: GetFolderItemsQuery | undefined
	goTo: (folderPath: string) => void
	previous: () => void
	onFileSelect: (fileUrl: string) => void
	isFirst: boolean
	folderPath: string
}
