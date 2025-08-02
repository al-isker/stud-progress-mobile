import { StyleProp, View, ViewProps, ViewStyle } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { LogoIcon } from '@/shared/assets/icons';
import { APP_TITLE } from '@/shared/config/app-data';
import { Paper } from '../../paper/ui/Paper';
import { Typography } from '../../typography';

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
				<LogoIcon color={theme.colors.alwaysWhite} style={styles.logo} />

				<Typography colorOnPrimary style={styles.title}>
					{APP_TITLE}
				</Typography>
			</View>

			<Paper style={[styles.paper, contentContainerStyle]}>{children}</Paper>
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
		alignItems: 'center',
		backgroundColor: theme.colors.primary
	},
	backButton: {
		position: 'absolute',
		top: theme.spacing / 2,
		left: theme.spacing
	},
	logo: {
		height: '50%',
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
