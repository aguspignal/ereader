import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootStackParamList } from "../types/navigation"
import Home from "../screens/Home"
import HomeHeader from "../components/headers/HomeHeader"
import EpubReader from "../screens/EpubReader"

const Navigator = createNativeStackNavigator<RootStackParamList>()

export default function RootNavigator() {
	return (
		<Navigator.Navigator>
			<Navigator.Screen
				name="Home"
				component={Home}
				options={{
					header: ({ back }) => <HomeHeader back={back} />,
				}}
			/>
			<Navigator.Screen name="EpubReader" component={EpubReader} />
		</Navigator.Navigator>
	)
}
