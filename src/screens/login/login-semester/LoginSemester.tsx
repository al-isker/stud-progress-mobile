import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { LoginSemesterForm } from '@/features/login';
import { Typography } from '@/shared/ui/typography';

export const LoginSemester = () => {
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
		paddingHorizontal: theme.spacing.container,
		justifyContent: 'space-between'
	},
	description: {
		width: 280,
		marginBottom: 24,
		alignSelf: 'center',
		textAlign: 'center'
	},
	form: {
		flexShrink: 1
	}
}));
