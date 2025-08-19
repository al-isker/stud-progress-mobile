import { Text, View } from 'react-native';
import { SharedValue } from 'react-native-reanimated';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { ProgressLoader } from '../../progress-loader';

export type LoadingScreenProps = {
	progress: SharedValue<number>;
	description?: string;
};

export const LoadingScreen = ({
	progress,
	description
}: LoadingScreenProps) => {
	const { styles, theme } = useStyles(stylesheet);

	return (
		<View style={styles.container}>
			<View style={styles.appBanner}>
				<Text style={styles.title}>Stud Progress</Text>
			</View>

			{description && <Text style={styles.description}>{description}</Text>}

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
		width: '100%',
		margin: 'auto',
		justifyContent: 'center',
		alignItems: 'center',
		rowGap: 4
	},
	appIcon: {
		width: '60%',
		height: 'auto',
		aspectRatio: 1
	},
	title: {
		color: theme.colors.alwaysWhite,
		fontSize: 30,
		fontFamily: theme.typography.fontFamily.GolosTextBold
	},
	description: {
		marginBottom: 12,
		textAlign: 'center',
		color: theme.colors.alwaysWhite,
		fontSize: 13,
		fontFamily: theme.typography.fontFamily.GolosTextRegular
	}
}));
