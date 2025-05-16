import { Header } from "@react-navigation/elements"
import { StyleSheet } from "react-native"
import { theme } from "../../resources/theme"

type Props = {
	back?: {
		title: string | undefined
		href: string | undefined
	}
}

export default function HomeHeader({ back }: Props) {
	return (
		<Header
			title="Home"
			headerStyle={styles.container}
			headerTitleStyle={styles.title}
			headerShadowVisible={false}
			back={back}
		/>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.colors.backgroundDark,
	},
	title: {
		color: theme.colors.textLight,
	},
})
