import { Text, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { CupFirstIcon } from '@/shared/assets/icons';

export const SubjectStatsScreen = () => {
	const { styles, theme } = useStyles(stylesheet);

	return (
		<View style={styles.container}>
			<CupFirstIcon style={styles.icon} color={theme.colors.primary} />

			<Text style={styles.text}>Совсем скоро...</Text>
		</View>
	);
};

const stylesheet = createStyleSheet(theme => ({
	container: {
		padding: theme.spacing,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		rowGap: 6
	},
	icon: {
		width: 60,
		height: 60
	},
	text: {
		fontFamily: theme.typography.fontFamily.GolosTextMedium,
		fontSize: 15,
		color: theme.colors.primary,
		textAlign: 'center'
	}
}));
