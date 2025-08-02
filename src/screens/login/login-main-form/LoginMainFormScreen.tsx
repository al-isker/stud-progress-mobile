import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { LoginMainForm } from '@/features/login';
import { Typography } from '@/shared/ui/typography';

export const LoginMainFormScreen = () => {
	const { styles } = useStyles(stylesheet);

	return (
		<View style={styles.container}>
			<Typography variant='t2' style={styles.description}>
				Введи свои учётные данные для личного кабинета
			</Typography>

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
		textAlign: 'center'
	}
}));
