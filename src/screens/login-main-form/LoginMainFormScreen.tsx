import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { LoginMainForm } from '@/features/login';

export const LoginMainFormScreen = () => (
	<View style={styles.container}>
		<Text style={styles.description}>
			Введи свои учётные данные для личного кабинета
		</Text>

		<LoginMainForm style={styles.form} />
	</View>
);

const styles = StyleSheet.create(theme => ({
	container: {
		flex: 1,
		paddingHorizontal: theme.spacing * 1.5,
		backgroundColor: theme.colors.bgPaper
	},
	description: {
		maxWidth: 280,
		marginBottom: theme.spacing * 1.5,
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
