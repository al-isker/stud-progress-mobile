import { Text, View } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';
import { TeaCupIcon } from '@/shared/ui/icons';

export const SubjectStatsScreen = () => {
	const { theme } = useUnistyles();

	return (
		<View style={styles.container}>
			<TeaCupIcon style={styles.icon} color={theme.colors.primary} />

			<Text style={styles.text}>Совсем скоро...</Text>
		</View>
	);
};

const styles = StyleSheet.create(theme => ({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		rowGap: 2
	},
	icon: {
		width: 60,
		height: 60
	},
	text: {
		textAlign: 'center',
		color: theme.colors.primary,
		fontSize: 15,
		fontFamily: theme.typography.fontFamily.GolosText,
		fontWeight: 500
	}
}));
