import { Text, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { LoginSemesterForm } from '@/features/login';

export const LoginSemesterFormScreen = () => {
	const { styles } = useStyles(stylesheet);

	return (
		<View style={styles.container}>
			<Text style={styles.description}>
				Выбери семестр, на котором ты учишься
			</Text>

			<LoginSemesterForm style={styles.form} />
		</View>
	);
};

const stylesheet = createStyleSheet(theme => ({
	container: {
		flex: 1,
		paddingHorizontal: theme.spacing
	},
	description: {
		maxWidth: 280,
		marginBottom: theme.spacing * 1.75,
		alignSelf: 'center',
		textAlign: 'center',
		color: theme.colors.blackAlpha(0.9),
		fontSize: 24,
		fontFamily: theme.typography.fontFamily.GolosTextSemiBold
	},
	form: {
		flex: 1
	}
}));
