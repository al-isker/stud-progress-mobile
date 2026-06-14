import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { LoginSemesterForm } from '@/features/login';
import { Br } from '@/shared/ui/br';

export const LoginSemesterFormScreen = () => (
	<View style={styles.container}>
		<Text style={styles.description}>
			Выбери семестр, на котором
			<Br />
			ты учишься
		</Text>

		<LoginSemesterForm style={styles.form} />
	</View>
);

const styles = StyleSheet.create(theme => ({
	container: {
		flex: 1,
		paddingHorizontal: theme.spacing,
		backgroundColor: theme.colors.bgPaper
	},
	description: {
		marginBottom: theme.spacing * 1.5,
		alignSelf: 'center',
		textAlign: 'center',
		color: theme.colors.blackAlpha(0.5),
		fontSize: 14,
		fontFamily: theme.typography.fontFamilies.GolosTextRegular
	},
	form: {
		flex: 1
	}
}));
