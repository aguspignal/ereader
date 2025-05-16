import { StyleSheet, Text, View } from "react-native"
import { theme } from "../resources/theme"

export default function Home() {
	return (
		<View style={styles.container}>
			<Text>Hi</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.backgroundDark,
	},
})
