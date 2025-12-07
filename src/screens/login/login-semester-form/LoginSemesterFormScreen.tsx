import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { LoginSemesterForm } from '@/features/login';

export const LoginSemesterFormScreen = () => (
	<View style={styles.container}>
		<Text style={styles.description}>
			Выбери семестр, на котором ты учишься
		</Text>

		<LoginSemesterForm style={styles.form} />
	</View>
);

const styles = StyleSheet.create(theme => ({
	container: {
		flex: 1,
		paddingHorizontal: theme.spacing
	},
	description: {
		maxWidth: 280,
		marginBottom: theme.spacing * 1.75,
		alignSelf: 'center',
		textAlign: 'center',
		color: theme.colors.blackAlpha(0.5),
		fontSize: 14,
		fontFamily: theme.typography.fontFamily.GolosTextRegular
	},
	form: {
		flex: 1
	}
}));
