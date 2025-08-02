import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { LoginSemesterForm } from '@/features/login';
import { Typography } from '@/shared/ui/typography';

export const LoginSemesterFormScreen = () => {
	const { styles } = useStyles(stylesheet);

	return (
		<View style={styles.container}>
			<Typography variant='t2' style={styles.description}>
				Выбери семестр, на котором ты учишься
			</Typography>

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
		textAlign: 'center'
	},
	form: {
		flex: 1
	}
}));
