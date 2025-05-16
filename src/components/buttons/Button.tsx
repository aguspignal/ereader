import {
	ActivityIndicator,
	StyleProp,
	Text,
	TextStyle,
	TouchableOpacity,
	ViewStyle,
} from "react-native"
import { theme } from "../../resources/theme"
import Icon from "@react-native-vector-icons/material-design-icons"

type Props = {
	title: string
	onPress: () => void
	size?: "xs" | "s" | "m" | "l"
	color?: keyof typeof theme.colors
	icon?: React.ComponentProps<typeof Icon>["name"]
	isDisabled?: boolean
	isBordered?: boolean
	isLoading?: boolean
	alignSelf?: boolean
	style?: StyleProp<ViewStyle>
}

export default function Button({
	title,
	onPress,
	size = "m",
	color = "textDark",
	icon,
	isDisabled = false,
	isBordered = false,
	isLoading = false,
	alignSelf = false,
	style,
}: Props) {
	const textColor = isDisabled
		? theme.colors.grayDark
		: isBordered
		? theme.colors[color as keyof typeof theme.colors]
		: theme.colors.textLight

	const textSize =
		size === "xs"
			? theme.fontSize.xxs
			: size === "s"
			? theme.fontSize.xs
			: size === "m"
			? theme.fontSize.s
			: theme.fontSize.m

	const iconSize =
		size === "s" ? theme.fontSize.l : size === "m" ? theme.fontSize.xl : theme.fontSize.xxl

	const paddingVertical =
		size === "xs" || size === "s" || size === "m" ? theme.spacing.xxs : theme.spacing.xs

	const paddingHorizontal =
		size === "xs" || size === "s" || size === "m" ? theme.spacing.s : theme.spacing.m

	const bgColor =
		isDisabled || isLoading
			? theme.colors.grayLight
			: !isBordered
			? theme.colors[color as keyof typeof theme.colors]
			: undefined

	const borderColor = isLoading
		? theme.colors.grayLight
		: theme.colors[color as keyof typeof theme.colors]

	const btnStyles: StyleProp<ViewStyle> = {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: paddingVertical,
		paddingHorizontal: paddingHorizontal,
		backgroundColor: bgColor,
		borderWidth: isDisabled ? 0 : isBordered ? 1 : 0,
		borderColor: borderColor,
		borderRadius: 80,
		alignSelf: alignSelf ? "center" : "auto",
	}

	const textStyles: StyleProp<TextStyle> = {
		color: textColor,
		fontSize: textSize,
		fontWeight: "600",
	}

	const iconStyles: StyleProp<TextStyle> = {
		color: textColor,
		fontSize: iconSize,
		marginRight: theme.spacing.xxs,
	}

	return isLoading ? (
		<TouchableOpacity
			activeOpacity={0.8}
			style={[
				btnStyles,
				style,
				isLoading && size === "xs"
					? { paddingHorizontal: theme.spacing.xxs, paddingVertical: theme.spacing.xxs }
					: {},
			]}
		>
			<ActivityIndicator size="small" />
		</TouchableOpacity>
	) : (
		<TouchableOpacity
			activeOpacity={0.8}
			style={[btnStyles, style]}
			onPress={onPress}
			disabled={isDisabled}
		>
			{icon === undefined ? null : <Icon name={icon} style={iconStyles} />}
			<Text style={textStyles}>{title}</Text>
		</TouchableOpacity>
	)
}
