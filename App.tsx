import { NavigationContainer } from "@react-navigation/native"
import RootNavigator from "./src/navigation/RootNavigator"
import { ReaderProvider } from "@epubjs-react-native/core"

export default function App() {
	return (
		<NavigationContainer>
			<ReaderProvider>
				<RootNavigator />
			</ReaderProvider>
		</NavigationContainer>
	)
}
