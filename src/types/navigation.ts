import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type RootStackParamList = {
	Home: undefined
	EpubReader: undefined
}

export type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">
export type EpubReaderProps = NativeStackScreenProps<RootStackParamList, "EpubReader">
