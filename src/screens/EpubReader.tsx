import { Reader, useReader } from "@epubjs-react-native/core"
import { useFileSystem } from "@epubjs-react-native/expo-file-system"
import { EpubReaderProps } from "../types/navigation"

export default function EpubReader({}: EpubReaderProps) {
	const { goToLocation } = useReader()

	return (
		<Reader
			src="https://s3.amazonaws.com/moby-dick/OPS/package.opf"
			fileSystem={useFileSystem}
		/>
	)
}
