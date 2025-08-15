import { Text, View } from 'react-native';
import { SharedValue } from 'react-native-reanimated';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { LogoIcon } from '@/shared/assets/icons';
import { APP_TITLE } from '@/shared/config/app-data';
import { Typography } from '@/shared/ui/typography';
import { ProgressLoader } from '../../progress-loader';

export type LoadingScreenProps = {
	progress: SharedValue<number>;
	caption?: string;
};

export const LoadingScreen = ({ progress, caption }: LoadingScreenProps) => {
	const { styles, theme } = useStyles(stylesheet);

	return (
		<View style={styles.container}>
			<View style={styles.appBanner}>
				<LogoIcon style={styles.logo} color={theme.colors.alwaysWhite} />

				<Typography colorOnPrimary style={styles.title}>
					{APP_TITLE}
				</Typography>
			</View>

			{caption && <Text style={styles.caption}>{caption}</Text>}

			<ProgressLoader colorOnPrimary sharedValue={progress} />
		</View>
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
	},
	caption: {
		marginBottom: 12,
		textAlign: 'center',
		color: theme.colors.alwaysWhite,
		fontSize: 13,
		fontFamily: theme.typography.fontFamily.GolosTextRegular
	}
}));
