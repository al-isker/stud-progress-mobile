import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { LoginProgressLoader } from '@/features/login';
import { LogoIcon } from '@/shared/assets/icons';
import { APP_TITLE } from '@/shared/config/app-data';
import { Typography } from '@/shared/ui/typography';

export const LoginLoading = () => {
	const { styles, theme } = useStyles(stylesheet);

	return (
		<>
			<View style={styles.container}>
				<View style={styles.appBanner}>
					<LogoIcon style={styles.logo} color={theme.colors.alwaysWhite} />

					<Typography colorOnPrimary style={styles.title}>
						{APP_TITLE}
					</Typography>
				</View>

				<LoginProgressLoader colorOnPrimary />
			</View>
		</>
	);
};

const stylesheet = createStyleSheet(theme => ({
	container: {
		flex: 1,
		padding: theme.spacing * 2,
		backgroundColor: theme.colors.primary
	},
	appBanner: {
		margin: 'auto',
		justifyContent: 'center',
		alignItems: 'center',
		rowGap: 4
	},
	logo: {
		width: '50%',
		aspectRatio: 1
	},
	title: {
		fontSize: 30
	}
}));
