import { Image, StyleProp, View, ViewProps, ViewStyle } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { AppIcon } from '@/shared/assets/images';
import { Paper } from '../../paper/ui/Paper';

export type OutsideMainLayoutProps = ViewProps & {
	contentContainerStyle?: StyleProp<ViewStyle>;
};

export const OutsideMainLayout = ({
	children,
	style,
	contentContainerStyle,
	...props
}: OutsideMainLayoutProps) => {
	const { styles, theme } = useStyles(stylesheet);

	return (
		<View style={[styles.layout, style]} {...props}>
			<View style={styles.header}>
				<Image style={styles.appIcon} source={AppIcon} />
			</View>

			<Paper disableAndroidBorder style={[styles.paper, contentContainerStyle]}>
				{children}
			</Paper>
		</View>
	);
};

const stylesheet = createStyleSheet(theme => ({
	layout: {
		flex: 1,
		backgroundColor: theme.colors.primary
	},
	header: {
		flex: 0.3,
		flexShrink: 1,
		rowGap: 4,
		justifyContent: 'center',
		alignItems: 'center'
	},
	appIcon: {
		height: '85%',
		aspectRatio: 1
	},
	title: {
		fontSize: 28
	},
	paper: {
		flex: 0.7,
		paddingTop: theme.spacing,
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0
	}
}));
