import { StyleSheet, View } from "react-native"
import { theme } from "../resources/theme"
import Button from "../components/buttons/Button"
import { HomeProps } from "../types/navigation"

export default function Home({ navigation }: HomeProps) {
	function handleLoadBook() {
		navigation.navigate("EpubReader")
	}

	return (
		<View style={styles.container}>
			<Button title="Go to book" onPress={handleLoadBook} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.backgroundDark,
	},
})
