import { Text, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { LoginMainForm } from '@/features/login';

export const LoginMainFormScreen = () => {
	const { styles } = useStyles(stylesheet);

	return (
		<View style={styles.container}>
			<Text style={styles.description}>
				Введи свои учётные данные для личного кабинета
			</Text>

			<LoginMainForm />
		</View>
	);
};

const stylesheet = createStyleSheet(theme => ({
	container: {
		flex: 1,
		paddingHorizontal: theme.spacing * 1.5
	},
	description: {
		maxWidth: 280,
		marginBottom: theme.spacing * 1.75,
		alignSelf: 'center',
		textAlign: 'center',
		color: theme.colors.blackAlpha(0.9),
		fontSize: 24,
		fontFamily: theme.typography.fontFamily.GolosTextSemiBold
	}
}));
