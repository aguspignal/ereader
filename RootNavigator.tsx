import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootStackParamList } from "./src/types/navigation"
import Home from "./src/screens/Home"

const Navigator = createNativeStackNavigator<RootStackParamList>()

export default function RootNavigator() {
	return (
		<Navigator.Navigator>
			<Navigator.Screen name="Home" component={Home} />
		</Navigator.Navigator>
	)
}
