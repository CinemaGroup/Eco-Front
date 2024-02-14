export interface IStorage {
	onFileSelect: (fileUrl: string) => void
	closeModal: () => void
	className?: string
}
