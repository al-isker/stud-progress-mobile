import { Text } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { UpdateSemesterForm } from '@/features/update-semester';
import { OutsideMainLayout } from '@/shared/ui/outside-main-layout';

export const UpdateSemesterFormScreen = () => {
	const { styles } = useStyles(stylesheet);

	return (
		<OutsideMainLayout contentContainerStyle={styles.layoutContentContainer}>
			<Text style={styles.title}>Изменение семестра</Text>

			<Text style={styles.description}>
				Выбери семестр, на который хочешь переключится
			</Text>

			<UpdateSemesterForm style={styles.form} />
		</OutsideMainLayout>
	);
};

const stylesheet = createStyleSheet(theme => ({
	layoutContentContainer: {
		paddingHorizontal: theme.spacing
	},
	title: {
		marginVertical: theme.spacing,
		textAlign: 'center',
		color: theme.colors.blackAlpha(0.9),
		fontSize: 24,
		fontFamily: theme.typography.fontFamily.GolosTextSemiBold
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
