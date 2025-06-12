import { StyleProp, View, ViewStyle } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { LogoIcon } from '@/shared/assets/icons';
import { APP_TITLE } from '@/shared/config/app-data';
import { Typography } from '@/shared/ui/typography';

type LoginFormHeaderProps = {
	style?: StyleProp<ViewStyle>;
};

export const LoginFormHeader = ({ style }: LoginFormHeaderProps) => {
	const { styles, theme } = useStyles(stylesheet);

	return (
		<View style={[styles.header, style]}>
			<LogoIcon color={theme.colors.alwaysWhite} style={styles.logo} />

			<Typography colorOnPrimary style={styles.title}>
				{APP_TITLE}
			</Typography>
		</View>
	);
};

const stylesheet = createStyleSheet(theme => ({
	header: {
		rowGap: 4,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: theme.colors.primary
	},
	logo: {
		height: '50%',
		aspectRatio: 1
	},
	title: {
		fontSize: 28
	}
}));
