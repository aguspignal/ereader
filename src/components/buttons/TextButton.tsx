import { StyleProp, Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native"
import { theme } from "../../resources/theme"

type Props = {
	title: string
	onPress: () => void
	color?: keyof typeof theme.colors
	size?: keyof typeof theme.fontSize
	withUnderline?: boolean
	align?: "center" | "justify" | "left" | "right" | "auto"
	containerStyle?: StyleProp<ViewStyle>
}

export default function TextButton({
	title,
	onPress,
	color = "textDark",
	size = "s",
	withUnderline = false,
	align = "auto",
	containerStyle = {},
}: Props) {
	const textStyles: StyleProp<TextStyle> = {
		color: theme.colors[color as keyof typeof theme.colors],
		fontSize: theme.fontSize[size as keyof typeof theme.fontSize],
		fontWeight: "600",
		textDecorationLine: withUnderline ? "underline" : "none",
		textAlign: align,
	}

	return (
		<TouchableOpacity activeOpacity={0.8} style={containerStyle} onPress={onPress}>
			<Text style={textStyles}>{title}</Text>
		</TouchableOpacity>
	)
}
